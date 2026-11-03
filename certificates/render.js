// Пакетная выгрузка грамот в PDF.
// Запуск:  node certificates/render.js certificates/data/<файл>.json
// Результат: certificates/out/<имя json>/ — общий PDF и по одному PDF на каждую грамоту.
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const dataPath = process.argv[2];
  if (!dataPath) { console.error("Укажите JSON с данными"); process.exit(1); }
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  const outDir = path.join(__dirname, "out", path.basename(dataPath, ".json"));
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.addInitScript(() => { window.__NO_SAMPLE__ = true; });
  await page.goto("file://" + path.join(__dirname, "template.html"));
  const pdfOpts = { format: "A4", printBackground: true, preferCSSPageSize: true };

  await page.evaluate(d => window.renderCertificates(d), data);
  await page.pdf({ path: path.join(outDir, "all.pdf"), ...pdfOpts });

  const items = data.items || [];
  for (let i = 0; i < items.length; i++) {
    await page.evaluate(d => window.renderCertificates(d), { common: data.common, items: [items[i]] });
    const label = (items[i].file || items[i].name || `gramota-${i + 1}`)
      .replace(/<[^>]+>/g, " ").replace(/[\\/:*?"<>|]+/g, "").replace(/\s+/g, "_").slice(0, 80);
    await page.pdf({ path: path.join(outDir, `${String(i + 1).padStart(2, "0")}_${label}.pdf`), ...pdfOpts });
    if (process.env.PNG) {
      await page.setViewportSize({ width: 900, height: 1200 });
      await page.locator(".sheet").first().screenshot({ path: path.join(outDir, `${String(i + 1).padStart(2, "0")}_${label}.png`) });
    }
  }
  await browser.close();
  console.log(`Готово: ${items.length} шт. -> ${outDir}`);
})();
