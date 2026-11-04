const CATS = [
  ["air", "Sisäilma ja lämpötila", "Sisäilma"],
  ["sound", "Äänieristys", "Äänieristys"],
  ["maint", "Huolto ja isännöinti", "Huolto"],
  ["safe", "Turvallisuus", "Turvallisuus"],
  ["comm", "Yhteishenki", "Yhteishenki"]
];
const ROLES = { owner: "Omistaja", renter: "Vuokralainen", former: "Entinen asukas" };
const r = (air, sound, maint, safe, comm) => ({ air, sound, maint, safe, comm });

// look: how the facade illustration is drawn (era-typical Helsinki apartment buildings)
const BUILDINGS = [
  {
    id: "kaarna", name: "Kaarnakatu 7", company: "As Oy Kaarnakatu 7", area: "Kallio", city: "Helsinki", stairs: "A–B",
    year: 1928, floors: 6, units: 34, heat: "Kaukolämpö", lift: "2004", reno: "Putket 2019",
    look: { wall: "#d6b07e", roof: "steep", roofColor: "#3d4247", win: "tall", width: 190, plinth: "#6f6a63" },
    ai: {
      lead: "Arvostettu sijainti ja hyvin hoidettu talo, mutta vanha puurakenteinen välipohja päästää äänet läpi.",
      pros: ["Putkiremontti tehty 2019, kylpyhuoneet uusittu", "Isännöitsijä vastaa nopeasti"],
      cons: ["Askeleet ja puhe kuuluvat yläkerrasta", "Pihalla ajoittain yöllistä meteliä viikonloppuisin"]
    },
    reviews: [
      { role: "owner", years: "5–10 vuotta", date: "2026-09-14", up: 12, s: r(4,2,5,4,4), text: "Putkiremontti meni aikataulussa ja tiedottaminen oli hyvää. Äänieristys on tämän ikäisessä talossa mitä on: yläkerran askeleet kuuluvat selvästi." },
      { role: "renter", years: "1–2 vuotta", date: "2026-08-02", up: 7, s: r(3,2,4,3,3), text: "Kesällä yläkerrokset lämpenevät paljon. Porttikongissa notkuu välillä porukkaa perjantai-iltaisin, mutta mitään vakavaa ei ole sattunut." },
      { role: "former", years: "2–5 vuotta", date: "2026-04-21", up: 4, s: r(4,2,4,4,5), text: "Hieno yhteisö, pihatalkoot ja saunavuorot toimivat. Muutin pois perheenlisäyksen takia, en talon." },
      { role: "renter", years: "alle vuoden", date: "2026-10-11", up: 2, s: r(4,1,4,4,3), text: "Naapurin puhelut kuuluvat seinän läpi. Muuten siisti ja hyvin hoidettu rappu." }
    ]
  },
  {
    id: "pellava", name: "Pellavapolku 3", company: "As Oy Pellavapolku 3", area: "Etu-Töölö", city: "Helsinki", stairs: "A",
    year: 1936, floors: 7, units: 41, heat: "Kaukolämpö", lift: "1936", reno: "Julkisivu 2015",
    look: { wall: "#ece7dc", roof: "flat", roofColor: "#8b8f91", win: "band", width: 196, plinth: "#9a978f", corner: true },
    ai: {
      lead: "Rauhallinen funkistalo, jonka äänieristystä ja siisteyttä asukkaat kehuvat.",
      pros: ["Paksut betonivälipohjat, hiljainen", "Rappukäytävä ja pihat erittäin siistejä"],
      cons: ["Hallituksen päätöksenteko koetaan hitaaksi", "Alkuperäinen hissi on pieni ja usein huollossa"]
    },
    reviews: [
      { role: "owner", years: "yli 10 vuotta", date: "2026-07-30", up: 9, s: r(4,5,3,5,4), text: "Erittäin hiljainen talo. Hissi on ihana mutta ahdas, ja huoltokatkoja on useasti vuodessa." },
      { role: "owner", years: "2–5 vuotta", date: "2026-06-12", up: 3, s: r(4,4,3,5,3), text: "Talo on hyvässä kunnossa, mutta pienetkin muutostyöt vaativat monta yhtiökokousta." },
      { role: "renter", years: "1–2 vuotta", date: "2026-10-03", up: 5, s: r(5,5,4,5,3), text: "Paras kerrostalo, jossa olen asunut. Naapureita näkee vähän, mutta kaikki tervehtivät." }
    ]
  },
  {
    id: "koivu", name: "Koivurinne 9", company: "As Oy Koivurinne 9", area: "Herttoniemi", city: "Helsinki", stairs: "A–C",
    year: 1958, floors: 4, units: 30, heat: "Kaukolämpö", lift: "Ei hissiä", reno: "Putket 2028 (suunn.)",
    look: { wall: "#a65f46", roof: "low", roofColor: "#45484a", win: "regular", width: 200, plinth: "#6b5a52", trees: true },
    ai: {
      lead: "Vihreä ja edullinen alue, mutta useampi asukas kertoo sisäilmaoireista kellarissa ja pohjakerroksen asunnoissa.",
      pros: ["Iso metsäinen piha", "Hyvä yhteishenki, aktiivinen pihatoimikunta"],
      cons: ["Kellari ja pohjakerros tunkkaisia, kosteushavaintoja", "Putkiremontti edessä, ei hissiä"]
    },
    reviews: [
      { role: "renter", years: "1–2 vuotta", date: "2026-09-28", up: 15, s: r(1,3,2,4,4), text: "Pohjakerroksen asunnossa haisee kellarille, ja lapsella oli jatkuvaa yskää. Vuokranantaja ilmoitti isännöitsijälle, mutta mitään ei tapahtunut puoleen vuoteen." },
      { role: "owner", years: "yli 10 vuotta", date: "2026-05-17", up: 6, s: r(3,3,3,4,5), text: "Talossa on hyvä henki ja naapurit auttavat toisiaan. Kosteusmittaukset on teetetty, ja korjaukset tehdään putkiremontin yhteydessä." },
      { role: "former", years: "2–5 vuotta", date: "2026-02-09", up: 8, s: r(2,3,2,4,4), text: "Muutimme pois osittain sisäilman takia. Ylemmissä kerroksissa ongelmaa ei kuulemma ole." }
    ]
  },
  {
    id: "tuulensuu", name: "Tuulensuu 2", company: "As Oy Tuulensuu 2", area: "Kalasatama", city: "Helsinki", stairs: "A–B",
    year: 2019, floors: 12, units: 96, heat: "Kaukolämpö + LTO", lift: "2 hissiä", reno: "Takuukorjaukset 2022",
    look: { wall: "#5b6570", roof: "flat", roofColor: "#3a4148", win: "grid", width: 118, plinth: "#3a4148", glass: true },
    ai: {
      lead: "Moderni ja turvallinen uudiskohde. Arvioissa toistuvat kesäkuumuus ja ilmanvaihdon ääni.",
      pros: ["Kulunvalvonta ja siistit yhteistilat", "Hyvä äänieristys naapureiden välillä"],
      cons: ["Lounaispuolen asunnot kuumenevat kesällä yli 27 asteeseen", "Iso talo, naapurit jäävät vieraiksi"]
    },
    reviews: [
      { role: "renter", years: "1–2 vuotta", date: "2026-08-19", up: 11, s: r(2,4,4,5,2), text: "Heinäkuussa asunnossa oli 29 astetta, eikä ikkunoita voi pitää kunnolla auki. Muuten kaikki toimii hyvin." },
      { role: "owner", years: "2–5 vuotta", date: "2026-06-30", up: 4, s: r(3,4,4,5,3), text: "Laadukas talo, huoltoyhtiö reagoi sovelluksen kautta nopeasti. Ilmanvaihdon humina kuuluu makuuhuoneeseen." },
      { role: "renter", years: "alle vuoden", date: "2026-10-20", up: 1, s: r(3,5,4,5,2), text: "Hiljainen ja turvallinen. Saunavuoroja on vaikea saada." }
    ]
  },
  {
    id: "vaski", name: "Vaskiraitti 5", company: "As Oy Vaskiraitti 5", area: "Vallila", city: "Helsinki", stairs: "A",
    year: 1912, floors: 2, units: 12, heat: "Kaukolämpö", lift: "Ei hissiä", reno: "Katto 2021",
    look: { wall: "#d8ae4a", roof: "gable", roofColor: "#7b3a2c", win: "small", width: 200, plinth: "#7a6e60", boards: true },
    ai: {
      lead: "Viehättävä vanha puutalo ja tiivis yhteisö, mutta talvella vetää ja huoltopyynnöt etenevät hitaasti.",
      pros: ["Poikkeuksellinen yhteishenki, yhteinen kasvimaa", "Rauhallinen sisäpiha"],
      cons: ["Ikkunoista vetää talvella", "Huoltoyhtiön vasteaika pitkä"]
    },
    reviews: [
      { role: "owner", years: "yli 10 vuotta", date: "2026-03-11", up: 5, s: r(3,3,2,5,5), text: "Täällä tunnetaan naapurit nimeltä. Huoltoyhtiö vaihtui viime vuonna, ja palvelu on huonontunut." },
      { role: "renter", years: "2–5 vuotta", date: "2026-01-25", up: 3, s: r(2,3,2,5,5), text: "Tammikuussa olohuoneessa oli 18 astetta. Muuten unelmapaikka asua." }
    ]
  },
  {
    id: "meri", name: "Merikaarre 12", company: "As Oy Merikaarre 12", area: "Lauttasaari", city: "Helsinki", stairs: "A",
    year: 1962, floors: 5, units: 28, heat: "Kaukolämpö", lift: "2017", reno: "Putket 2017",
    look: { wall: "#dcd6c8", roof: "low", roofColor: "#5a5f63", win: "regular", width: 206, plinth: "#8d8a82", balconies: true },
    ai: {
      lead: "Hyvin remontoitu ja tasapainoinen talo, josta ei nouse esiin merkittäviä ongelmia.",
      pros: ["Isot remontit tehty", "Hyvä ilmanvaihto"],
      cons: ["Autopaikkoja on vähän", "Vain yksi arvio, kuva voi vielä tarkentua"]
    },
    reviews: [
      { role: "owner", years: "5–10 vuotta", date: "2026-09-02", up: 2, s: r(4,4,4,5,4), text: "Remontit on tehty ajallaan eikä yllätyksiä ole tullut. Hyvä talo." }
    ]
  }
];

