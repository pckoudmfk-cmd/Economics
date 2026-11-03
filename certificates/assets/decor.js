// Декоративные элементы к Дню сбережений.
// Все координаты в системе исходного скана 1240 x 1748, слой накладывается поверх подложки.
// Включаются полем decor в данных, например "decor": ["emblem", "slogan"].
//   emblem    круглая эмблема WORLD SAVINGS DAY на месте стопок монет
//   slogan    строка на английском над датой (текст в поле slogan)
//   rosette   наградная розетка справа от слова ГРАМОТА (текст в поле badge, строки через |)
//   guilloche гильош-рамка по краям листа в стиле банкноты
(function () {
  const TEAL = "#2f7377", GOLD = "#b58a3c", GOLD_L = "#d9b86a";
  const f = n => n.toFixed(1);

  // ---------- эмблема ----------
  function emblem(cx, cy, r, top, bottom) {
    // верхняя надпись идёт по дуге сверху, нижняя по дуге снизу, обе читаются слева направо
    const rt = r * .78, rb = r * .90;
    const arcTop = `M ${f(cx - rt)} ${f(cy)} A ${f(rt)} ${f(rt)} 0 0 1 ${f(cx + rt)} ${f(cy)}`;
    const arcBot = `M ${f(cx - rb)} ${f(cy)} A ${f(rb)} ${f(rb)} 0 0 0 ${f(cx + rb)} ${f(cy)}`;
    const c = r * .40, fs = r * .16;
    return `
    <g class="emblem">
      <defs><path id="emb-top" d="${arcTop}"/><path id="emb-bot" d="${arcBot}"/></defs>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" fill-opacity=".8" stroke="${TEAL}" stroke-width="5"/>
      <circle cx="${cx}" cy="${cy}" r="${f(r * .94)}" fill="none" stroke="${GOLD}" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="${f(r * .62)}" fill="none" stroke="${GOLD}" stroke-width="2"/>
      <circle cx="${f(cx - r * .78)}" cy="${cy}" r="${f(r * .035)}" fill="${GOLD}"/>
      <circle cx="${f(cx + r * .78)}" cy="${cy}" r="${f(r * .035)}" fill="${GOLD}"/>
      <g font-family="Open Sans" font-weight="700" font-size="${f(fs)}" letter-spacing="${f(r * .025)}" fill="${TEAL}">
        <text><textPath href="#emb-top" startOffset="50%" text-anchor="middle">${top}</textPath></text>
        <text><textPath href="#emb-bot" startOffset="50%" text-anchor="middle">${bottom}</textPath></text>
      </g>
      <g transform="translate(${cx} ${f(cy + r * .22)})">
        <ellipse cx="0" cy="${f(c * .30)}" rx="${f(c)}" ry="${f(c * .30)}" fill="${GOLD_L}" stroke="${GOLD}" stroke-width="3"/>
        <path d="M ${f(-c)} ${f(c * .30)} v ${f(-c * .30)} M ${f(c)} ${f(c * .30)} v ${f(-c * .30)}" stroke="${GOLD}" stroke-width="3"/>
        <ellipse cx="0" cy="0" rx="${f(c)}" ry="${f(c * .30)}" fill="#f3e3b4" stroke="${GOLD}" stroke-width="3"/>
        <path d="M0 0 C0 ${f(-c * .5)} 0 ${f(-c * .8)} 0 ${f(-c * 1.15)}" stroke="${TEAL}" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M0 ${f(-c * .55)} C ${f(-c * .5)} ${f(-c * .55)} ${f(-c * .85)} ${f(-c * .85)} ${f(-c * .9)} ${f(-c * 1.25)} C ${f(-c * .4)} ${f(-c * 1.25)} ${f(-c * .05)} ${f(-c * .95)} 0 ${f(-c * .55)} Z" fill="${TEAL}"/>
        <path d="M0 ${f(-c * .85)} C ${f(c * .45)} ${f(-c * .85)} ${f(c * .8)} ${f(-c * 1.15)} ${f(c * .85)} ${f(-c * 1.55)} C ${f(c * .35)} ${f(-c * 1.55)} ${f(c * .03)} ${f(-c * 1.25)} 0 ${f(-c * .85)} Z" fill="${TEAL}" fill-opacity=".75"/>
      </g>
    </g>`;
  }

  // ---------- розетка ----------
  function rosette(cx, cy, r, badge) {
    const n = 28, pts = [];
    for (let i = 0; i < n * 2; i++) {
      const a = Math.PI * i / n, rr = i % 2 ? r * .9 : r;
      pts.push(`${f(cx + rr * Math.cos(a))},${f(cy + rr * Math.sin(a))}`);
    }
    const lines = String(badge || "").split("|");
    const big = lines[0] || "", small = lines.slice(1).join(" ");
    const tail = (dx, color, rot) => {
      const w = r * .42, h = r * 1.35;
      return `<g transform="rotate(${rot} ${cx} ${cy})">
        <path d="M ${f(cx + dx - w / 2)} ${f(cy)} h ${f(w)} v ${f(h)} l ${f(-w / 2)} ${f(-w * .45)} l ${f(-w / 2)} ${f(w * .45)} Z" fill="${color}"/>
      </g>`;
    };
    return `
    <g class="rosette">
      ${tail(-r * .28, TEAL, 14)}
      ${tail(r * .28, GOLD, -14)}
      <polygon points="${pts.join(" ")}" fill="${GOLD_L}" stroke="${GOLD}" stroke-width="2.5"/>
      <circle cx="${cx}" cy="${cy}" r="${f(r * .74)}" fill="${TEAL}"/>
      <circle cx="${cx}" cy="${cy}" r="${f(r * .66)}" fill="none" stroke="${GOLD_L}" stroke-width="2"/>
      <text x="${cx}" y="${f(cy + (small ? r * .06 : r * .14))}" text-anchor="middle" font-family="Jost" font-weight="600"
            font-size="${f(big.length > 6 ? r * .30 : r * .44)}" fill="#fff">${big}</text>
      ${small ? `<text x="${cx}" y="${f(cy + r * .36)}" text-anchor="middle" font-family="Open Sans" font-weight="700"
            font-size="${f(r * .15)}" letter-spacing="${f(r * .02)}" fill="${GOLD_L}">${small}</text>` : ""}
    </g>`;
  }

  // ---------- гильош-рамка ----------
  function wavyBand(x0, y0, x1, y1, amp, period, count) {
    // полоса из сдвинутых по фазе синусоид вдоль отрезка
    const len = Math.hypot(x1 - x0, y1 - y0), ux = (x1 - x0) / len, uy = (y1 - y0) / len;
    const nx = -uy, ny = ux, step = 3;
    let out = "";
    for (let k = 0; k < count; k++) {
      const ph = Math.PI * 2 * k / count;
      let d = "";
      for (let s = 0; s <= len; s += step) {
        const o = amp * Math.sin(2 * Math.PI * s / period + ph) * Math.cos(Math.PI * s / (period * 3) + ph / 2);
        const x = x0 + ux * s + nx * o, y = y0 + uy * s + ny * o;
        d += (d ? " L" : "M") + f(x) + " " + f(y);
      }
      out += `<path d="${d}"/>`;
    }
    return out;
  }
  function corner(cx, cy, r) {
    // розетка-спирограф в углу рамки
    let d = "";
    const R = 7, q = 3, k = r / (R + q + 4);
    for (let t = 0; t <= Math.PI * 2 * q + .01; t += .02) {
      const x = (R - q) * Math.cos(t) + 4 * Math.cos((R - q) / q * t);
      const y = (R - q) * Math.sin(t) - 4 * Math.sin((R - q) / q * t);
      d += (d ? " L" : "M") + f(cx + x * k) + " " + f(cy + y * k);
    }
    return `<circle cx="${cx}" cy="${cy}" r="${f(r * 1.05)}" fill="#fff" fill-opacity=".85"/><path d="${d}"/><circle cx="${cx}" cy="${cy}" r="${f(r * .18)}" fill="${GOLD}" stroke="none"/>`;
  }
  function guilloche() {
    const m = 24, W = 1240, yEnd = 1470, amp = 7, per = 42;
    return `
    <g class="guilloche">
      <defs>
        <linearGradient id="g-fade" x1="0" y1="0" x2="0" y2="1748" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff"/><stop offset="${f((yEnd - 220) / 1748)}" stop-color="#fff"/>
          <stop offset="${f(yEnd / 1748)}" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="g-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1240" height="1748">
          <rect width="1240" height="1748" fill="url(#g-fade)"/>
        </mask>
      </defs>
      <g mask="url(#g-mask)" fill="none" stroke="${TEAL}" stroke-width="1.1" stroke-opacity=".75">
        ${wavyBand(m, m, W - m, m, amp, per, 6)}
        ${wavyBand(m, m, m, yEnd, amp, per, 6)}
        ${wavyBand(W - m, m, W - m, yEnd, amp, per, 6)}
        <g stroke="${GOLD}" stroke-opacity=".9" stroke-width="1.4">
          <path d="M ${m + 14} ${m + 14} H ${W - m - 14} M ${m + 14} ${m + 14} V ${yEnd} M ${W - m - 14} ${m + 14} V ${yEnd}"/>
          <path d="M ${m - 12} ${m - 12} H ${W - m + 12} M ${m - 12} ${m - 12} V ${yEnd} M ${W - m + 12} ${m - 12} V ${yEnd}"/>
        </g>
      </g>
      <g fill="none" stroke="${TEAL}" stroke-width="1.2">
        ${corner(m, m, 20)}
        ${corner(W - m, m, 20)}
      </g>
    </g>`;
  }

  function slogan(text) {
    return `<text x="620" y="1522" text-anchor="middle" font-family="Marck Script" font-size="40" fill="${TEAL}">${text}</text>`;
  }

  window.buildDecor = function (v) {
    const set = new Set(v.decor || []);
    if (!set.size) return "";
    let s = "";
    if (set.has("guilloche")) s += guilloche();
    if (set.has("emblem")) s += emblem(620, 1247, 94, v.emblemTop || "WORLD SAVINGS DAY", v.emblemBottom || "31 OCTOBER 2026");
    if (set.has("rosette")) s += rosette(1032, 390, 92, v.badge || "1st|PLACE");
    if (set.has("slogan")) s += slogan(v.slogan || "Small savings, big future");
    return `<svg class="decor" viewBox="0 0 1240 1748" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
  };
})();
