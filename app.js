const APP_VERSION = "v2";
const KEY = "miu-primavera-2026";
const INGLES_URL = "https://thorvicc02.github.io/ingles-trabajo/";

const RAMOS = [
  { id: "MB100", name: "Start 2.0", weeks: "Sem 1", docente: "Francisco Valenzuela / Skalers", sala: "Whop · Skalers", criterio: "Business Manager configurado + oferta definida", color: "#1E5A8A", lessons: ["Día 1 (15:11)", "Día 2 (24:17)", "Día 3 (19:34)", "Día 4 (42:55)", "Día 5 (17:21)", "PDF: Diccionario del Media Buyer", "PDF: Lanza tu Primera Campaña Paso a Paso", "PDF: ¿Cuál es tu Oferta?", "PDF: Tus primeros 5 Scripts", "PDF: Shiny object Syndrome", "PDF: Test de los 100 dólares", "PDF: Caso Estudio"] },
  { id: "MB101", name: "Fundamentos y Ofertas", weeks: "Sem 2–3", docente: "Francisco Valenzuela / Skalers", sala: "Whop · Skalers / ClickBank", criterio: "Cuenta ClickBank o Skalers Network, pagos en dólares, oferta elegida + break-even", color: "#2A6F7A", lessons: ["Pro Mód 0 · Onboarding", "Pro Mód 1 · Fundamentos", "Pro Mód 2 · Ofertas & Audiencias", "Mastery · Onboarding", "Mastery Mód 1 · Introducción", "Mastery Mód 2 · Ofertas, Landers y Psicología"] },
  { id: "MB201", name: "Creativos y Landers", weeks: "Sem 4–5", docente: "Francisco Valenzuela / Skalers", sala: "Whop · Skalers / Biblioteca de anuncios", criterio: "1 lander + 3 anuncios con IA", color: "#3B5B8A", lessons: ["Pro Mód 3 · Creativos", "Mastery Mód 3 · Landers", "Mastery Mód 4 · Ads"] },
  { id: "MB301", name: "Meta Ads y Tracking", weeks: "Sem 6–7", docente: "Francisco Valenzuela / Skalers", sala: "Meta Ads Manager / Redtrack", criterio: "Tracking funcionando + campaña armada sin publicar", color: "#3A4A7A", lessons: ["Pro Mód 4 · Meta Ads Mastery", "Mastery Mód 5 · Tracking (Redtrack)", "Mastery Mód 6 · Meta Ads Mastery"] },
  { id: "MB401", name: "Métricas, Optimización y Casos", weeks: "Sem 8–9", docente: "Francisco Valenzuela / Skalers", sala: "Meta Ads Manager", criterio: "Campaña lanzada con tope acotado + informe de métricas", color: "#2E6B4A", lessons: ["Pro Mód 5 · Mide como experto", "Pro Mód 6 · Scaling", "Pro Mód 7 · Casos", "Mastery Mód 7 · Métricas", "Mastery Mód 8 · Optimización", "Mastery Mód 9 · Casos"] },
  { id: "ING", name: "Inglés", weeks: "Todo el semestre", docente: "Autoestudio · Duolingo / BBC", sala: "Duolingo · BBC Learning English", criterio: "1 anuncio completo en inglés cada viernes", color: "#8A5A2A", lessons: ["Rutina diaria: 20 min Duolingo/BBC", "Rutina diaria: copy de anuncios en inglés"] },
  { id: "CHE", name: "Checo", weeks: "Todo el semestre", docente: "Clases de checo", sala: "Clase 12:00", criterio: "Asistencia a las clases de las 12:00", color: "#6B2E3B", lessons: [] },
];

