/* ============================================================
   ChemNamer — script.js
   118 elementos, nomenclatura Stock / Sistemática / Tradicional
   ============================================================ */

const elementos = {
  H:  { nombre:"Hidrógeno",    numero:1,   masa:"1.008",    grupo:"no-metal",     periodo:1, col:1,  estados:[1,-1] },
  He: { nombre:"Helio",        numero:2,   masa:"4.003",    grupo:"noble",        periodo:1, col:18, estados:[] },
  Li: { nombre:"Litio",        numero:3,   masa:"6.941",    grupo:"alcalino",     periodo:2, col:1,  estados:[1] },
  Be: { nombre:"Berilio",      numero:4,   masa:"9.012",    grupo:"alcalinotérreo",periodo:2,col:2,  estados:[2] },
  B:  { nombre:"Boro",         numero:5,   masa:"10.81",    grupo:"metaloide",    periodo:2, col:13, estados:[3] },
  C:  { nombre:"Carbono",      numero:6,   masa:"12.011",   grupo:"no-metal",     periodo:2, col:14, estados:[2,4] },
  N:  { nombre:"Nitrógeno",    numero:7,   masa:"14.007",   grupo:"no-metal",     periodo:2, col:15, estados:[1,2,3,4,5] },
  O:  { nombre:"Oxígeno",      numero:8,   masa:"15.999",   grupo:"no-metal",     periodo:2, col:16, estados:[] },
  F:  { nombre:"Flúor",        numero:9,   masa:"18.998",   grupo:"halógeno",     periodo:2, col:17, estados:[1] },
  Ne: { nombre:"Neón",         numero:10,  masa:"20.180",   grupo:"noble",        periodo:2, col:18, estados:[] },
  Na: { nombre:"Sodio",        numero:11,  masa:"22.990",   grupo:"alcalino",     periodo:3, col:1,  estados:[1] },
  Mg: { nombre:"Magnesio",     numero:12,  masa:"24.305",   grupo:"alcalinotérreo",periodo:3,col:2,  estados:[2] },
  Al: { nombre:"Aluminio",     numero:13,  masa:"26.982",   grupo:"metal",        periodo:3, col:13, estados:[3] },
  Si: { nombre:"Silicio",      numero:14,  masa:"28.085",   grupo:"metaloide",    periodo:3, col:14, estados:[4] },
  P:  { nombre:"Fósforo",      numero:15,  masa:"30.974",   grupo:"no-metal",     periodo:3, col:15, estados:[3,5] },
  S:  { nombre:"Azufre",       numero:16,  masa:"32.06",    grupo:"no-metal",     periodo:3, col:16, estados:[2,4,6] },
  Cl: { nombre:"Cloro",        numero:17,  masa:"35.45",    grupo:"halógeno",     periodo:3, col:17, estados:[1,3,5,7] },
  Ar: { nombre:"Argón",        numero:18,  masa:"39.948",   grupo:"noble",        periodo:3, col:18, estados:[] },
  K:  { nombre:"Potasio",      numero:19,  masa:"39.098",   grupo:"alcalino",     periodo:4, col:1,  estados:[1] },
  Ca: { nombre:"Calcio",       numero:20,  masa:"40.078",   grupo:"alcalinotérreo",periodo:4,col:2,  estados:[2] },
  Sc: { nombre:"Escandio",     numero:21,  masa:"44.956",   grupo:"transicion",   periodo:4, col:3,  estados:[3] },
  Ti: { nombre:"Titanio",      numero:22,  masa:"47.867",   grupo:"transicion",   periodo:4, col:4,  estados:[2,3,4] },
  V:  { nombre:"Vanadio",      numero:23,  masa:"50.942",   grupo:"transicion",   periodo:4, col:5,  estados:[2,3,4,5] },
  Cr: { nombre:"Cromo",        numero:24,  masa:"51.996",   grupo:"transicion",   periodo:4, col:6,  estados:[2,3,6] },
  Mn: { nombre:"Manganeso",    numero:25,  masa:"54.938",   grupo:"transicion",   periodo:4, col:7,  estados:[2,3,4,6,7] },
  Fe: { nombre:"Hierro",       numero:26,  masa:"55.845",   grupo:"transicion",   periodo:4, col:8,  estados:[2,3] },
  Co: { nombre:"Cobalto",      numero:27,  masa:"58.933",   grupo:"transicion",   periodo:4, col:9,  estados:[2,3] },
  Ni: { nombre:"Níquel",       numero:28,  masa:"58.693",   grupo:"transicion",   periodo:4, col:10, estados:[2,3] },
  Cu: { nombre:"Cobre",        numero:29,  masa:"63.546",   grupo:"transicion",   periodo:4, col:11, estados:[1,2] },
  Zn: { nombre:"Zinc",         numero:30,  masa:"65.38",    grupo:"transicion",   periodo:4, col:12, estados:[2] },
  Ga: { nombre:"Galio",        numero:31,  masa:"69.723",   grupo:"metal",        periodo:4, col:13, estados:[3] },
  Ge: { nombre:"Germanio",     numero:32,  masa:"72.630",   grupo:"metaloide",    periodo:4, col:14, estados:[2,4] },
  As: { nombre:"Arsénico",     numero:33,  masa:"74.922",   grupo:"metaloide",    periodo:4, col:15, estados:[3,5] },
  Se: { nombre:"Selenio",      numero:34,  masa:"78.971",   grupo:"no-metal",     periodo:4, col:16, estados:[2,4,6] },
  Br: { nombre:"Bromo",        numero:35,  masa:"79.904",   grupo:"halógeno",     periodo:4, col:17, estados:[1,3,5,7] },
  Kr: { nombre:"Kriptón",      numero:36,  masa:"83.798",   grupo:"noble",        periodo:4, col:18, estados:[] },
  Rb: { nombre:"Rubidio",      numero:37,  masa:"85.468",   grupo:"alcalino",     periodo:5, col:1,  estados:[1] },
  Sr: { nombre:"Estroncio",    numero:38,  masa:"87.62",    grupo:"alcalinotérreo",periodo:5,col:2,  estados:[2] },
  Y:  { nombre:"Itrio",        numero:39,  masa:"88.906",   grupo:"transicion",   periodo:5, col:3,  estados:[3] },
  Zr: { nombre:"Circonio",     numero:40,  masa:"91.224",   grupo:"transicion",   periodo:5, col:4,  estados:[4] },
  Nb: { nombre:"Niobio",       numero:41,  masa:"92.906",   grupo:"transicion",   periodo:5, col:5,  estados:[3,5] },
  Mo: { nombre:"Molibdeno",    numero:42,  masa:"95.95",    grupo:"transicion",   periodo:5, col:6,  estados:[3,4,6] },
  Tc: { nombre:"Tecnecio",     numero:43,  masa:"(97)",     grupo:"transicion",   periodo:5, col:7,  estados:[4,7] },
  Ru: { nombre:"Rutenio",      numero:44,  masa:"101.07",   grupo:"transicion",   periodo:5, col:8,  estados:[3,4] },
  Rh: { nombre:"Rodio",        numero:45,  masa:"102.91",   grupo:"transicion",   periodo:5, col:9,  estados:[3] },
  Pd: { nombre:"Paladio",      numero:46,  masa:"106.42",   grupo:"transicion",   periodo:5, col:10, estados:[2,4] },
  Ag: { nombre:"Plata",        numero:47,  masa:"107.87",   grupo:"transicion",   periodo:5, col:11, estados:[1] },
  Cd: { nombre:"Cadmio",       numero:48,  masa:"112.41",   grupo:"transicion",   periodo:5, col:12, estados:[2] },
  In: { nombre:"Indio",        numero:49,  masa:"114.82",   grupo:"metal",        periodo:5, col:13, estados:[3] },
  Sn: { nombre:"Estaño",       numero:50,  masa:"118.71",   grupo:"metal",        periodo:5, col:14, estados:[2,4] },
  Sb: { nombre:"Antimonio",    numero:51,  masa:"121.76",   grupo:"metaloide",    periodo:5, col:15, estados:[3,5] },
  Te: { nombre:"Teluro",       numero:52,  masa:"127.60",   grupo:"metaloide",    periodo:5, col:16, estados:[2,4,6] },
  I:  { nombre:"Yodo",         numero:53,  masa:"126.90",   grupo:"halógeno",     periodo:5, col:17, estados:[1,3,5,7] },
  Xe: { nombre:"Xenón",        numero:54,  masa:"131.29",   grupo:"noble",        periodo:5, col:18, estados:[] },
  Cs: { nombre:"Cesio",        numero:55,  masa:"132.91",   grupo:"alcalino",     periodo:6, col:1,  estados:[1] },
  Ba: { nombre:"Bario",        numero:56,  masa:"137.33",   grupo:"alcalinotérreo",periodo:6,col:2,  estados:[2] },
  La: { nombre:"Lantano",      numero:57,  masa:"138.91",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Ce: { nombre:"Cerio",        numero:58,  masa:"140.12",   grupo:"lantanido",    periodo:6, col:3,  estados:[3,4] },
  Pr: { nombre:"Praseodimio",  numero:59,  masa:"140.91",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Nd: { nombre:"Neodimio",     numero:60,  masa:"144.24",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Pm: { nombre:"Prometio",     numero:61,  masa:"(145)",    grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Sm: { nombre:"Samario",      numero:62,  masa:"150.36",   grupo:"lantanido",    periodo:6, col:3,  estados:[2,3] },
  Eu: { nombre:"Europio",      numero:63,  masa:"151.96",   grupo:"lantanido",    periodo:6, col:3,  estados:[2,3] },
  Gd: { nombre:"Gadolinio",    numero:64,  masa:"157.25",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Tb: { nombre:"Terbio",       numero:65,  masa:"158.93",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Dy: { nombre:"Disprosio",    numero:66,  masa:"162.50",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Ho: { nombre:"Holmio",       numero:67,  masa:"164.93",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Er: { nombre:"Erbio",        numero:68,  masa:"167.26",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Tm: { nombre:"Tulio",        numero:69,  masa:"168.93",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Yb: { nombre:"Iterbio",      numero:70,  masa:"173.05",   grupo:"lantanido",    periodo:6, col:3,  estados:[2,3] },
  Lu: { nombre:"Lutecio",      numero:71,  masa:"174.97",   grupo:"lantanido",    periodo:6, col:3,  estados:[3] },
  Hf: { nombre:"Hafnio",       numero:72,  masa:"178.49",   grupo:"transicion",   periodo:6, col:4,  estados:[4] },
  Ta: { nombre:"Tántalo",      numero:73,  masa:"180.95",   grupo:"transicion",   periodo:6, col:5,  estados:[5] },
  W:  { nombre:"Wolframio",    numero:74,  masa:"183.84",   grupo:"transicion",   periodo:6, col:6,  estados:[4,6] },
  Re: { nombre:"Renio",        numero:75,  masa:"186.21",   grupo:"transicion",   periodo:6, col:7,  estados:[4,6,7] },
  Os: { nombre:"Osmio",        numero:76,  masa:"190.23",   grupo:"transicion",   periodo:6, col:8,  estados:[3,4] },
  Ir: { nombre:"Iridio",       numero:77,  masa:"192.22",   grupo:"transicion",   periodo:6, col:9,  estados:[3,4] },
  Pt: { nombre:"Platino",      numero:78,  masa:"195.08",   grupo:"transicion",   periodo:6, col:10, estados:[2,4] },
  Au: { nombre:"Oro",          numero:79,  masa:"196.97",   grupo:"transicion",   periodo:6, col:11, estados:[1,3] },
  Hg: { nombre:"Mercurio",     numero:80,  masa:"200.59",   grupo:"transicion",   periodo:6, col:12, estados:[1,2] },
  Tl: { nombre:"Talio",        numero:81,  masa:"204.38",   grupo:"metal",        periodo:6, col:13, estados:[1,3] },
  Pb: { nombre:"Plomo",        numero:82,  masa:"207.2",    grupo:"metal",        periodo:6, col:14, estados:[2,4] },
  Bi: { nombre:"Bismuto",      numero:83,  masa:"208.98",   grupo:"metal",        periodo:6, col:15, estados:[3,5] },
  Po: { nombre:"Polonio",      numero:84,  masa:"(209)",    grupo:"metaloide",    periodo:6, col:16, estados:[2,4] },
  At: { nombre:"Astato",       numero:85,  masa:"(210)",    grupo:"halógeno",     periodo:6, col:17, estados:[1] },
  Rn: { nombre:"Radón",        numero:86,  masa:"(222)",    grupo:"noble",        periodo:6, col:18, estados:[] },
  Fr: { nombre:"Francio",      numero:87,  masa:"(223)",    grupo:"alcalino",     periodo:7, col:1,  estados:[1] },
  Ra: { nombre:"Radio",        numero:88,  masa:"(226)",    grupo:"alcalinotérreo",periodo:7,col:2,  estados:[2] },
  Ac: { nombre:"Actinio",      numero:89,  masa:"(227)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Th: { nombre:"Torio",        numero:90,  masa:"232.04",   grupo:"actinido",     periodo:7, col:3,  estados:[4] },
  Pa: { nombre:"Protactinio",  numero:91,  masa:"231.04",   grupo:"actinido",     periodo:7, col:3,  estados:[5] },
  U:  { nombre:"Uranio",       numero:92,  masa:"238.03",   grupo:"actinido",     periodo:7, col:3,  estados:[3,4,6] },
  Np: { nombre:"Neptunio",     numero:93,  masa:"(237)",    grupo:"actinido",     periodo:7, col:3,  estados:[3,4,5] },
  Pu: { nombre:"Plutonio",     numero:94,  masa:"(244)",    grupo:"actinido",     periodo:7, col:3,  estados:[3,4] },
  Am: { nombre:"Americio",     numero:95,  masa:"(243)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Cm: { nombre:"Curio",        numero:96,  masa:"(247)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Bk: { nombre:"Berkelio",     numero:97,  masa:"(247)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Cf: { nombre:"Californio",   numero:98,  masa:"(251)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Es: { nombre:"Einstenio",    numero:99,  masa:"(252)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Fm: { nombre:"Fermio",       numero:100, masa:"(257)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Md: { nombre:"Mendelevio",   numero:101, masa:"(258)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  No: { nombre:"Nobelio",      numero:102, masa:"(259)",    grupo:"actinido",     periodo:7, col:3,  estados:[2] },
  Lr: { nombre:"Laurencio",    numero:103, masa:"(262)",    grupo:"actinido",     periodo:7, col:3,  estados:[3] },
  Rf: { nombre:"Rutherfordio", numero:104, masa:"(267)",    grupo:"transicion",   periodo:7, col:4,  estados:[4] },
  Db: { nombre:"Dubnio",       numero:105, masa:"(268)",    grupo:"transicion",   periodo:7, col:5,  estados:[5] },
  Sg: { nombre:"Seaborgio",    numero:106, masa:"(271)",    grupo:"transicion",   periodo:7, col:6,  estados:[6] },
  Bh: { nombre:"Bohrio",       numero:107, masa:"(272)",    grupo:"transicion",   periodo:7, col:7,  estados:[7] },
  Hs: { nombre:"Hasio",        numero:108, masa:"(270)",    grupo:"transicion",   periodo:7, col:8,  estados:[4] },
  Mt: { nombre:"Meitnerio",    numero:109, masa:"(276)",    grupo:"transicion",   periodo:7, col:9,  estados:[] },
  Ds: { nombre:"Darmstadtio",  numero:110, masa:"(281)",    grupo:"transicion",   periodo:7, col:10, estados:[] },
  Rg: { nombre:"Roentgenio",   numero:111, masa:"(280)",    grupo:"transicion",   periodo:7, col:11, estados:[] },
  Cn: { nombre:"Copernicio",   numero:112, masa:"(285)",    grupo:"transicion",   periodo:7, col:12, estados:[] },
  Nh: { nombre:"Nihonio",      numero:113, masa:"(284)",    grupo:"metal",        periodo:7, col:13, estados:[] },
  Fl: { nombre:"Flerovio",     numero:114, masa:"(289)",    grupo:"metal",        periodo:7, col:14, estados:[] },
  Mc: { nombre:"Moscovio",     numero:115, masa:"(288)",    grupo:"metal",        periodo:7, col:15, estados:[] },
  Lv: { nombre:"Livermorio",   numero:116, masa:"(293)",    grupo:"metal",        periodo:7, col:16, estados:[] },
  Ts: { nombre:"Teneso",       numero:117, masa:"(294)",    grupo:"halógeno",     periodo:7, col:17, estados:[] },
  Og: { nombre:"Oganesón",     numero:118, masa:"(294)",    grupo:"noble",        periodo:7, col:18, estados:[] }
};

/* ---- Nomenclatura Tradicional --------------------------------
   Reglas: solo 2 estados de oxidación → oso/ico
           3 estados → oso/ico  (los más comunes bajos/altos)
           sufijos radicales en latín para elementos clásicos
   --------------------------------------------------------------- */
const tradicionales = {
  Fe: { 2:"Óxido ferroso",      3:"Óxido férrico" },
  Cu: { 1:"Óxido cuproso",      2:"Óxido cúprico" },
  Au: { 1:"Óxido auroso",       3:"Óxido áurico" },
  Sn: { 2:"Óxido estañoso",     4:"Óxido estánico" },
  Pb: { 2:"Óxido plumboso",     4:"Óxido plúmbico" },
  Hg: { 1:"Óxido mercurioso",   2:"Óxido mercúrico" },
  Co: { 2:"Óxido cobaltoso",    3:"Óxido cobáltico" },
  Ni: { 2:"Óxido niqueloso",    3:"Óxido niquélico" },
  Cr: { 2:"Óxido cromoso",      3:"Óxido crómico",  6:"Óxido crómico (VI)" },
  Mn: { 2:"Óxido manganoso",    3:"Óxido mangánico", 4:"Óxido manganésico", 7:"Óxido permangánico" },
  Ti: { 2:"Óxido titanoso",     3:"Óxido titánico",  4:"Óxido titánico (IV)" },
  Tl: { 1:"Óxido talioso",      3:"Óxido tálico" },
  V:  { 2:"Óxido vanadioso",    3:"Óxido vanádico",  4:"Óxido vanádico (IV)", 5:"Óxido vanádico (V)" },
  Pt: { 2:"Óxido platinoso",    4:"Óxido platínico" },
  Pd: { 2:"Óxido paladioso",    4:"Óxido paládico" },
  Bi: { 3:"Óxido bismutoso",    5:"Óxido bismútico" },
  Sb: { 3:"Óxido antimonioso",  5:"Óxido antimónico" },
  As: { 3:"Óxido arsenioso",    5:"Óxido arsénico" },
  Mo: { 3:"Óxido molibdenoso",  4:"Óxido molibdénico", 6:"Óxido molibdénico (VI)" },
  W:  { 4:"Óxido wolframioso",  6:"Óxido wolfrámico" },
  Ag: { 1:"Óxido argéntico" },
  Zn: { 2:"Óxido zíncico" },
  Cd: { 2:"Óxido cadmioso" }
};

const prefijos = { 1:"mono",2:"di",3:"tri",4:"tetra",5:"penta",6:"hexa",7:"hepta",8:"octa",9:"nona",10:"deca" };

function mcd(a,b){ return b ? mcd(b,a%b) : a; }

function subindice(n){
  const m={"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉"};
  return n.toString().split("").map(c=>m[c]).join("");
}

function generarOxido(sim, estado){
  // estado positivo del metal con oxígeno -2
  // CrossMult: X·estado = Y·2 → reduce por MCD
  const d = mcd(Math.abs(estado), 2);
  const subEl  = 2 / d;
  const subOx  = Math.abs(estado) / d;
  let formula  = sim;
  if(subEl > 1)  formula += subindice(subEl);
  formula += "O";
  if(subOx > 1)  formula += subindice(subOx);
  return { formula, subEl, subOx };
}

function nomStock(nombre, estado){
  return `Óxido de ${nombre.toLowerCase()} (${estado})`;
}

function nomSistematica(nombre, subEl, subOx){
  const pOx  = prefijos[subOx] + "óxido";
  const pEl  = subEl > 1 ? prefijos[subEl] + nombre.toLowerCase() : nombre.toLowerCase();
  return `${pOx} de ${pEl}`;
}

/* ================================================================
   CONSTRUCCIÓN DE LA TABLA
   ================================================================ */
const TABLA = document.getElementById("tablaPeriodica");

/* Orden fijo de la tabla periódica estándar 18 columnas × 7 periodos */
const layoutTabla = [
  /* P1 */ ["H","","","","","","","","","","","","","","","","","He"],
  /* P2 */ ["Li","Be","","","","","","","","","","","B","C","N","O","F","Ne"],
  /* P3 */ ["Na","Mg","","","","","","","","","","","Al","Si","P","S","Cl","Ar"],
  /* P4 */ ["K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr"],
  /* P5 */ ["Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe"],
  /* P6 */ ["Cs","Ba","*","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn"],
  /* P7 */ ["Fr","Ra","**","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]
];

const lantanidos = ["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
const actinidos  = ["Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"];

function crearBoton(sim){
  const el = elementos[sim];
  const btn = document.createElement("button");
  btn.className = `elemento grupo-${el.grupo}`;
  btn.dataset.simbolo = sim;
  btn.innerHTML = `
    <span class="num">${el.numero}</span>
    <span class="sim">${sim}</span>
    <span class="masa-small">${el.masa}</span>`;
  return btn;
}

function crearEspacio(label=""){
  const d = document.createElement("div");
  d.className = "espacio";
  if(label){ d.textContent = label; d.classList.add("espacio-ref"); }
  return d;
}

// Periodos 1–7
layoutTabla.forEach(fila => {
  fila.forEach(sim => {
    if(sim === "") TABLA.appendChild(crearEspacio());
    else if(sim === "*") TABLA.appendChild(crearEspacio("57–71"));
    else if(sim === "**") TABLA.appendChild(crearEspacio("89–103"));
    else TABLA.appendChild(crearBoton(sim));
  });
});

// Fila vacía separadora
for(let i=0;i<18;i++) TABLA.appendChild(crearEspacio());

// Lantánidos label
const lblLan = document.createElement("div");
lblLan.className="serie-label"; lblLan.textContent="Lantánidos";
TABLA.appendChild(lblLan);
for(let i=0;i<17;i++) TABLA.appendChild(crearEspacio());

// Fila lantánidos (col 2 → 16 de las 18, las primeras 2 son vacías etiqueta)
TABLA.appendChild(crearEspacio());
TABLA.appendChild(crearEspacio());
lantanidos.forEach(sim => TABLA.appendChild(crearBoton(sim)));
TABLA.appendChild(crearEspacio());

// Actínidos label
const lblAct = document.createElement("div");
lblAct.className="serie-label"; lblAct.textContent="Actínidos";
TABLA.appendChild(lblAct);
for(let i=0;i<17;i++) TABLA.appendChild(crearEspacio());

TABLA.appendChild(crearEspacio());
TABLA.appendChild(crearEspacio());
actinidos.forEach(sim => TABLA.appendChild(crearBoton(sim)));
TABLA.appendChild(crearEspacio());

/* ================================================================
   EVENTOS
   ================================================================ */
document.querySelectorAll(".elemento").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".elemento").forEach(e=>e.classList.remove("activo"));
    btn.classList.add("activo");

    const sim = btn.dataset.simbolo;
    const el  = elementos[sim];

    // Panel info
    document.getElementById("infoElemento").innerHTML = `
      <div class="info-grid">
        <div class="info-chip">
          <span class="info-label">Nombre</span>
          <span class="info-valor">${el.nombre}</span>
        </div>
        <div class="info-chip">
          <span class="info-label">Símbolo</span>
          <span class="info-valor sim-grande">${sim}</span>
        </div>
        <div class="info-chip">
          <span class="info-label">N.º Atómico</span>
          <span class="info-valor">${el.numero}</span>
        </div>
        <div class="info-chip">
          <span class="info-label">Masa Atómica</span>
          <span class="info-valor">${el.masa}</span>
        </div>
        <div class="info-chip">
          <span class="info-label">Grupo</span>
          <span class="info-valor grupo-badge grupo-${el.grupo}">${el.grupo}</span>
        </div>
        <div class="info-chip">
          <span class="info-label">Estados de oxidación</span>
          <span class="info-valor">${el.estados.length ? el.estados.map(e=>`+${e}`).join(", ") : "—"}</span>
        </div>
      </div>`;

    // Panel óxidos
    let html = "";

    const estadosPositivos = el.estados.filter(e=>e>0);

    if(estadosPositivos.length === 0){
      html = `<div class="sin-oxido">
        <span class="mol-icon">⚗</span>
        <p>${el.nombre} no forma óxidos comunes.</p>
      </div>`;
    } else {
      estadosPositivos.forEach((estado, idx) => {
        const ox = generarOxido(sim, estado);
        const trad = tradicionales[sim]?.[estado];

        html += `
          <div class="tarjeta-oxido" style="--delay:${idx*80}ms">
            <div class="tarjeta-header">
              <span class="estado-badge">+${estado}</span>
              <div class="formula">${ox.formula}</div>
            </div>
            <div class="nomenclaturas">
              <div class="nom-fila">
                <span class="nom-tipo stock-tipo">Stock</span>
                <span class="nom-texto">${nomStock(el.nombre, estado)}</span>
              </div>
              <div class="nom-fila">
                <span class="nom-tipo sist-tipo">Sistemática</span>
                <span class="nom-texto">${nomSistematica(el.nombre, ox.subEl, ox.subOx)}</span>
              </div>
              <div class="nom-fila">
                <span class="nom-tipo trad-tipo">Tradicional</span>
                <span class="nom-texto">${trad || '<em>No disponible</em>'}</span>
              </div>
            </div>
            <div class="explicacion">
              <span>O = −2</span>
              <span>${sim} = +${estado}</span>
              <span>Fórmula: ${ox.formula}</span>
            </div>
          </div>`;
      });
    }

    document.getElementById("resultadoOxidos").innerHTML = html;

    // Scroll suave al panel en móvil
    document.querySelector(".panel-info").scrollIntoView({behavior:"smooth", block:"nearest"});
  });
});

/* Filtro por grupo */
document.getElementById("filtroGrupo").addEventListener("change", function(){
  const val = this.value;
  document.querySelectorAll(".elemento").forEach(btn => {
    if(val === "todos") { btn.style.opacity="1"; btn.style.pointerEvents=""; }
    else {
      const g = elementos[btn.dataset.simbolo].grupo;
      btn.style.opacity  = g===val ? "1" : "0.15";
      btn.style.pointerEvents = g===val ? "" : "none";
    }
  });
});

/* Búsqueda */
document.getElementById("busqueda").addEventListener("input", function(){
  const q = this.value.trim().toLowerCase();
  document.querySelectorAll(".elemento").forEach(btn => {
    const sim = btn.dataset.simbolo;
    const el  = elementos[sim];
    const match = !q
      || sim.toLowerCase().includes(q)
      || el.nombre.toLowerCase().includes(q)
      || el.numero.toString().includes(q);
    btn.style.opacity = match ? "1" : "0.1";
    btn.style.pointerEvents = match ? "" : "none";
  });
});