// key figures read from uploaded financial statements; years run oldest to newest, money per living m²
const FIN = {
  kaarna: { years: [2023, 2024, 2025], sources: 2, hoito: [4.35, 4.45, 4.60], rahoitus: [3.10, 3.10, 3.10], laina: [700, 660, 620], saatavat: [0.6, 0.7, 0.8], tulos: 4200,
    pts: [[2028, "Julkisivun korjaus", 210], [2031, "Ikkunoiden kunnostus", 95]],
    flags: [["ok", "Putkiremontin laina lyhenee aikataulussa, ja rahoitusvastike on pysynyt samana kolme vuotta."]] },
  pellava: { years: [2023, 2024, 2025], sources: 3, hoito: [4.05, 4.10, 4.20], rahoitus: [0.40, 0.40, 0.40], laina: [120, 105, 90], saatavat: [0.2, 0.3, 0.3], tulos: 11800,
    pts: [[2027, "Hissin modernisointi", 60], [2030, "Vesikaton uusiminen", 140]],
    flags: [["ok", "Lähes velaton taloyhtiö. Tulevat remontit voidaan todennäköisesti rahoittaa ilman suurta lainaa."]] },
  koivu: { years: [2023, 2024, 2025], sources: 1, hoito: [4.40, 4.65, 4.90], rahoitus: [0, 0, 0], laina: [0, 0, 0], saatavat: [1.1, 1.8, 2.6], tulos: -6300,
    pts: [[2027, "Salaojat ja kellarin kosteuskorjaus", 180], [2028, "Putkiremontti (linjasaneeraus)", 1100]],
    flags: [["warn", "Maksamattomat vastikkeet ovat kasvaneet kolmena vuonna peräkkäin."], ["warn", "Putkiremontti 2028 nostaa yhtiölainan arviolta noin 1 100 euroon neliöltä."]] },
  tuulensuu: { years: [2023, 2024, 2025], sources: 2, hoito: [3.90, 4.00, 4.10], rahoitus: [6.80, 6.80, 6.80], laina: [1450, 1450, 1450], saatavat: [0.7, 0.9, 1.1], tulos: 2100,
    pts: [[2034, "Ensimmäinen kattohuolto", 25]],
    flags: [["warn", "Yhtiölainan lyhennysvapaa päättyy 2029. Sen jälkeen rahoitusvastike nousee selvästi."]] },
  meri: { years: [2023, 2024, 2025], sources: 1, hoito: [4.10, 4.20, 4.30], rahoitus: [2.40, 2.40, 2.40], laina: [470, 440, 410], saatavat: [0.4, 0.4, 0.4], tulos: 3900,
    pts: [[2029, "Parvekkeiden korjaus", 85]],
    flags: [["ok", "Remonttien lainat lyhenevät tasaisesti, eikä maksuhäiriöitä ole kertynyt."]] }
};
// what the demo "reads" from an upload for a building that has no statement yet
const SAMPLE_FIN = { vaski: { years: [2025], sources: 1, hoito: [5.40], rahoitus: [0], laina: [0], saatavat: [0.2], tulos: 1800,
  pts: [[2027, "Ikkunoiden kunnostus", 140], [2029, "Ulkoverhouksen maalaus", 60]], flags: [["ok", "Velaton taloyhtiö."]] } };