const EVALS = {
  MB100: [{ date: "2026-11-17", name: "Diccionario: 5 términos", w: 20 }, { date: "2026-11-18", name: "Business Manager configurado", w: 30 }, { date: "2026-11-20", name: "Oferta definida", w: 50 }],
  MB101: [{ date: "2026-11-27", name: "Cuenta ClickBank / Skalers Network", w: 25 }, { date: "2026-12-02", name: "Cuenta de pagos en dólares", w: 20 }, { date: "2026-12-04", name: "Oferta elegida + break-even", w: 55 }],
  MB201: [{ date: "2026-12-11", name: "Lander publicada", w: 40 }, { date: "2026-12-16", name: "Primer anuncio con IA", w: 25 }, { date: "2026-12-18", name: "3 anuncios con IA", w: 35 }],
  MB301: [{ date: "2026-12-24", name: "Tracking funcionando", w: 40 }, { date: "2026-12-30", name: "Estructura de campaña", w: 25 }, { date: "2026-12-31", name: "Campaña armada sin publicar", w: 35 }],
  MB401: [{ date: "2027-01-06", name: "Lanzamiento con tope acotado", w: 30 }, { date: "2027-01-08", name: "Revisión de métricas", w: 20 }, { date: "2027-01-15", name: "Informe de métricas", w: 50 }],
  ING: ["2026-11-20", "2026-11-27", "2026-12-04", "2026-12-11", "2026-12-18", "2026-12-24", "2026-12-31", "2027-01-08", "2027-01-15"].map((d, i) => ({ date: d, name: "Anuncio en inglés " + (i + 1), w: i === 8 ? 12 : 11 })),
  CHE: [{ date: "2026-12-04", name: "Asistencia sem 1–3", w: 33 }, { date: "2026-12-24", name: "Asistencia sem 4–6", w: 33 }, { date: "2027-01-15", name: "Asistencia sem 7–9", w: 34 }],
};

const COLS = [
  { label: "Sem 1", hours: 2, tiles: [1, 2, 3, 4, 5].map(n => ({ ramo: "MB100", name: "Start 2.0 · Día " + n, code: "MB100-D" + n, idx: [n - 1] })).concat([{ ramo: "MB100", name: "Start 2.0 · PDFs bonus", code: "MB100-PDF", idx: [5, 6, 7, 8, 9, 10, 11] }]) },
  { label: "Sem 2–3", hours: 6.75, tiles: [{ ramo: "MB101", name: "Pro · Onboarding", code: "MB101-P0", idx: [0] }, { ramo: "MB101", name: "Pro · Fundamentos", code: "MB101-P1", idx: [1] }, { ramo: "MB101", name: "Pro · Ofertas & Audiencias", code: "MB101-P2", idx: [2] }, { ramo: "MB101", name: "Mastery · Onboarding", code: "MB101-M0", idx: [3] }, { ramo: "MB101", name: "Mastery · Introducción", code: "MB101-M1", idx: [4] }, { ramo: "MB101", name: "Mastery · Ofertas, Landers y Psicología", code: "MB101-M2", idx: [5] }] },
  { label: "Sem 4–5", hours: 3.25, tiles: [{ ramo: "MB201", name: "Pro · Creativos", code: "MB201-P3", idx: [0] }, { ramo: "MB201", name: "Mastery · Landers", code: "MB201-M3", idx: [1] }, { ramo: "MB201", name: "Mastery · Ads", code: "MB201-M4", idx: [2] }] },
  { label: "Sem 6–7", hours: 3.25, tiles: [{ ramo: "MB301", name: "Pro · Meta Ads Mastery", code: "MB301-P4", idx: [0] }, { ramo: "MB301", name: "Mastery · Tracking (Redtrack)", code: "MB301-M5", idx: [1] }, { ramo: "MB301", name: "Mastery · Meta Ads Mastery", code: "MB301-M6", idx: [2] }] },
  { label: "Sem 8–9", hours: 6.75, tiles: [{ ramo: "MB401", name: "Pro · Mide como experto", code: "MB401-P5", idx: [0] }, { ramo: "MB401", name: "Pro · Scaling", code: "MB401-P6", idx: [1] }, { ramo: "MB401", name: "Pro · Casos", code: "MB401-P7", idx: [2] }, { ramo: "MB401", name: "Mastery · Métricas", code: "MB401-M7", idx: [3] }, { ramo: "MB401", name: "Mastery · Optimización", code: "MB401-M8", idx: [4] }, { ramo: "MB401", name: "Mastery · Casos", code: "MB401-M9", idx: [5] }] },
];

const TRANS_HOURS = 45 * 0.75 + 45 * 1;
const TOTAL_HOURS = Math.round(COLS.reduce((a, c) => a + c.hours, 0) + TRANS_HOURS);
const N_TILES = COLS.reduce((a, c) => a + c.tiles.length, 0) + 2;

