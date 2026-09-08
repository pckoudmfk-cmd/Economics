// Vercel Serverless Function (Node runtime).
// Verifies the teacher PIN against a server-side secret and, if it matches,
// mints a Firebase custom auth token carrying { role: "teacher" }. The PIN
// itself never reaches the browser bundle — only this function sees it.
//
// Required environment variables (set in the Vercel project settings):
//   TEACHER_PIN                     - the PIN teachers type in on the login screen
//   FIREBASE_SERVICE_ACCOUNT_BASE64 - base64-encoded Firebase service account JSON
//
// See ../README.md for exactly how to obtain and set these.

const admin = require('firebase-admin');

let adminApp = null;
function getAdminApp() {
  if (adminApp) return adminApp;
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
  if (!raw) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_BASE64 is not set');
  }
  const serviceAccount = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
  adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  return adminApp;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  const pin = body && typeof body.pin === 'string' ? body.pin.trim() : '';

  const expectedPin = process.env.TEACHER_PIN;
  if (!expectedPin) {
    res.status(500).json({ error: 'server_misconfigured', message: 'TEACHER_PIN is not set on the server.' });
    return;
  }
  if (!pin || pin !== expectedPin) {
    res.status(401).json({ error: 'invalid_pin' });
    return;
  }

  try {
    getAdminApp();
    // One shared teacher identity is enough for this classroom tool; every
    // successful PIN entry mints a fresh token for the same uid.
    const token = await admin.auth().createCustomToken('teacher', { role: 'teacher' });
    res.status(200).json({ token: token });
  } catch (e) {
    console.error('teacher-login error', e);
    res.status(500).json({ error: 'server_error', message: String((e && e.message) || e) });
  }
};