/* ---------- facade illustrations ---------- */
function facade(b) {
  const L = b.look, W = 240, G = 170;
  const fh = b.floors >= 10 ? 11 : b.floors >= 6 ? 17 : b.floors >= 4 ? 22 : 30;
  const plinth = 9, bw = L.width, x0 = (W - bw) / 2, x1 = x0 + bw;
  const top = G - plinth - b.floors * fh;
  const lit = i => ((i * 7 + b.year) % 11) === 0;
  const glassC = "#33414b", litC = "#f0d48c", frame = "#f4f1ea";
  let s = `<svg viewBox="0 0 ${W} 180" role="img" aria-label="Piirros: ${b.name}, rakennettu ${b.year}" xmlns="http://www.w3.org/2000/svg">`;
  s += `<rect x="0" y="${G}" width="${W}" height="10" fill="#c3c8c4"/>`;
  if (L.trees) s += `<circle cx="22" cy="${G - 34}" r="24" fill="#5b7f52"/><circle cx="38" cy="${G - 18}" r="18" fill="#4d7146"/><rect x="26" y="${G - 14}" width="4" height="14" fill="#5a4a3a"/>`;
  // roof
  if (L.roof === "gable") s += `<polygon points="${x0 - 8},${top} ${W / 2},${top - 36} ${x1 + 8},${top}" fill="${L.roofColor}"/>`;
  if (L.roof === "steep") s += `<polygon points="${x0 - 4},${top} ${x0 + 20},${top - 26} ${x1 - 20},${top - 26} ${x1 + 4},${top}" fill="${L.roofColor}"/><rect x="${x0 + 40}" y="${top - 38}" width="9" height="16" fill="${L.roofColor}"/><rect x="${x1 - 52}" y="${top - 36}" width="9" height="14" fill="${L.roofColor}"/>`
    + [0.3, 0.5, 0.7].map(p => `<rect x="${x0 + bw * p - 6}" y="${top - 18}" width="12" height="12" fill="${frame}"/><rect x="${x0 + bw * p - 4}" y="${top - 16}" width="8" height="10" fill="${glassC}"/>`).join("");
  if (L.roof === "low") s += `<polygon points="${x0 - 6},${top} ${W / 2},${top - 13} ${x1 + 6},${top}" fill="${L.roofColor}"/>`;
  if (L.roof === "flat") s += `<rect x="${x0 - 2}" y="${top - 5}" width="${bw + 4}" height="5" fill="${L.roofColor}"/>`;
  // body + plinth
  s += `<rect x="${x0}" y="${top}" width="${bw}" height="${G - top}" fill="${L.wall}"/>`;
  if (L.boards) for (let y = top + 4; y < G - plinth; y += 4) s += `<line x1="${x0}" x2="${x1}" y1="${y}" y2="${y}" stroke="rgba(0,0,0,.09)" stroke-width="1"/>`;
  s += `<rect x="${x0}" y="${G - plinth}" width="${bw}" height="${plinth}" fill="${L.plinth}"/>`;
  // windows
  let i = 0;
  for (let f = 0; f < b.floors; f++) {
    const fy = top + f * fh;
    if (L.win === "band") {
      const by = fy + fh * 0.28, bh = fh * 0.45;
      s += `<rect x="${x0 + 10}" y="${by}" width="${bw - 20 - (L.corner ? 26 : 0)}" height="${bh}" fill="${frame}"/>`;
      for (let k = 0; k < 9; k++) { const wx = x0 + 12 + k * ((bw - 24 - (L.corner ? 26 : 0)) / 9); s += `<rect x="${wx}" y="${by + 1.5}" width="${(bw - 24 - (L.corner ? 26 : 0)) / 9 - 2}" height="${bh - 3}" fill="${lit(i++) ? litC : glassC}"/>`; }
      if (L.corner) s += `<rect x="${x1 - 30}" y="${fy + fh * 0.62}" width="34" height="${fh * 0.38}" rx="3" fill="#ffffff" stroke="#c8c3b8"/>`;
      continue;
    }
    const cols = L.win === "grid" ? 4 : L.win === "small" ? 6 : L.win === "tall" ? 7 : 8;
    const ww = L.win === "grid" ? 18 : L.win === "small" ? 13 : L.win === "tall" ? 12 : 13;
    const wh = Math.min(fh * (L.win === "tall" ? 0.62 : 0.5), L.win === "small" ? 17 : 99);
    const gap = (bw - cols * ww) / (cols + 1);
    for (let c = 0; c < cols; c++) {
      const wx = x0 + gap + c * (ww + gap), wy = fy + (fh - wh) / 2 + (L.win === "tall" ? 1 : 0);
      if (L.glass && c === cols - 1) { s += `<rect x="${wx - 3}" y="${wy + wh * 0.45}" width="${ww + 6}" height="${wh * 0.75}" fill="rgba(190,220,235,.55)" stroke="rgba(220,240,250,.8)" stroke-width=".8"/>`; }
      s += `<rect x="${wx - 1.2}" y="${wy - 1.2}" width="${ww + 2.4}" height="${wh + 2.4}" fill="${frame}"/>`;
      s += L.win === "tall"
        ? `<path d="M${wx} ${wy + wh} V${wy + 4} Q${wx + ww / 2} ${wy - 3} ${wx + ww} ${wy + 4} V${wy + wh} Z" fill="${lit(i++) ? litC : glassC}"/>`
        : `<rect x="${wx}" y="${wy}" width="${ww}" height="${wh}" fill="${lit(i++) ? litC : glassC}"/>`;
      s += `<line x1="${wx + ww / 2}" x2="${wx + ww / 2}" y1="${wy}" y2="${wy + wh}" stroke="${frame}" stroke-width="1"/>`;
      if (L.balconies && f > 0 && (c === 2 || c === 5)) s += `<rect x="${wx - 6}" y="${wy + wh * 0.55}" width="${ww + 12}" height="${fh * 0.38}" fill="#b9b2a2"/>`;
    }
  }
  // door
  const dw = b.floors >= 10 ? 16 : 14;
  s += `<rect x="${W / 2 - dw / 2}" y="${G - plinth - 14}" width="${dw}" height="${14 + plinth}" fill="#2c2f31"/><rect x="${W / 2 - dw / 2 - 3}" y="${G - plinth - 17}" width="${dw + 6}" height="3" fill="#2c2f31"/>`;
  return s + `</svg>`;
}

/* ---------- data helpers ---------- */
let USER = {};
try { USER = JSON.parse(localStorage.getItem("naapuri-demo-reviews") || "{}"); } catch (e) { USER = {}; }
const saveUser = () => { try { localStorage.setItem("naapuri-demo-reviews", JSON.stringify(USER)); } catch (e) {} };
let USERFIN = {};
try { USERFIN = JSON.parse(localStorage.getItem("naapuri-demo-fin") || "{}"); } catch (e) { USERFIN = {}; }
const saveFin = () => { try { localStorage.setItem("naapuri-demo-fin", JSON.stringify(USERFIN)); } catch (e) {} };
const finOf = b => USERFIN[b.id] || FIN[b.id] || null;
const reviewsOf = b => [...(USER[b.id] || []), ...b.reviews];
const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
const scoreOf = rv => avg(CATS.map(([k]) => rv.s[k]));
const bScore = b => avg(reviewsOf(b).map(scoreOf));
const catAvg = (b, k) => avg(reviewsOf(b).map(rv => rv.s[k]));
const fmt = n => n.toFixed(1).replace(".", ",");
const toneVar = v => v >= 4 ? "--s-good" : v >= 3.2 ? "--s-mid" : v >= 2.4 ? "--s-low" : "--s-bad";
const word = v => v >= 4.2 ? "Erinomainen" : v >= 3.7 ? "Hyvä" : v >= 3.2 ? "Kohtalainen" : v >= 2.6 ? "Heikko" : "Huono";
const badge = (v, size = "") => `<span class="score ${size}" style="background:var(${toneVar(v)})" aria-label="Arvosana ${fmt(v)} / 5">${fmt(v)}</span>`;
const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const MONTHS = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
const month = d => { const [y, m] = d.split("-"); return `${MONTHS[+m - 1]} ${y}`; };
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const matches = q => { q = q.trim().toLowerCase(); return q ? BUILDINGS.filter(b => (b.name + " " + b.area + " " + b.city + " " + b.company).toLowerCase().includes(q)) : BUILDINGS; };