const START = new Date(2026, 10, 16);
const END = new Date(2027, 0, 15);
const DAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const MES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const TABS = [
  { value: "horario", label: "Horario" },
  { value: "malla", label: "Malla" },
  { value: "eval", label: "Evaluaciones" },
  { value: "cursos", label: "Cursos" },
];
const TILE = { green: "#DCEFD0", white: "#FFFFFF", red: "#F6D4D4", gray: "#E2E2E2" };
const EMPTY = { done: {}, att: {}, ev: {}, ok: {} };

function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function weekOf(d) { return Math.floor(Math.round((d.getTime() - START.getTime()) / 86400000) / 7) + 1; }
function mbIdForWeek(w) { return w <= 1 ? "MB100" : w <= 3 ? "MB101" : w <= 5 ? "MB201" : w <= 7 ? "MB301" : "MB401"; }
function ramoById(id) { return RAMOS.find(r => r.id === id); }
function mbFor(d) { return ramoById(mbIdForWeek(weekOf(d))); }
function num(v) { if (!v) return null; const n = parseFloat(String(v).replace(",", ".")); return isNaN(n) || n < 1 || n > 7 ? null : n; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function todayClamped() {
  const n = new Date();
  const t = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  if (t < START) return new Date(START);
  if (t > END) return new Date(END);
  return t;
}

function blocksFor(d) {
  const mb = mbFor(d);
  const fri = d.getDay() === 5;
  return [
    { from: "08:00", to: "09:30", title: "Clase MB · " + mb.name, ramo: mb.id, docente: mb.docente, sala: mb.sala, att: true },
    { from: "09:30", to: "09:45", title: "Recreo", att: false },
    { from: "09:45", to: "11:00", title: fri ? "Entrega semanal · " + mb.id : "Práctica MB · " + mb.name, ramo: mb.id, docente: mb.docente, sala: fri ? "Chat con Grok Bot" : "Meta Ads Manager / ClickBank", att: true },
    { from: "11:00", to: "11:45", title: "ING · Inglés", ramo: "ING", docente: "Autoestudio · Duolingo / BBC", sala: "Duolingo · BBC Learning English", att: true },
    { from: "12:00", to: "13:00", title: "CHE · Checo", ramo: "CHE", docente: "Clases de checo", sala: "Clase de checo", att: true },
    { from: "13:00", to: "14:00", title: "Almuerzo", att: false },
  ];
}

function classDays(id) {
  let n = 0;
  for (let i = 0; i < 63; i++) {
    const d = addDays(START, i);
    const wd = d.getDay();
    if (wd === 0 || wd === 6) continue;
    if (id === "ING" || id === "CHE" || mbFor(d).id === id) n += id.startsWith("MB") ? 2 : 1;
  }
  return n;
}

function load() {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return { ...EMPTY, ...JSON.parse(raw), done: { ...EMPTY.done, ...(JSON.parse(raw).done || {}) }, att: { ...EMPTY.att, ...(JSON.parse(raw).att || {}) }, ev: { ...EMPTY.ev, ...(JSON.parse(raw).ev || {}) }, ok: { ...EMPTY.ok, ...(JSON.parse(raw).ok || {}) } };
  } catch (e) { /* sin almacenamiento */ }
  return { done: {}, att: {}, ev: {}, ok: {} };
}

function persist() {
  try { window.localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* sin almacenamiento */ }
}

function progress(r) {
  return r.lessons.length ? Math.round(100 * r.lessons.filter((_, i) => s.done[r.id + ":" + i]).length / r.lessons.length) : 0;
}
function asistencia(r) {
  const n = Object.keys(s.att).filter(k => s.att[k] && k.split("|")[2] === r.id).length;
  return Math.round(100 * n / Math.max(1, classDays(r.id)));
}
function notas(id) {
  const evs = EVALS[id];
  let sw = 0, sn = 0, all = true;
  evs.forEach((e, i) => {
    const n = num(s.ev[id + ":" + i]);
    if (n === null) all = false;
    else { sw += e.w; sn += n * e.w; }
  });
  return { pres: sw ? sn / sw : null, fin: all ? sn / 100 : null };
}
function fmt(n) { return n === null ? "-.-" : (Math.round(n * 10) / 10).toFixed(1); }
function circleClass(n) { return n === null ? "" : n >= 4 ? "pass" : "fail"; }

function tileColor(tl) {
  const done = tl.idx.every(i => s.done[tl.ramo + ":" + i]);
  const f = notas(tl.ramo).fin;
  if (f !== null && f < 4) return TILE.red;
  if (done || s.ok[tl.ramo]) return TILE.green;
  if (tl.ramo === curMb()) return TILE.white;
  return TILE.gray;
}
function transColor(id) {
  const f = notas(id).fin;
  if (f !== null && f < 4) return TILE.red;
  if (s.ok[id]) return TILE.green;
  return TILE.white;
}
function curMb() { return mbIdForWeek(Math.max(1, weekOf(new Date()))); }

function tileHTML(key, name, code, bg, n, ramo) {
  return `<button type="button" class="tile" data-act="open-ramo" data-id="${esc(ramo)}" style="background:${bg}">
    <div class="name">${esc(name)}</div>
    <div class="code">${esc(code)}</div>
    <div class="nota">${n === null ? "" : fmt(n)}</div>
  </button>`;
}

let s = load();
let tab = "horario";
let day = todayClamped();
let curso = "MB100";
let evRamo = "MB100";

function openRamo(id) {
  const r = ramoById(id);
  if (!r) return;
  if (r.lessons.length) { curso = id; tab = "cursos"; }
  else { evRamo = id; tab = "eval"; }
  render();
}

function renderCards() {
  document.getElementById("cards").innerHTML = RAMOS.map(r => `
    <button type="button" class="course-card" data-act="open-ramo" data-id="${r.id}" role="listitem">
      <div class="cap" style="background:${r.color}">${r.id} · ${esc(r.name)}</div>
      <div class="body">
        <div>Avance: <b>${r.lessons.length ? progress(r) + "%" : "—"}</b></div>
        <div>Asistencia: <b>${asistencia(r)}%</b></div>
        <div>Nota: <b>${fmt(notas(r.id).pres)}</b></div>
        <div class="weeks">${esc(r.weeks)}</div>
      </div>
    </button>`).join("");
}

function renderTabs() {
  document.getElementById("tabs").innerHTML = TABS.map(t =>
    `<button type="button" role="tab" data-act="tab" data-v="${t.value}" aria-selected="${tab === t.value}">${t.label}</button>`
  ).join("");
}

function renderHorario() {
  const wd = day.getDay();
  const weekend = wd === 0 || wd === 6;
  const cur = mbFor(day);
  const w = weekOf(day);
  const sameDay = iso(day) === iso(new Date());
  let html = `<div class="card day-nav">
    <button type="button" class="btn" data-act="prev">‹ Anterior</button>
    <div class="when">${DAYS[wd]} ${day.getDate()} de ${MONTHS[day.getMonth()]}, ${day.getFullYear()}
      <small>Semana ${w}${weekend ? " · fin de semana" : " · ramo MB: " + cur.id}${sameDay ? " · hoy" : ""}</small>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end">
      <button type="button" class="btn" data-act="hoy">Hoy</button>
      <button type="button" class="btn" data-act="next">Siguiente ›</button>
    </div>
  </div>`;
  if (weekend) {
    html += `<p class="empty">Sin clases.</p>`;
  } else {
    html += `<div class="card">` + blocksFor(day).map((b, i) => {
      const k = iso(day) + "|" + b.from + "|" + (b.ramo || "");
      const on = !!s.att[k];
      const ing = b.ramo === "ING"
        ? `<div style="margin-top:6px"><a class="btn link" href="${INGLES_URL}">Abrir Inglés de Trabajo</a></div>`
        : "";
      return `<div class="block">
        <div class="time">${b.from}<br>${b.to}</div>
        <div class="grow">
          <div class="title${b.att ? "" : " rest"}">${esc(b.title)}</div>
          ${b.docente ? `<div class="meta">Docente: ${esc(b.docente)}</div>` : ""}
          ${b.sala ? `<div class="room">Sala: ${esc(b.sala)}</div>` : ""}
          ${ing}
        </div>
        ${b.att ? `<button type="button" class="asist" data-act="att" data-k="${esc(k)}"><span class="box${on ? " on" : ""}">${on ? "✓" : ""}</span>Asistí</button>` : ""}
      </div>`;
    }).join("") + `</div>`;
  }
  return html;
}