const app = document.getElementById("app");
const state = { id: null, query: "", sort: "score", tab: "all", writing: false, draft: {}, toast: "", helpful: {}, bought: false, up: null, finToast: "" };

/* ---------- finance ---------- */
const eur2 = n => n.toFixed(2).replace(".", ",") + " €";
const eur0 = n => Math.round(n).toLocaleString("fi-FI") + " €";
const last = a => a[a.length - 1];
const METRICS = [
  ["hoito", "Hoitovastike", "€/m²/kk", eur2, false],
  ["rahoitus", "Rahoitusvastike", "€/m²/kk", eur2, false],
  ["laina", "Yhtiölaina", "€/m²", eur0, false],
  ["saatavat", "Maksamattomat vastikkeet", "% vastikkeista", n => n.toFixed(1).replace(".", ",") + " %", true]
];
function compare(key, v) {
  const vals = BUILDINGS.map(finOf).filter(Boolean).map(f => last(f[key]));
  const m = avg(vals);
  if (m === 0) return v > 0 ? "Muita taloja korkeampi" : "Muiden talojen tasolla";
  return v > m * 1.2 ? "Muita taloja korkeampi" : v < m * 0.8 ? "Muita taloja matalampi" : "Muiden talojen tasolla";
}
function spark(arr, bad) {
  if (arr.length < 2 || Math.min(...arr) === Math.max(...arr)) return "";
  const w = 84, h = 26, mn = Math.min(...arr), mx = Math.max(...arr), span = mx - mn || 1;
  const pts = arr.map((v, i) => [2 + i * (w - 4) / (arr.length - 1), h - 3 - (v - mn) / span * (h - 6)]);
  const up = last(arr) > arr[0] * 1.05, down = last(arr) < arr[0] * 0.95;
  const color = up ? (bad ? "var(--s-bad)" : "var(--muted)") : down ? (bad ? "var(--s-good)" : "var(--muted)") : "var(--muted)";
  const [lx, ly] = last(pts);
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" aria-hidden="true"><polyline points="${pts.map(p => p.join(",")).join(" ")}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/><circle cx="${lx}" cy="${ly}" r="3" fill="${color}"/></svg>`;
}

function financeHtml(b) {
  const f = finOf(b), up = state.up;
  let body;
  if (up) body = uploadHtml(b, up);
  else if (!f) body = `
    <div class="fin-empty">
      <p class="lead">Tämän talon tilinpäätöstä ei ole vielä ladattu.</p>
      <p class="muted">Asukas tai osakas voi ladata tilinpäätöksen PDF:nä. Poimimme siitä vastikkeet, lainat, maksamattomat vastikkeet ja tulevat remontit. Nimet ja allekirjoitukset jätetään pois, eikä alkuperäistä tiedostoa julkaista.</p>
      <button class="btn" id="fin-up">Lataa tilinpäätös</button>
      <p class="small muted" style="margin-top:10px">Lataajana saat yhden syväraportin veloituksetta.</p>
    </div>`;
  else body = `
    <p class="fin-src">Tilikausi ${last(f.years)}. Lähde: ${plural(f.sources, "asukkaan lataama tilinpäätös", "asukkaiden lataamaa tilinpäätöstä, luvut täsmäävät")}.</p>
    <div class="kpis">
      ${METRICS.map(([k, label, unit, fm, bad]) => { const v = last(f[k]); return `<div class="kpi">
        <div class="kl">${label} <span class="muted">${unit}</span></div>
        <div class="kv">${fm(v)}${spark(f[k], bad)}</div>
        <div class="kc">${compare(k, v)}${f.years.length > 1 ? `, ${f.years[0]}: ${fm(f[k][0])}` : ""}</div>
      </div>`; }).join("")}
    </div>
    ${f.flags.map(([t, txt]) => `<p class="flag ${t}">${txt}</p>`).join("")}
    <h3 style="margin-top:26px">Tulevat remontit</h3>
    <ul class="pts">${f.pts.map(([y, what, cost]) => `<li><span class="py">${y}</span><span>${what}</span><span class="pc">noin ${eur0(cost)}/m²</span></li>`).join("")}</ul>
    <p class="small muted" style="margin-top:8px">Kustannusarviot ovat kunnossapitotarveselvityksestä. Tilikauden tulos ${eur0(f.tulos)}.</p>
    <button class="textlink" id="fin-up" style="margin-top:14px">Lataa uudempi tilinpäätös</button>`;
  return `<section id="talous">
    <h2>Talous</h2>
    ${state.finToast ? `<div class="toast" role="status">${state.finToast}</div>` : ""}
    ${body}
  </section>`;
}

const STAGES = ["Tunnistetaan tilikausi", "Luetaan tuloslaskelma ja tase", "Haetaan kunnossapitotarveselvitys", "Poistetaan nimet ja allekirjoitukset"];
function uploadHtml(b, up) {
  if (up.step === 1) return `
    <form class="upload" id="up-form" novalidate>
      <h3>Lataa tilinpäätös: ${b.name}</h3>
      <label class="drop" for="up-file">
        <svg viewBox="0 0 40 48" aria-hidden="true"><path d="M4 2h22l10 10v34H4z" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/><path d="M26 2v10h10" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M11 24h18M11 30h18M11 36h11" stroke="var(--muted)" stroke-width="2"/></svg>
        <span><strong>${up.file ? esc(up.file) : "Valitse PDF-tiedosto"}</strong><br><span class="muted small">${up.file ? "Vaihda tiedosto klikkaamalla" : "tai vedä tiedosto tähän"}</span></span>
        <input id="up-file" type="file" accept="application/pdf,.pdf" class="sr">
      </label>
      <label class="check"><input type="checkbox" id="up-ok"${up.ok ? " checked" : ""}> Olen taloyhtiön osakas tai asukas, ja minulla on oikeus jakaa nämä tiedot.</label>
      <p class="small muted">Demossa tiedostoa ei lähetetä minnekään, ja luetut luvut ovat esimerkkejä.</p>
      <p class="err" id="up-err" hidden></p>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" type="submit">Lue tilinpäätös</button><button class="btn line" type="button" data-up-cancel>Peruuta</button></div>
    </form>`;
  if (up.step === 2) return `
    <div class="upload" aria-live="polite">
      <h3>Luetaan tiedostoa ${esc(up.file)}</h3>
      <ol class="stages">${STAGES.map((s, i) => `<li class="${i < up.stage ? "done" : i === up.stage ? "now" : ""}">${s}</li>`).join("")}</ol>
    </div>`;
  const v = up.vals;
  return `
    <form class="upload" id="up-confirm" novalidate>
      <h3>Tarkista luetut luvut</h3>
      <p class="muted small">Korjaa luku, jos se ei vastaa tilinpäätöstä. Julkaisemme vain nämä luvut, emme itse tiedostoa.</p>
      <div class="two">
        <label class="f" for="u-year">Tilikausi<input id="u-year" inputmode="numeric" value="${v.year}"></label>
        <label class="f" for="u-hoito">Hoitovastike, €/m²/kk<input id="u-hoito" inputmode="decimal" value="${String(v.hoito).replace(".", ",")}"></label>
        <label class="f" for="u-rahoitus">Rahoitusvastike, €/m²/kk<input id="u-rahoitus" inputmode="decimal" value="${String(v.rahoitus).replace(".", ",")}"></label>
        <label class="f" for="u-laina">Yhtiölaina, €/m²<input id="u-laina" inputmode="decimal" value="${v.laina}"></label>
        <label class="f" for="u-saatavat">Maksamattomat vastikkeet, %<input id="u-saatavat" inputmode="decimal" value="${String(v.saatavat).replace(".", ",")}"></label>
      </div>
      <p class="small muted">Lisäksi luettiin ${plural(v.pts.length, "tuleva remontti", "tulevaa remonttia")} kunnossapitotarveselvityksestä.</p>
      <p class="err" id="up-err" hidden></p>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" type="submit">Vahvista ja julkaise</button><button class="btn line" type="button" data-up-cancel>Peruuta</button></div>
    </form>`;
}

function bindFinance(b) {
  const start = document.getElementById("fin-up");
  if (start) start.addEventListener("click", () => { state.up = { step: 1, file: "", ok: false }; state.finToast = ""; renderBuilding(b); document.getElementById("talous").scrollIntoView({ block: "start" }); });
  app.querySelectorAll("[data-up-cancel]").forEach(el => el.addEventListener("click", () => { state.up = null; renderBuilding(b); }));
  const up = state.up;
  if (!up) return;
  if (up.step === 1) {
    const file = document.getElementById("up-file"), drop = app.querySelector(".drop");
    file.addEventListener("change", () => { up.file = file.files[0] ? file.files[0].name : ""; up.ok = document.getElementById("up-ok").checked; renderBuilding(b); });
    drop.addEventListener("dragover", e => { e.preventDefault(); drop.classList.add("over"); });
    drop.addEventListener("dragleave", () => drop.classList.remove("over"));
    drop.addEventListener("drop", e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) { up.file = f.name; up.ok = document.getElementById("up-ok").checked; renderBuilding(b); } });
    document.getElementById("up-ok").addEventListener("change", e => { up.ok = e.target.checked; });
    document.getElementById("up-form").addEventListener("submit", e => {
      e.preventDefault();
      const err = document.getElementById("up-err");
      if (!up.file) { err.textContent = "Valitse ensin tilinpäätös PDF-tiedostona."; err.hidden = false; return; }
      if (!/\.pdf$/i.test(up.file)) { err.textContent = "Tiedoston pitää olla PDF. Valitse toinen tiedosto."; err.hidden = false; return; }
      if (!up.ok) { err.textContent = "Vahvista, että olet taloyhtiön osakas tai asukas."; err.hidden = false; return; }
      up.step = 2; up.stage = 0; renderBuilding(b);
      const tick = () => {
        if (state.up !== up) return;
        up.stage++;
        if (up.stage >= STAGES.length) {
          const src = FIN[b.id] || SAMPLE_FIN[b.id] || SAMPLE_FIN.vaski;
          up.vals = { year: last(src.years), hoito: last(src.hoito), rahoitus: last(src.rahoitus), laina: last(src.laina), saatavat: last(src.saatavat), pts: src.pts };
          up.step = 3;
        } else setTimeout(tick, 650);
        renderBuilding(b);
      };
      setTimeout(tick, 650);
    });
  }
  if (up.step === 3) {
    document.getElementById("up-confirm").addEventListener("submit", e => {
      e.preventDefault();
      const num = id => parseFloat(document.getElementById(id).value.replace(",", ".").replace(/\s/g, ""));
      const vals = { year: num("u-year"), hoito: num("u-hoito"), rahoitus: num("u-rahoitus"), laina: num("u-laina"), saatavat: num("u-saatavat") };
      const bad = Object.entries(vals).find(([, n]) => !isFinite(n) || n < 0);
      const err = document.getElementById("up-err");
      if (bad) { err.textContent = "Tarkista luvut: kenttiin käyvät vain numerot, eivätkä ne voi olla negatiivisia."; err.hidden = false; return; }
      const base = finOf(b) || SAMPLE_FIN[b.id] || SAMPLE_FIN.vaski;
      const same = finOf(b) && last(base.years) === vals.year;
      const push = (k) => same ? [...base[k].slice(0, -1), vals[k]] : [...(finOf(b) ? base[k] : []), vals[k]].slice(-4);
      USERFIN[b.id] = {
        years: same ? base.years : [...(finOf(b) ? base.years : []), vals.year].slice(-4),
        sources: finOf(b) ? base.sources + 1 : 1,
        hoito: push("hoito"), rahoitus: push("rahoitus"), laina: push("laina"), saatavat: push("saatavat"),
        tulos: base.tulos, pts: up.vals.pts, flags: base.flags
      };
      saveFin();
      state.up = null;
      state.finToast = "Tilinpäätöksen luvut julkaistu. Saat yhden syväraportin veloituksetta. Demossa tiedot näkyvät vain sinun selaimessasi.";
      renderBuilding(b);
      document.getElementById("talous").scrollIntoView({ block: "start" });
    });
  }
}
let boardTimer = null;

function boardHtml(b) {
  const rows = CATS.map(([k, , short]) => `<div class="row"><span>${short}</span><span class="dots"></span><span>${fmt(catAvg(b, k))}</span></div>`).join("");
  return `<div class="board" aria-label="${b.name}: asukkaiden arvosanat"><div class="swap">
    <div class="bt"><span>${b.name}</span><span>${b.stairs}</span></div>${rows}
    <div class="foot">${plural(reviewsOf(b).length, "asukasarvio", "asukasarviota")}</div>
  </div></div>`;
}

function factsBoard(b) {
  const rows = [["Rakennettu", b.year], ["Kerroksia", b.floors], ["Asuntoja", b.units], ["Lämmitys", b.heat], ["Hissi", b.lift], ["Remontti", b.reno]]
    .map(([k, v]) => `<div class="row"><span>${k}</span><span class="dots"></span><span>${v}</span></div>`).join("");
  return `<div class="board" aria-label="Talon perustiedot"><div class="bt"><span>${b.name}</span><span>${b.stairs}</span></div>${rows}</div>
    <p class="notice">Perustiedot tulevat avoimesta rakennusdatasta (DVV ja HRI).</p>`;
}

const bind = (sel, fn) => app.querySelectorAll(sel).forEach(el => el.addEventListener("click", e => fn(el, e)));
function bindCommon() {
  bind("[data-id]", el => go("building", el.dataset.id));
  bind("[data-area]", el => { state.query = el.dataset.area; go("search"); });
  bind("[data-go]", (el, e) => { e.preventDefault(); go(el.dataset.go); });
}

/* ---------- home ---------- */
function renderHome() {
  const featured = [...BUILDINGS].sort((a, b) => reviewsOf(b).length - reviewsOf(a).length);
  const recent = BUILDINGS.flatMap(b => reviewsOf(b).map(rv => ({ b, rv }))).sort((x, y) => y.rv.date.localeCompare(x.rv.date)).slice(0, 4);
  app.innerHTML = `
    <section class="hero">
      <div class="hero-top">
      <div class="hero-photo">
        <img src="img/hero.jpg" alt="Kerrostaloja jäätyneen lahden rannalla talvella, ihmisiä kävelee jäällä" fetchpriority="high">
        ${window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 700px)").matches ? "" : `<video class="hero-video" autoplay muted playsinline preload="auto" poster="img/hero.jpg" aria-hidden="true"><source src="img/hero.mp4" type="video/mp4"></video>`}
      </div>
      <div class="hero-copy">
        <div class="inner">
          <div class="hero-text">
            <h1>Kysy asukkailta, millaista talossa on asua</h1>
            <p class="lead">Isännöitsijäntodistus kertoo remonteista. Naapuri kertoo, kuuluvatko yläkerran askeleet ja onko rapussa rauhallista.</p>
          </div>
          <div class="hero-board" data-board>${boardHtml(featured[0])}</div>
        </div>
      </div>
      </div>
      <div class="hero-below">
        <div class="inner searchrow">
          <div class="searchbox">
            <label for="hq">Hae osoitteella tai kaupunginosalla</label>
            <div class="field"><input id="hq" type="search" autocomplete="off" placeholder="Esim. Kaarnakatu 7 tai Kallio" value="${esc(state.query)}"><button class="go" id="hgo">Hae</button></div>
            <div class="suggest" id="suggest" hidden></div>
            <div class="popular"><span class="muted">Suosittuja:</span>${["Kallio", "Etu-Töölö", "Kalasatama", "Herttoniemi"].map(a => `<button class="chip" data-area="${a}">${a}</button>`).join("")}</div>
          </div>
          <div></div>
        </div>
        <div class="inner hero-board-slot" style="margin-top:32px"><div data-board>${boardHtml(featured[0])}</div></div>
      </div>
    </section>

    <section class="band wall">
      <div class="inner">
        <div class="section-head">
          <div><h2>Talot, joista puhutaan nyt</h2><p>Eniten arvioituja taloja tällä viikolla. Jokaisella talolla on oma sivunsa, jossa näkyvät kaikki arviot.</p></div>
          <button class="textlink" data-go="search">Kaikki talot</button>
        </div>
        <div class="tiles">
          ${featured.map(b => `<button class="tile" data-id="${b.id}">
            <div class="art">${facade(b)}</div>
            <div class="meta"><span class="nm">${b.name}</span>${badge(bScore(b))}<span class="sub">${b.area}, ${b.year}, ${plural(reviewsOf(b).length, "arvio", "arviota")}</span></div>
          </button>`).join("")}
        </div>
      </div>
    </section>

    <section class="band">
      <div class="inner split">
        <figure class="photo-frame" style="margin:0">
          <img src="img/katu.jpg" alt="Lumisateinen katu, jonka varrella vanhoja kivikerrostaloja ja lumen peittämiä autoja" loading="lazy">
          <figcaption>Arviot kertovat sen, mitä talosta ei näe kadulta.</figcaption>
        </figure>
        <div>
          <div class="section-head"><h2>Uusimmat arviot</h2></div>
          <div class="feed">
            ${recent.map(({ b, rv }) => `<article>
              ${badge(scoreOf(rv))}
              <div>
                <button class="textlink where" data-id="${b.id}">${b.name}, ${b.area}</button>
                <q>${esc(rv.text)}</q>
                <p class="by">${ROLES[rv.role]}, ${month(rv.date)}</p>
              </div>
            </article>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="band" id="how" style="padding-top:0">
      <div class="inner">
        <div class="how-wrap">
          <img src="img/piha.jpg" alt="Sisäpiha kuvattuna alhaalta ylöspäin, neliön muotoinen pala taivasta" loading="lazy">
          <div class="how-text">
            <h2>Näin arvioimme</h2>
            <div class="how-item"><h3>Vain asukkaat arvioivat</h3><p>Asuminen talossa vahvistetaan ennen kuin arvio julkaistaan. Arviot näkyvät nimettöminä.</p></div>
            <div class="how-item"><h3>Omistajat ja vuokralaiset erikseen</h3><p>Näet, arvioivatko omistajat taloa eri tavalla kuin vuokralaiset ja poismuuttaneet.</p></div>
            <div class="how-item"><h3>Talouden luvut tilinpäätöksistä</h3><p>Asukkaat lataavat taloyhtiön tilinpäätöksen. Siitä poimitaan vastikkeet, lainat ja tulevat remontit, mutta itse asiakirjaa ei julkaista.</p></div>
            <div class="how-item"><h3>Taloa arvioidaan, ei naapureita</h3><p>Naapureita ei mainita nimeltä. Ilmoitetut arviot tarkistetaan ennen kuin ne palaavat näkyviin.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <img src="img/porras.jpg" alt="" loading="lazy">
      <div class="inner">
        <h2>Asutko kerrostalossa? Kerro seuraavalle muuttajalle.</h2>
        <p>Arvion kirjoittaminen vie pari minuuttia. Sinun kokemuksesi on se tieto, jota esitteistä ei löydy.</p>
        <button class="btn light" data-go="write">Arvioi talosi</button>
      </div>
    </section>`;
  bindCommon();
  bindHomeSearch();
  startBoard(featured.slice(0, 4));
  loopHeroVideo();
}

// the clip starts on the same frame as the photo beneath it, so fading out and restarting hides the jump back
function loopHeroVideo() {
  const v = app.querySelector(".hero-video");
  if (!v) return;
  v.addEventListener("timeupdate", () => { if (v.duration) v.classList.toggle("out", v.currentTime > v.duration - 1.2); });
  v.addEventListener("ended", () => setTimeout(() => { v.currentTime = 0; v.play().catch(() => {}); }, 900));
}

function bindHomeSearch() {
  const input = document.getElementById("hq"), box = document.getElementById("suggest");
  const show = () => {
    const q = input.value.trim();
    if (!q) { box.hidden = true; return; }
    const list = matches(q);
    box.innerHTML = list.length
      ? list.map(b => `<button data-sid="${b.id}"><span class="thumb">${facade(b)}</span><span><strong>${b.name}</strong><br><span class="muted small">${b.area}</span></span><span class="sc">${badge(bScore(b), "sm")}</span></button>`).join("")
      : `<button data-all="1"><span>Ei osumia. Katso kaikki talot</span></button>`;
    box.hidden = false;
    box.querySelectorAll("[data-sid]").forEach(el => el.addEventListener("click", () => go("building", el.dataset.sid)));
    box.querySelectorAll("[data-all]").forEach(el => el.addEventListener("click", () => { state.query = ""; go("search"); }));
  };
  input.addEventListener("input", show);
  input.addEventListener("keydown", e => { if (e.key === "Enter") { state.query = input.value; go("search"); } if (e.key === "Escape") box.hidden = true; });
  document.getElementById("hgo").addEventListener("click", () => { state.query = input.value; go("search"); });
}

function startBoard(list) {
  clearInterval(boardTimer);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let i = 0;
  boardTimer = setInterval(() => {
    const hosts = document.querySelectorAll("[data-board]");
    if (!hosts.length) { clearInterval(boardTimer); return; }
    hosts.forEach(h => h.querySelector(".board").classList.add("fading"));
    setTimeout(() => {
      i = (i + 1) % list.length;
      hosts.forEach(h => {
        h.innerHTML = boardHtml(list[i]);
        const nb = h.querySelector(".board");
        nb.classList.add("fading");
        requestAnimationFrame(() => requestAnimationFrame(() => nb.classList.remove("fading")));
      });
    }, 350);
  }, 5000);
}

/* ---------- search ---------- */
function renderSearch() {
  const list = matches(state.query), s = state.sort;
  list.sort(s === "score" ? (a, b) => bScore(b) - bScore(a) : s === "low" ? (a, b) => bScore(a) - bScore(b) : (a, b) => reviewsOf(b).length - reviewsOf(a).length);
  app.innerHTML = `
    <div class="page-top"><div class="inner">
      <h1 style="font-size:clamp(36px,5vw,56px)">Hae taloa</h1>
      <p class="muted" style="margin-top:8px">${plural(list.length, "talo", "taloa")}${state.query.trim() ? ` haulla “${esc(state.query.trim())}”` : ""}</p>
      <div class="toolbar">
        <input id="sq" type="search" aria-label="Hae osoitteella tai kaupunginosalla" placeholder="Osoite tai kaupunginosa" value="${esc(state.query)}">
        <select id="sort" aria-label="Järjestys">
          <option value="score"${s === "score" ? " selected" : ""}>Paras ensin</option>
          <option value="low"${s === "low" ? " selected" : ""}>Heikoin ensin</option>
          <option value="count"${s === "count" ? " selected" : ""}>Eniten arvioita</option>
        </select>
      </div>
    </div></div>
    <div class="inner" style="padding-block:24px 88px">
      ${list.length ? `<ul class="results">${list.map(b => { const v = bScore(b), n = reviewsOf(b).length; return `<li><button data-id="${b.id}">
        <span class="thumb">${facade(b)}</span>
        <span><span class="rname">${b.name}</span><br><span class="muted small">${b.area}, rakennettu ${b.year}, ${b.units} asuntoa</span></span>
        <span class="rright"><span class="rcount">${word(v)}<br>${plural(n, "arvio", "arviota")}</span>${badge(v)}</span>
      </button></li>`; }).join("")}</ul>`
      : `<p style="padding-block:24px">Haulla ei löytynyt taloa. Demossa on mukana kuusi helsinkiläistä taloa, kokeile esimerkiksi “Kallio”.</p>`}
    </div>`;
  const q = document.getElementById("sq");
  q.addEventListener("input", e => { state.query = e.target.value; renderSearch(); const el = document.getElementById("sq"); el.focus(); el.setSelectionRange(state.query.length, state.query.length); });
  document.getElementById("sort").addEventListener("change", e => { state.sort = e.target.value; renderSearch(); });
  bindCommon();
}

/* ---------- building ---------- */
function renderBuilding(b) {
  const all = reviewsOf(b), v = bScore(b);
  const owners = all.filter(x => x.role === "owner"), others = all.filter(x => x.role !== "owner");
  const oS = owners.length ? avg(owners.map(scoreOf)) : null, rS = others.length ? avg(others.map(scoreOf)) : null;
  const shown = state.tab === "all" ? all : state.tab === "owner" ? owners : others;
  const near = BUILDINGS.filter(x => x.id !== b.id).sort((x, y) => bScore(y) - bScore(x)).slice(0, 4);
  let gapNote = "Vertailuun tarvitaan arvioita sekä omistajilta että muilta asukkailta.";
  if (oS !== null && rS !== null) gapNote = Math.abs(oS - rS) >= 0.5
    ? `Omistajat arvioivat taloa ${oS > rS ? "paremmaksi" : "heikommaksi"} kuin vuokralaiset ja poismuuttaneet. Lue molempien ryhmien arviot.`
    : "Omistajien ja muiden asukkaiden arviot ovat samalla tasolla.";

  app.innerHTML = `
    <div class="bhero"><div class="inner">
      <div>
        <div class="crumbs"><button data-go="search">Hae taloa</button><span aria-hidden="true">/</span><button data-area="${b.area}">${b.area}</button><span aria-hidden="true">/</span><span>${b.name}</span></div>
        <h1>${b.name}</h1>
        <p class="addr">${b.company}, ${b.area}, ${b.city}</p>
        <div class="bscore">
          ${badge(v, "lg")}
          <div><div class="word">${word(v)}</div><div class="lbl">${plural(all.length, "asukasarvio", "asukasarviota")}<br>${Math.round(all.length / b.units * 100)} % asunnoista on arvioinut talon</div></div>
        </div>
      </div>
      <div class="art">${facade(b)}</div>
    </div></div>

    <div class="inner layout">
      <div>
        <section>
          <h2>Mitä asukkaat sanovat</h2>
          <div class="summary">
            <p class="lead">${b.ai.lead}</p>
            <ul>${b.ai.pros.map(x => `<li class="pro">${x}</li>`).join("")}${b.ai.cons.map(x => `<li class="con">${x}</li>`).join("")}</ul>
            <p class="src">Tekoäly on koonnut tiivistelmän talon ${plural(b.reviews.length, "arviosta", "arviosta")}.</p>
          </div>
        </section>

        <section>
          <h2>Arvosanat</h2>
          <div class="cats">
            ${CATS.map(([k, label]) => { const c = catAvg(b, k); return `<div class="cat"><span>${label}</span><div class="track"><div class="fill" style="width:${c / 5 * 100}%;background:var(${toneVar(c)})"></div></div><span class="v">${fmt(c)}</span></div>`; }).join("")}
          </div>
          <div class="gapline">
            <div><div class="small muted">Omistajat</div><div class="big">${oS === null ? "–" : fmt(oS)}</div><div class="small muted">${plural(owners.length, "arvio", "arviota")}</div></div>
            <div><div class="small muted">Vuokralaiset ja entiset asukkaat</div><div class="big">${rS === null ? "–" : fmt(rS)}</div><div class="small muted">${plural(others.length, "arvio", "arviota")}</div></div>
          </div>
          <p class="gapnote">${gapNote}</p>
        </section>

        ${financeHtml(b)}

        <section id="reviews">
          <div class="section-head" style="margin-bottom:0">
            <h2>Arviot</h2>
            ${state.writing ? "" : `<button class="btn" id="write">Arvioi tämä talo</button>`}
          </div>
          ${state.toast ? `<div class="toast" role="status">${state.toast}</div>` : ""}
          ${state.writing ? formHtml() : ""}
          <div class="tabs" role="tablist">
            ${[["all", `Kaikki (${all.length})`], ["owner", `Omistajat (${owners.length})`], ["other", `Vuokralaiset ja entiset (${others.length})`]].map(([k, l]) => `<button role="tab" data-tab="${k}" aria-selected="${state.tab === k}">${l}</button>`).join("")}
          </div>
          ${shown.length ? shown.map((rv, i) => { const key = b.id + rv.date + i; const on = !!state.helpful[key]; return `
            <article class="rev">
              <div class="top">
                ${badge(scoreOf(rv), "sm")}
                <div><div class="who">${ROLES[rv.role]}, asunut ${rv.years}</div><div class="when">${month(rv.date)}<span class="verified">Vahvistettu asukas</span></div></div>
              </div>
              <p class="body">${esc(rv.text)}</p>
              <div class="subs">${CATS.map(([k, , short]) => `<span>${short} ${rv.s[k]}</span>`).join("")}</div>
              <div class="helpful">Oliko arviosta apua? <button data-help="${key}" aria-pressed="${on}">Kyllä (${(rv.up || 0) + (on ? 1 : 0)})</button></div>
            </article>`; }).join("") : `<p style="padding-block:20px">Tästä ryhmästä ei ole vielä arvioita.</p>`}
        </section>
      </div>

      <aside>
        ${factsBoard(b)}
        <div class="sidecard">
          <h3>Syväraportti ennen kauppaa</h3>
          <p>Kaikki arviot vuosittain, remonttihistoria ja vertailu alueen muihin taloihin yhtenä PDF:nä.</p>
          <div class="price">4,90 €</div>
          <button class="btn" id="buy">Tilaa raportti</button>
          ${state.bought ? `<p class="notice" role="status">Demoversiossa maksaminen ei ole käytössä.</p>` : ""}
        </div>
        <div class="sidecard">
          <h3>Muita taloja</h3>
          <ul class="near">${near.map(x => `<li><button data-id="${x.id}"><span class="thumb">${facade(x)}</span><span><span class="nm">${x.name}</span><br><span class="small muted">${x.area}</span></span><span class="sc">${badge(bScore(x), "sm")}</span></button></li>`).join("")}</ul>
        </div>
      </aside>
    </div>`;

  bindCommon();
  bind("[data-tab]", el => { state.tab = el.dataset.tab; renderBuilding(b); });
  bind("[data-help]", el => { state.helpful[el.dataset.help] = !state.helpful[el.dataset.help]; renderBuilding(b); });
  document.getElementById("buy").addEventListener("click", () => { state.bought = true; renderBuilding(b); });
  const w = document.getElementById("write");
  if (w) w.addEventListener("click", () => openForm(b));
  if (state.writing) bindForm(b);
  bindFinance(b);
}

function openForm(b) {
  state.writing = true; state.toast = ""; renderBuilding(b);
  document.getElementById("reviews").scrollIntoView({ block: "start" });
  document.getElementById("f-role").focus({ preventScroll: true });
}

function formHtml() {
  const d = state.draft;
  return `<form class="write" id="form" novalidate>
    <div><h3 style="font-size:21px">Arvioi talo</h3><p class="muted small" style="margin-top:4px">1 = huono, 5 = erinomainen</p></div>
    ${CATS.map(([k, label]) => `
      <div class="rate"><span>${label}</span><div class="opts" role="group" aria-label="${label}">
        ${[1, 2, 3, 4, 5].map(n => `<button type="button" data-k="${k}" data-n="${n}" aria-pressed="${d[k] === n}">${n}</button>`).join("")}
      </div></div>`).join("")}
    <div class="two">
      <label class="f" for="f-role">Asutko talossa
        <select id="f-role"><option value="owner">Omistajana</option><option value="renter">Vuokralla</option><option value="former">Asuin aiemmin</option></select>
      </label>
      <label class="f" for="f-years">Kuinka kauan
        <select id="f-years"><option>alle vuoden</option><option>1–2 vuotta</option><option>2–5 vuotta</option><option>5–10 vuotta</option><option>yli 10 vuotta</option></select>
      </label>
    </div>
    <label class="f" for="f-text">Mitä olisit halunnut tietää ennen muuttoa?
      <textarea id="f-text" placeholder="Kerro esimerkiksi äänistä, lämpötilasta tai siitä, miten vikailmoituksiin reagoidaan. Älä mainitse naapureita nimeltä."></textarea>
    </label>
    <p class="muted small">Oikeassa palvelussa asuminen talossa vahvistetaan ennen julkaisua. Arvio julkaistaan nimettömänä.</p>
    <p class="err" id="f-err" hidden></p>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn" type="submit">Julkaise arvio</button>
      <button class="btn line" type="button" id="cancel">Peruuta</button>
    </div>
  </form>`;
}

function bindForm(b) {
  const form = document.getElementById("form"), d = state.draft;
  form.querySelectorAll(".opts button").forEach(btn => btn.addEventListener("click", () => {
    d[btn.dataset.k] = +btn.dataset.n;
    form.querySelectorAll(`button[data-k="${btn.dataset.k}"]`).forEach(x => x.setAttribute("aria-pressed", String(+x.dataset.n === d[btn.dataset.k])));
  }));
  document.getElementById("cancel").addEventListener("click", () => { state.writing = false; state.draft = {}; renderBuilding(b); });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const err = document.getElementById("f-err");
    const missing = CATS.filter(([k]) => !d[k]).map(([, l]) => l.toLowerCase());
    const text = document.getElementById("f-text").value.trim();
    if (missing.length) { err.textContent = "Anna vielä arvosana: " + missing.join(", ") + "."; err.hidden = false; return; }
    if (text.length < 20) { err.textContent = "Kirjoita vähintään pari lausetta, jotta arvio auttaa muita."; err.hidden = false; return; }
    USER[b.id] = [{ role: document.getElementById("f-role").value, years: document.getElementById("f-years").value, date: new Date().toISOString().slice(0, 10), up: 0, s: { ...d }, text }, ...(USER[b.id] || [])];
    saveUser();
    state.writing = false; state.draft = {}; state.tab = "all";
    state.toast = "Arvio julkaistu. Demossa se näkyy vain sinun selaimessasi.";
    renderBuilding(b);
  });
}