function renderMalla() {
  const cols = COLS.map(c => `<div class="col">
    <div class="col-h">${esc(c.label)}</div>
    ${c.tiles.map(tl => tileHTML(tl.code, tl.name, tl.code, tileColor(tl), notas(tl.ramo).fin ?? notas(tl.ramo).pres, tl.ramo)).join("")}
    <div class="hrs">${String(c.hours).replace(".", ",")} horas</div>
  </div>`).join("");
  return `<div class="malla-wrap"><div class="malla">
    ${cols}
    <div class="span-h">Transversales · Sem 1–9</div>
    <div style="grid-column:1 / 3">${tileHTML("ING", "Inglés · 45 sesiones de 45 min", "ING", transColor("ING"), notas("ING").fin ?? notas("ING").pres, "ING")}</div>
    <div style="grid-column:3 / 6">${tileHTML("CHE", "Checo · 45 clases de 1 h", "CHE", transColor("CHE"), notas("CHE").fin ?? notas("CHE").pres, "CHE")}</div>
  </div></div>
  <div class="legend">
    <div>
      ${[["#FFFFFF", "Asignatura en curso"], ["#DCEFD0", "Asignatura aprobada"], ["#F6D4D4", "Asignatura reprobada"], ["#E2E2E2", "Asignatura pendiente"]].map(l =>
        `<div class="swatch"><i style="background:${l[0]}"></i>${l[1]}</div>`).join("")}
    </div>
    <div class="totals">
      <div>Cantidad de horas plan (aprox.): <b>${TOTAL_HOURS}</b></div>
      <div>Cantidad de asignaturas: <b>${RAMOS.length} ramos · ${N_TILES} módulos</b></div>
    </div>
  </div>`;
}

function evalRowHTML(r, e, i) {
  const k = r.id + ":" + i;
  const n = num(s.ev[k]);
  const [y, m, d] = e.date.split("-");
  return `<div class="eval-row">
    <div class="eval-date"><div class="d">${d}</div><div class="m">${MES[parseInt(m, 10) - 1]}${y === "2027" ? " 27" : ""}</div></div>
    <div class="eval-info"><div class="r">${esc(r.name)}</div><div class="e">Evaluación ${i + 1} : ${e.w}% · ${esc(e.name)}</div></div>
    <input class="grade" type="text" inputmode="decimal" placeholder="1.0–7.0" maxlength="4" data-act="ev" data-k="${esc(k)}" value="${esc(s.ev[k] || "")}" aria-label="Nota de ${esc(e.name)}">
    <div class="circle ${circleClass(n)}" data-circle="${esc(k)}">${fmt(n)}</div>
  </div>`;
}

function renderEval() {
  const r = ramoById(evRamo);
  const nt = notas(r.id);
  const segs = RAMOS.map(x => `<button type="button" data-act="ev-ramo" data-v="${x.id}" aria-selected="${evRamo === x.id}">${x.id}</button>`).join("");
  const attNote = r.id === "CHE" ? " · asistencia actual " + asistencia(r) + "%" : "";
  const finClass = nt.fin === null ? "" : nt.fin >= 4 ? "pass" : "fail";
  return `<div class="seg-mini" role="tablist" aria-label="Ramo">${segs}</div>
    <div class="eval-head">
      <div>
        <h2>${r.id} · ${esc(r.name)}</h2>
        <p>Aprueba: ${esc(r.criterio)}${attNote}</p>
      </div>
      <button type="button" class="status${s.ok[r.id] ? " ok" : ""}" data-act="ok" data-k="${r.id}">${s.ok[r.id] ? "Aprobado" : "Pendiente"}</button>
    </div>
    <div class="card">${EVALS[r.id].map((e, i) => evalRowHTML(r, e, i)).join("")}</div>
    <div class="card summary">
      <div><div class="lbl">Nota Presentación (100%)</div><div class="val" id="nota-pres">${fmt(nt.pres)}</div></div>
      <div><div class="lbl">Nota Final</div><div class="val ${finClass}" id="nota-fin">${fmt(nt.fin)}</div></div>
    </div>
    <p class="note">Escala 1.0–7.0, se aprueba con 4.0. La presentación promedia las notas ingresadas según su peso; la final aparece cuando están todas. Toca el estado para marcar el ramo aprobado.</p>`;
}

function renderCursos() {
  const withLessons = RAMOS.filter(r => r.lessons.length);
  if (!withLessons.some(r => r.id === curso)) curso = withLessons[0].id;
  const r = ramoById(curso);
  const segs = withLessons.map(x => `<button type="button" data-act="curso" data-v="${x.id}" aria-selected="${curso === x.id}">${x.id}</button>`).join("");
  const ing = r.id === "ING" ? `<div style="padding:0 14px 12px"><a class="btn link" href="${INGLES_URL}">Abrir Inglés de Trabajo</a></div>` : "";
  return `<div class="seg-mini" role="tablist" aria-label="Curso">${segs}</div>
    <div class="card">
      <div class="course-head">${r.id} · ${esc(r.name)} — ${progress(r)}%
        <div class="bar"><i style="width:${progress(r)}%"></i></div>
      </div>
      ${ing}
      ${r.lessons.map((l, i) => {
        const k = r.id + ":" + i;
        const on = !!s.done[k];
        return `<button type="button" class="lesson${on ? " done" : ""}" data-act="done" data-k="${esc(k)}"><span class="box${on ? " on" : ""}">${on ? "✓" : ""}</span>${esc(l)}</button>`;
      }).join("")}
    </div>`;
}

function renderPanel() {
  const panel = document.getElementById("panel");
  if (tab === "horario") panel.innerHTML = renderHorario();
  else if (tab === "malla") panel.innerHTML = renderMalla();
  else if (tab === "eval") panel.innerHTML = renderEval();
  else panel.innerHTML = renderCursos();
}

function updateEvalLive(k) {
  const n = num(s.ev[k]);
  const el = document.querySelector(`[data-circle="${CSS.escape(k)}"]`);
  if (el) {
    el.textContent = fmt(n);
    el.className = "circle " + circleClass(n);
  }
  const nt = notas(evRamo);
  const pres = document.getElementById("nota-pres");
  const fin = document.getElementById("nota-fin");
  if (pres) pres.textContent = fmt(nt.pres);
  if (fin) {
    fin.textContent = fmt(nt.fin);
    fin.className = "val " + (nt.fin === null ? "" : nt.fin >= 4 ? "pass" : "fail");
  }
  renderCards();
}

function render() {
  const ver = document.getElementById("hdr-ver");
  if (ver) ver.textContent = APP_VERSION;
  renderCards();
  renderTabs();
  renderPanel();
}

document.addEventListener("click", ev => {
  const t = ev.target.closest("[data-act]");
  if (!t) return;
  const act = t.getAttribute("data-act");
  if (act === "tab") { tab = t.getAttribute("data-v"); render(); }
  else if (act === "prev") { day = addDays(day, -1); render(); }
  else if (act === "next") { day = addDays(day, 1); render(); }
  else if (act === "hoy") { day = todayClamped(); render(); }
  else if (act === "att") { const k = t.getAttribute("data-k"); s.att[k] = !s.att[k]; persist(); render(); }
  else if (act === "done") { const k = t.getAttribute("data-k"); s.done[k] = !s.done[k]; persist(); render(); }
  else if (act === "ok") { const k = t.getAttribute("data-k"); s.ok[k] = !s.ok[k]; persist(); render(); }
  else if (act === "ev-ramo") { evRamo = t.getAttribute("data-v"); render(); }
  else if (act === "curso") { curso = t.getAttribute("data-v"); render(); }
  else if (act === "open-ramo") { openRamo(t.getAttribute("data-id")); }
});

document.addEventListener("input", ev => {
  const t = ev.target;
  if (!t || t.getAttribute("data-act") !== "ev") return;
  const k = t.getAttribute("data-k");
  s.ev[k] = t.value;
  persist();
  updateEvalLive(k);
});

render();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  if (navigator.serviceWorker.controller) {
    let reloading = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloading) return;
      reloading = true;
      location.reload();
    });
  }
  const bootSW = () => {
    navigator.serviceWorker.register("./sw.js?v=" + APP_VERSION, { updateViaCache: "none" })
      .then(reg => { try { reg.update(); } catch (err) {} })
      .catch(() => {});
  };
  if (document.readyState === "complete") bootSW();
  else window.addEventListener("load", bootSW);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;
  if (navigator.serviceWorker) {
    navigator.serviceWorker.getRegistration().then(r => r && r.update()).catch(() => {});
  }
});