/* ---------- routing ---------- */
function go(view, id) {
  clearInterval(boardTimer);
  const wantForm = view === "write";
  if (wantForm) { view = "building"; id = state.id || "kaarna"; }
  if (view === "how") {
    renderHome(); history.replaceState(null, "", location.pathname);
    document.getElementById("how").scrollIntoView({ block: "start" }); return;
  }
  state.writing = false; state.draft = {}; state.toast = ""; state.bought = false; state.up = null; state.finToast = "";
  if (view === "building") {
    const b = BUILDINGS.find(x => x.id === id);
    if (!b) return go("home");
    if (state.id !== id) state.tab = "all";
    state.id = id;
    history.replaceState(null, "", "#" + id);
    document.title = `${b.name}, ${b.area} – Naapuri`;
    window.scrollTo({ top: 0, behavior: "instant" });
    if (wantForm) openForm(b); else renderBuilding(b);
    return;
  }
  history.replaceState(null, "", view === "search" ? "#haku" : location.pathname);
  document.title = view === "search" ? "Hae taloa – Naapuri" : "Naapuri – asukkaiden arviot taloyhtiöistä";
  window.scrollTo({ top: 0, behavior: "instant" });
  view === "search" ? renderSearch() : renderHome();
}

document.querySelectorAll("nav.site [data-go]").forEach(el => el.addEventListener("click", e => { e.preventDefault(); go(el.dataset.go); }));
function route() {
  const h = location.hash.slice(1);
  if (h === "haku") go("search");
  else if (BUILDINGS.some(b => b.id === h)) go("building", h);
  else go("home");
}
window.addEventListener("hashchange", route);
route();
