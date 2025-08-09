// --- CONFIG / DATA ---
// 12 przepisów z czasem, trudnością i szczegółami
const RECIPES = [
  {
    id: "caprese",
    title: "Sałatka caprese",
    category: "Przekąski",
    time: 10, difficulty: "łatwy",
    tags: ["mozzarella", "pomidor", "bazylia"],
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
    desc: "Klasyczna włoska przystawka z dojrzałych pomidorów, mozzarelli i świeżej bazylii. Gotowa w 10 minut!",
    ingredients: ["2 pomidory", "1 kulka mozzarelli", "kilka listków bazylii", "oliwa, sól, pieprz"],
    steps: ["Pomidory i mozzarellę pokrój w plastry.", "Ułóż naprzemiennie na talerzu z bazylią.", "Skrop oliwą, dopraw solą i pieprzem."],
    tips: "Użyj dojrzałych pomidorów malinowych i dobrej oliwy extra virgin."
  },
  {
    id: "krem-z-dyni",
    title: "Krem z dyni",
    category: "Zupy",
    time: 35, difficulty: "łatwy",
    tags: ["dynia", "imbir", "bulion"],
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop",
    desc: "Aksamitna, rozgrzewająca zupa z nutą imbiru. Idealna na chłodne dni.",
    ingredients: ["800 g dyni", "1 cebula", "2 cm imbiru", "1 l bulionu", "śmietanka 30% (opcjonalnie)"],
    steps: ["Podsmaż cebulę i imbir.", "Dodaj dynię w kostce, zalej bulionem i gotuj 20 min.", "Zblenduj, dopraw i dodaj śmietankę."],
    tips: "Podawaj z pestkami dyni i odrobiną oliwy chili."
  },
  {
    id: "makaron-pesto",
    title: "Makaron z pesto",
    category: "Dania główne",
    time: 15, difficulty: "łatwy",
    tags: ["pesto", "parmezan", "makaron"],
    img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop",
    desc: "Szybki obiad w 15 minut — makaron z domowym pesto bazyliowym i parmezanem.",
    ingredients: ["200 g makaronu", "2 łyżki pesto", "30 g parmezanu", "oliwa, sól, pieprz"],
    steps: ["Ugotuj makaron al dente.", "Wymieszaj z pesto i odrobiną wody z makaronu.", "Podaj z parmezanem."],
    tips: "Dodaj garść rukoli dla świeżości."
  },
  {
    id: "brownie",
    title: "Brownie czekoladowe",
    category: "Desery",
    time: 40, difficulty: "średni",
    tags: ["czekolada", "kakao", "masło"],
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?q=80&w=1600&auto=format&fit=crop",
    desc: "Wilgotne, intensywnie czekoladowe brownie z chrupiącą skórką.",
    ingredients: ["200 g gorzkiej czekolady", "120 g masła", "150 g cukru", "3 jajka", "80 g mąki"],
    steps: ["Rozpuść czekoladę z masłem.", "Wymieszaj z cukrem, jajkami i mąką.", "Piecz 20–25 min w 180°C."],
    tips: "Nie przepiecz! W środku powinno pozostać wilgotne."
  },
  {
    id: "tacos",
    title: "Tacos z kurczakiem",
    category: "Dania główne",
    time: 25, difficulty: "łatwy",
    tags: ["kurczak", "tortilla", "awokado"],
    img: "https://images.unsplash.com/photo-1601050690597-9fd75f3108c2?q=80&w=1600&auto=format&fit=crop",
    desc: "Kolorowe tacosy z soczystym kurczakiem, świeżą salsą i kremowym guacamole.",
    ingredients: ["2 piersi z kurczaka", "tortille", "pomidor, cebula, kolendra", "awokado, limonka"],
    steps: ["Usmaż doprawionego kurczaka i pokrój.", "Przygotuj salsę i guacamole.", "Złóż tacosy i podaj."],
    tips: "Dodaj marynatę z limonki i kuminu dla charakteru."
  },
  {
    id: "owsianka",
    title: "Owsianka z owocami",
    category: "Przekąski",
    time: 8, difficulty: "łatwy",
    tags: ["płatki owsiane", "banan", "jagody"],
    img: "https://images.unsplash.com/photo-1505575972945-280b9f50d1f4?q=80&w=1600&auto=format&fit=crop",
    desc: "Szybkie i pożywne śniadanie z sezonowymi owocami i orzechami.",
    ingredients: ["60 g płatków owsianych", "250 ml mleka lub napoju roślinnego", "owoce, orzechy, miód"],
    steps: ["Zagotuj płatki w mleku 3–5 min.", "Dodaj owoce i dodatki.", "Dosłódź miodem wedle uznania."],
    tips: "Nocna owsianka skróci czas rano do zera."
  },
  {
    id: "ramen",
    title: "Ramen miso",
    category: "Zupy",
    time: 45, difficulty: "średni",
    tags: ["miso", "makaron", "bulion"],
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    desc: "Aromatyczny bulion miso z makaronem, jajkiem i warzywami — rozgrzewa i syci.",
    ingredients: ["1 l bulionu", "2 łyżki pasty miso", "makaron ramen", "warzywa, jajko"],
    steps: ["Podgrzej bulion, rozpuść miso.", "Ugotuj makaron osobno.", "Podaj z dodatkami i jajkiem 6–7 min."],
    tips: "Nie gotuj miso — traci aromat."
  },
  {
    id: "tiramisù",
    title: "Tiramisù",
    category: "Desery",
    time: 30, difficulty: "średni",
    tags: ["kawa", "mascarpone", "biszkopty"],
    img: "https://images.unsplash.com/photo-1607920591413-4ec007e70097?q=80&w=1600&auto=format&fit=crop",
    desc: "Klasyczny włoski deser o smaku kawy i kakao — bez pieczenia.",
    ingredients: ["250 g mascarpone", "200 ml śmietanki", "biszkopty", "mocna kawa, kakao"],
    steps: ["Ubij śmietankę i połącz z mascarpone.", "Namocz biszkopty w kawie.", "Układaj warstwy, oprósz kakao."],
    tips: "Schłódź min. 3 godz. dla najlepszego efektu."
  },
  {
    id: "zapiekanka",
    title: "Zapiekanka ziemniaczana",
    category: "Dania główne",
    time: 55, difficulty: "łatwy",
    tags: ["ziemniaki", "ser", "śmietana"],
    img: "https://images.unsplash.com/photo-1612872087720-bb87605b2a12?q=80&w=1600&auto=format&fit=crop",
    desc: "Kremowa zapiekanka z ziemniaków i sera, złocista z wierzchu i miękka w środku.",
    ingredients: ["1 kg ziemniaków", "200 ml śmietany 30%", "200 g sera", "czosnek, gałka muszkatołowa"],
    steps: ["Pokrój ziemniaki w cienkie plastry.", "Układaj warstwami, zalej śmietaną i posyp serem.", "Piecz ok. 40 min w 190°C."],
    tips: "Dopraw gałką — świetnie podbija smak ziemniaków."
  },
  {
    id: "krem-truskawkowy",
    title: "Krem truskawkowy",
    category: "Desery",
    time: 15, difficulty: "łatwy",
    tags: ["truskawki", "śmietanka", "wanilia"],
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1600&auto=format&fit=crop",
    desc: "Lekki deser z truskawek i wanilii — idealny na lato.",
    ingredients: ["300 g truskawek", "200 ml śmietanki", "cukier, wanilia"],
    steps: ["Zblenduj truskawki.", "Ubij śmietankę z cukrem i wanilią.", "Połącz delikatnie i schłódź."],
    tips: "Dla lżejszej wersji użyj jogurtu greckiego."
  },
  {
    id: "shakshuka",
    title: "Szakszuka",
    category: "Dania główne",
    time: 20, difficulty: "łatwy",
    tags: ["jajka", "papryka", "kumin"],
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1600&auto=format&fit=crop",
    desc: "Jajka duszone w pikantnym sosie pomidorowym z papryką i przyprawami — śniadanie mistrzów.",
    ingredients: ["1 cebula", "1 papryka", "400 g pomidorów krojonych", "4 jajka", "przyprawy"],
    steps: ["Podsmaż cebulę i paprykę.", "Dodaj pomidory i przyprawy, duś 10 min.", "Wbij jajka i ścięgnij białka."],
    tips: "Podawaj z pitą lub świeżym pieczywem."
  },
  {
    id: "broccoli-cream",
    title: "Krem z brokułów",
    category: "Zupy",
    time: 25, difficulty: "łatwy",
    tags: ["brokuły", "czosnek", "bulion"],
    img: "https://images.unsplash.com/photo-1558030006-450675f05f80?q=80&w=1600&auto=format&fit=crop",
    desc: "Delikatna, zielona zupa-krem z brokułów i czosnku, podawana z grzankami.",
    ingredients: ["1 brokuł", "1 ząbek czosnku", "700 ml bulionu", "śmietanka (opcjonalnie)"],
    steps: ["Podziel brokuł na różyczki i gotuj w bulionie 10 min.", "Dodaj czosnek i zblenduj.", "Dopraw, ew. dodaj śmietankę."],
    tips: "Dobre też z serem pleśniowym na wierzchu."
  }
,
  {
  id: "tiramisu-klasyczne",
  title: "Tiramisu klasyczne",
  category: "Desery",
  time: 35,
  difficulty: "średni",
  tags: [
    "espresso",
    "mascarpone",
    "biszkopty"
  ],
  img: "https://images.unsplash.com/photo-1604909052743-184a7e3101b2?q=80&w=1600&auto=format&fit=crop",
  desc: "Włoski deser na bazie biszkoptów nasączonych espresso i kremu z mascarpone.",
  ingredients: [
    "250 g mascarpone",
    "3 jajka",
    "3 łyżki cukru",
    "200 ml mocnego espresso",
    "opakowanie biszkoptów",
    "kakao do posypania"
  ],
  steps: [
    "Oddziel żółtka od białek, utrzyj żółtka z cukrem.",
    "Dodaj mascarpone i wymieszaj.",
    "Ubij białka i delikatnie połącz z kremem.",
    "Biszkopty krótko zanurz w espresso i układaj warstwami z kremem.",
    "Schłódź min. 3 godziny i posyp kakao."
  ],
  tips: "Nie mocz biszkoptów zbyt długo, żeby nie rozmiękły."
},
  {
  id: "sernik-nowojorski",
  title: "Sernik nowojorski",
  category: "Desery",
  time: 90,
  difficulty: "trudny",
  tags: [
    "ser kremowy",
    "wanilia",
    "spód ciasteczkowy"
  ],
  img: "https://images.unsplash.com/photo-1601972599720-b1e4e54c2093?q=80&w=1600&auto=format&fit=crop",
  desc: "Kremowy, gładki sernik pieczony w kąpieli wodnej na maślanym spodzie.",
  ingredients: [
    "900 g serka kremowego",
    "200 g herbatników",
    "80 g masła",
    "200 g cukru",
    "3 jajka",
    "1 łyżeczka wanilii",
    "200 ml śmietanki 30%"
  ],
  steps: [
    "Zblenduj herbatniki z masłem i wklep w spód tortownicy.",
    "Utrzyj serek z cukrem, dodaj jajka, wanilię i śmietankę.",
    "Wylej masę na spód.",
    "Piecz 10 min w 220°C, potem 60 min w 120°C w kąpieli wodnej.",
    "Studź przy uchylonych drzwiczkach piekarnika."
  ],
  tips: "Owiń formę folią, by woda nie dostała się do środka."
},
  {
  id: "panna-cotta-maliny",
  title: "Panna cotta z malinami",
  category: "Desery",
  time: 20,
  difficulty: "łatwy",
  tags: [
    "śmietanka",
    "żelatyna",
    "maliny"
  ],
  img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1600&auto=format&fit=crop",
  desc: "Lekki włoski deser z waniliową śmietanką i musem malinowym.",
  ingredients: [
    "400 ml śmietanki 30%",
    "100 ml mleka",
    "2 łyżki cukru",
    "1 laska wanilii",
    "2 łyżeczki żelatyny",
    "garść malin"
  ],
  steps: [
    "Podgrzej mleko ze śmietanką, cukrem i wanilią (nie gotuj).",
    "Dodaj namoczoną żelatynę i wymieszaj.",
    "Przelej do foremek i schłodź.",
    "Podaj z musem z malin."
  ],
  tips: "Zamiast wanilii użyj skórki z cytryny dla świeżości."
},
  {
  id: "tarta-cytrynowa",
  title: "Tarta cytrynowa",
  category: "Desery",
  time: 70,
  difficulty: "średni",
  tags: [
    "cytryna",
    "kruche ciasto",
    "beza"
  ],
  img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop",
  desc: "Orzeźwiająca tarta na kruchym spodzie z intensywnie cytrynowym kremem.",
  ingredients: [
    "200 g mąki",
    "100 g masła",
    "50 g cukru pudru",
    "1 jajko",
    "3 cytryny",
    "3 jajka do kremu",
    "120 g cukru",
    "60 g masła"
  ],
  steps: [
    "Zagnieć kruche ciasto i podpiecz spód.",
    "Utrzyj jajka z cukrem, dodaj sok i skórkę z cytryn oraz masło.",
    "Gotuj do zgęstnienia.",
    "Wylej na spód i schłódź.",
    "Opcjonalnie przykryj bezą i zapiecz."
  ],
  tips: "Nakłuj spód i piecz z obciążeniem, by nie wyrósł."
}
];

// --- SELECTORS ---
const galleryEl = document.getElementById('image-gallery');
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const favOnly = document.getElementById('fav-only');
const resultsCount = document.getElementById('results-count');
const backBtn = document.getElementById('back-btn');
const themeToggle = document.getElementById('theme-toggle');
const toTopBtn = document.getElementById('to-top');

// Detail selectors
const detail = document.getElementById('detail-panel');
const dClose = document.getElementById('detail-close');
const dPrint = document.getElementById('detail-print');
const dTitle = document.getElementById('detail-title');
const dMeta = document.getElementById('detail-meta');
const dImg = document.getElementById('detail-image');
const dIngr = document.getElementById('detail-ingredients');
const dSteps = document.getElementById('detail-steps');
const dTips = document.getElementById('detail-tips');

// Lightbox selectors
const lb = document.getElementById('lightbox');
const lbClose = lb.querySelector('.close');
const lbImg = lb.querySelector('.lightbox-image');
const lbCap = lb.querySelector('.lightbox-caption');
const shareNative = document.getElementById('share-native');
const shareFb = document.getElementById('share-fb');
const shareX = document.getElementById('share-x');
const shareCopy = document.getElementById('share-copy');

// --- STATE ---
let filteredList = [...RECIPES];
let currentRecipe = null;
let lastFocusEl = null;
let closeFromCode = false;

// --- UTIL ---
const debounce = (fn, wait=300) => { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); }; };

// --- THEME ---
const store = {
  get favs() { return new Set(JSON.parse(localStorage.getItem('FAVS') || '[]')); },
  set favs(valSet) { localStorage.setItem('FAVS', JSON.stringify([...valSet])); },
  get theme() { return localStorage.getItem('THEME') || 'auto'; },
  set theme(v) { localStorage.setItem('THEME', v); }
};

function applyTheme() {
  const mode = store.theme;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldDark = mode === 'dark' || (mode === 'auto' && prefersDark);
  document.documentElement.setAttribute('data-theme', shouldDark ? 'dark' : '');
  themeToggle.textContent = shouldDark ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', shouldDark ? 'Przełącz na jasny' : 'Przełącz na ciemny');
}
themeToggle?.addEventListener('click', () => {
  const mode = store.theme;
  store.theme = mode === 'dark' ? 'light' : mode === 'light' ? 'auto' : 'dark';
  applyTheme();
});

// --- RENDERING ---

// --- Allergens detection ---
const ALLERGENS = [
  {key:'gluten', label:'Gluten', abbr:'GL', re:/(mąk|pszen|jęczm|zyt|żyt|ows|bulgur|kuskus|chleb|makaron|tortilla)/i},
  {key:'mleko', label:'Mleko', abbr:'ML', re:/(mleko|śmietan|masł|ser|jogurt|kefir|mozzarell|parmezan)/i},
  {key:'jaja', label:'Jaja', abbr:'J', re:/(jaj)/i},
  {key:'soja', label:'Soja', abbr:'SO', re:/(soja|tofu|tempeh|soy)/i},
  {key:'orzechy', label:'Orzechy', abbr:'OR', re:/(orzech|migdał|laskow|włoski|nerkow|fistas|arachid|pistac)/i},
  {key:'sezam', label:'Sezam', abbr:'SE', re:/(sezam|tahini)/i},
  {key:'ryby', label:'Ryby', abbr:'RY', re:/(łosoś|losos|tuńczyk|tunczyk|dorsz|makrel|ryb)/i},
  {key:'skorupiaki', label:'Skorupiaki', abbr:'SK', re:/(krewet|krab|langustin|homar|małż|ostryg)/i},
  {key:'seler', label:'Seler', abbr:'CE', re:/(seler)/i},
  {key:'gorczyca', label:'Gorczyca', abbr:'GO', re:/(musztard|gorczyc)/i},
  {key:'łubin', label:'Łubin', abbr:'ŁU', re:/(łubin|lubin)/i},
  {key:'siarczyny', label:'Siarczyny', abbr:'SI', re:/(siarczyn)/i}
];
function detectAllergens(recipe){
  const text = ((recipe.ingredients||[]).join(' ') + ' ' + (recipe.tags||[]).join(' ') + ' ' + (recipe.title||'')).toLowerCase();
  const set = [];
  for (const a of ALLERGENS){
    if (a.re.test(text)) set.push(a);
  }
  return set;
}
function allergenBadges(arr){
  if (!arr || !arr.length) return '';
  return '<div class="allergens-row">' + arr.map(a=>`<span class="badge-allergen" data-k="${a.key}" title="${a.label}"><b>${a.abbr}</b> ${a.label}</span>`).join('') + '</div>';
}

function chip(label, value) { return `<span class="chip"><span>${label}</span><b>${value}</b></span>`; }
function createSrcSet(urlBase) {
  const widths = [400, 800, 1200, 1600];
  return widths.map(w => urlBase.replace(/w=\d+/, 'w=' + w) + ` ${w}w`).join(', ');
}

function render(recipes) {
  filteredList = recipes;
  galleryEl.innerHTML = '';

  if (!recipes.length) {
    const empty = document.createElement('p');
    empty.textContent = 'Brak wyników. Spróbuj innego wyszukiwania.';
    empty.style.gridColumn = '1 / -1';
    galleryEl.appendChild(empty);
  }

  const favs = store.favs;

  for (const r of recipes) {
    const item = document.createElement('article');
    item.className = 'gallery-item';
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Otwórz przepis: ${r.title}`);

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = r.img;
    img.srcset = createSrcSet(r.img);
    img.sizes = '(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw';
    img.alt = r.title;
    img.onerror = () => {
      img.src = `https://picsum.photos/seed/${encodeURIComponent(r.id)}/800/600`;
      img.removeAttribute('srcset'); img.removeAttribute('sizes');
    };

    const favBtn = document.createElement('button');
    favBtn.className = 'btn small fav-btn' + (favs.has(r.id) ? ' active' : '');
    favBtn.setAttribute('aria-pressed', favs.has(r.id) ? 'true' : 'false');
    favBtn.title = 'Dodaj do ulubionych';
    favBtn.textContent = favs.has(r.id) ? '♥' : '♡';
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(r.id, favBtn);
    });

    const body = document.createElement('div');
    body.className = 'card-body';

    const h3 = document.createElement('h3');
    h3.textContent = r.title;

    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = r.category;

    const tags = document.createElement('div');
    tags.className = 'tags';
    for (const t of r.tags) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = `#${t}`;
      tags.appendChild(tag);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = chip('⏱', r.time + ' min') + chip('⭐', r.difficulty);

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const viewBtn = document.createElement('button');
    viewBtn.className = 'btn';
    viewBtn.textContent = 'Powiększ';
    viewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lastFocusEl = viewBtn;
      openLightbox(r, { push: true });
    });

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn ghost';
    detailsBtn.textContent = 'Szczegóły';
    detailsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lastFocusEl = detailsBtn;
      openDetail(r, { push: true });
    });

    const shareBtn = document.createElement('button');
    shareBtn.className = 'btn ghost';
    shareBtn.textContent = 'Udostępnij';
    shareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      shareRecipe(r);
    });

    actions.appendChild(viewBtn);
    actions.appendChild(detailsBtn);
    actions.appendChild(shareBtn);

    body.appendChild(h3);
    body.appendChild(badge);
    body.appendChild(tags);
    body.appendChild(meta);
    body.appendChild(actions);

    item.appendChild(img);
    item.appendChild(body);
    item.appendChild(favBtn);

    item.addEventListener('click', () => { lastFocusEl = item; openDetail(r, { push: true }); });
    item.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        lastFocusEl = item;
        openDetail(r, { push: true });
        ev.preventDefault();
      }
    });

    galleryEl.appendChild(item);
  }

  resultsCount.textContent = `Wyniki: ${recipes.length}`;
}

function toggleFav(id, btnEl) {
  const favs = store.favs;
  const active = favs.has(id);
  if (active) favs.delete(id); else favs.add(id);
  store.favs = favs;
  if (btnEl) {
    btnEl.classList.toggle('active', !active);
    btnEl.setAttribute('aria-pressed', !active ? 'true' : 'false');
    btnEl.textContent = !active ? '♥' : '♡';
  }
  if (favOnly?.checked) applyFilters();
}

// --- FILTERING ---
function applyFilters() {
  const q = (searchInput?.value || '').toLowerCase().trim();
  const cat = categorySelect?.value || 'all';
  const favs = store.favs;

  const filtered = RECIPES.filter(r => {
    const inCat = cat === 'all' || r.category === cat;
    const hay = [r.title, r.category, r.desc, ...(r.tags || [])].join(' ').toLowerCase();
    const inQuery = !q || hay.includes(q);
    const inFav = !favOnly?.checked || favs.has(r.id);
    return inCat && inQuery && inFav;
  });
  render(filtered);
}
const emitSearch = debounce(()=>{}, 600);
searchInput?.addEventListener('input', (e)=>{ applyFilters(); emitSearch(e.target.value); });
categorySelect?.addEventListener('change', ()=>{ applyFilters(); });
favOnly?.addEventListener('change', ()=>{ applyFilters(); });

// --- LIGHTBOX & SHARE ---
function openLightbox(recipe, { push = false } = {}) {
  currentRecipe = recipe;
  lbImg.src = recipe.img;
  lbImg.alt = recipe.title;
  lbCap.innerHTML = `<strong>${recipe.title}</strong><br>${recipe.desc}<br>${chip('⏱', recipe.time + ' min')} ${chip('⭐', recipe.difficulty)}`;
  lb.classList.remove('hidden');
  lb.setAttribute('aria-hidden', 'false');
  lbClose.focus();

  const url = new URL(window.location.href);
  url.searchParams.set('r', recipe.id);
  url.searchParams.delete('d');
  if (push) history.pushState({ lb: true, id: recipe.id }, '', url);
  else history.replaceState({ lb: true, id: recipe.id }, '', url);

  setShareLinks({ title: recipe.title, text: recipe.desc, url: url.toString() });
}
function closeLightbox({ pop = true } = {}) {
  lb.classList.add('hidden');
  lb.setAttribute('aria-hidden', 'true');
  const wasFocused = lastFocusEl;
  currentRecipe = null;

  if (pop) {
    if (history.state && history.state.lb) { closeFromCode = true; history.back(); }
    else { const url = new URL(window.location.href); url.searchParams.delete('r'); history.replaceState({}, '', url); }
  } else {
    const url = new URL(window.location.href); url.searchParams.delete('r'); history.replaceState({}, '', url);
  }
  if (wasFocused && typeof wasFocused.focus === 'function') setTimeout(()=>wasFocused.focus(), 0);
}
lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
lbClose.addEventListener('click', () => { closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lb.classList.contains('hidden')) closeLightbox();
  if (!lb.classList.contains('hidden') && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
    navigateLightbox(e.key === 'ArrowRight' ? 1 : -1);
  }
});
function navigateLightbox(dir) {
  if (!currentRecipe || !filteredList.length) return;
  const idx = filteredList.findIndex(r => r.id === currentRecipe.id);
  if (idx === -1) return;
  const next = filteredList[(idx + dir + filteredList.length) % filteredList.length];
  openLightbox(next, { push: true });
}
function shareRecipe(recipe) {
  const url = new URL(window.location.href);
  url.searchParams.set('r', recipe.id);
  url.searchParams.delete('d');
  const shareData = { title: recipe.title, text: recipe.desc, url: url.toString() };
  if (navigator.share) { navigator.share(shareData).catch(() => {}); }
  else { openLightbox(recipe, { push: true }); }
}
function setShareLinks({ title, text, url }) {
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + ' — ' + text)}`;
  shareFb.href = fbUrl; shareX.href = xUrl;
}
shareNative.addEventListener('click', () => { if (!currentRecipe) return; shareRecipe(currentRecipe); });
shareCopy.addEventListener('click', async () => {
  if (!currentRecipe) return;
  const url = new URL(window.location.href);
  url.searchParams.set('r', currentRecipe.id);
  try { await navigator.clipboard.writeText(url.toString()); shareCopy.textContent = 'Skopiowano!'; setTimeout(() => (shareCopy.textContent = 'Kopiuj link'), 1500); } catch {}
});

// --- DETAIL PAGE ---
function openDetail(recipe, { push=false } = {}) {
  currentRecipe = recipe;
  dTitle.textContent = recipe.title;
  dMeta.innerHTML = chip('⏱', recipe.time + ' min') + chip('⭐', recipe.difficulty) + (recipe.tags?.length ? chip('Tagi', recipe.tags.map(t=>'#'+t).join(' ')) : '');
  dImg.src = recipe.img; dImg.alt = recipe.title;

  dIngr.innerHTML = ''; (recipe.ingredients || []).forEach(it => { const li = document.createElement('li'); li.textContent = it; dIngr.appendChild(li); });
  dSteps.innerHTML = ''; (recipe.steps || []).forEach(st => { const li = document.createElement('li'); li.textContent = st; dSteps.appendChild(li); });
  dTips.textContent = recipe.tips || 'Brak szczególnych wskazówek.';
  const dAll = document.getElementById('detail-allergens');
  if (dAll) dAll.innerHTML = allergenBadges(detectAllergens(recipe));

  detail.classList.remove('hidden'); detail.setAttribute('aria-hidden', 'false');

  const url = new URL(window.location.href);
  url.searchParams.set('d', recipe.id); url.searchParams.delete('r');
  if (push) history.pushState({ detail: true, id: recipe.id }, '', url);
  else history.replaceState({ detail: true, id: recipe.id }, '', url);
}
function closeDetail({ pop=true } = {}) {
  detail.classList.add('hidden'); detail.setAttribute('aria-hidden', 'true');
  const wasFocused = lastFocusEl; currentRecipe = null;

  if (pop) {
    if (history.state && history.state.detail) { closeFromCode = true; history.back(); }
    else { const url = new URL(window.location.href); url.searchParams.delete('d'); history.replaceState({}, '', url); }
  } else {
    const url = new URL(window.location.href); url.searchParams.delete('d'); history.replaceState({}, '', url);
  }
  if (wasFocused && typeof wasFocused.focus === 'function') setTimeout(()=>wasFocused.focus(), 0);
}
detail.addEventListener('click', (e)=>{ if (e.target === detail) closeDetail(); });
dClose.addEventListener('click', ()=>{ closeDetail(); });
dPrint.addEventListener('click', ()=>{ window.print(); });

// --- BACK / HISTORY ---
const hasHistory = () => (window.history.length > 1);
backBtn?.addEventListener('click', () => {
  if (!detail.classList.contains('hidden')) { closeDetail(); return; }
  if (!lb.classList.contains('hidden')) { closeLightbox(); return; }
  if (hasHistory()) { history.back(); }
  else {
    if (searchInput) searchInput.value = '';
    if (categorySelect) categorySelect.value = 'all';
    if (favOnly) favOnly.checked = false;
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  const hasR = params.has('r'); const hasD = params.has('d');
  if (!hasR && !hasD) {
    if (!lb.classList.contains('hidden')) closeLightbox({ pop: false });
    if (!detail.classList.contains('hidden')) closeDetail({ pop: false });
  }
  if (closeFromCode) {
    const url = new URL(window.location.href);
    url.searchParams.delete('r'); url.searchParams.delete('d');
    history.replaceState({}, '', url);
    closeFromCode = false;
  }
});

// --- SCROLL TO TOP ---
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) toTopBtn?.classList.add('show');
  else toTopBtn?.classList.remove('show');
});
toTopBtn?.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// --- CONTACT FORM (mailto fallback) ---
const CONTACT_EMAIL = 'hello@example.com'; // <- podmień na swój adres
const cForm = document.getElementById('contact-form');
const cName = document.getElementById('cf-name');
const cEmail = document.getElementById('cf-email');
const cTopic = document.getElementById('cf-topic');
const cMsg = document.getElementById('cf-message');
const cConsent = document.getElementById('cf-consent');
const cStatus = document.getElementById('cf-status');

function validateEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
cForm?.addEventListener('submit', (e)=>{
  e.preventDefault();
  let ok = true;
  document.getElementById('err-name').textContent = cName.value.trim() ? '' : 'Podaj imię';
  ok = ok && !!cName.value.trim();

  document.getElementById('err-email').textContent = validateEmail(cEmail.value) ? '' : 'Podaj poprawny e-mail';
  ok = ok && validateEmail(cEmail.value);

  document.getElementById('err-message').textContent = cMsg.value.trim() ? '' : 'Napisz wiadomość';
  ok = ok && !!cMsg.value.trim();

  if (!cConsent.checked) { cStatus.textContent = 'Zaznacz zgodę na kontakt.'; ok = false; } else { cStatus.textContent = ''; }
  if (!ok) return;

  const subject = encodeURIComponent((cTopic.value || 'Kontakt ze strony') + ' — ' + cName.value.trim());
  const body = encodeURIComponent(
    'Imię: ' + cName.value.trim() + '\n' +
    'E-mail: ' + cEmail.value.trim() + '\n' +
    'Temat: ' + (cTopic.value || '-') + '\n\n' +
    cMsg.value.trim()
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  cForm.reset();
  cStatus.textContent = 'Dziękujemy! Wiadomość została przygotowana w Twoim kliencie poczty.';
});

// --- INIT ---
window.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (store.theme === 'auto') applyTheme();
  });

  render(RECIPES);

  const params = new URLSearchParams(window.location.search);
  const idR = params.get('r');
  const idD = params.get('d');
  if (idR) {
    const found = RECIPES.find(r => r.id === idR);
    if (found) openLightbox(found, { push: false });
  }
  if (idD) {
    const found = RECIPES.find(r => r.id === idD);
    if (found) openDetail(found, { push: false });
  }

  applyFilters();
});



/* AI CHAT WIDGET */
(()=>{
  const $ = s=>document.querySelector(s);
  const $$ = s=>Array.from(document.querySelectorAll(s));
  const btnToggle = $('#ai-chat-toggle');
  const panel     = $('#ai-chat');
  const btnMin    = $('#ai-chat-min');
  const btnClose  = $('#ai-chat-close');
  const msgBox    = $('#ai-chat-messages');
  const input     = $('#ai-chat-input');
  const sendBtn   = $('#ai-chat-send');

  const SG = $$('.ai-suggestions .ai-sg');
  const LS_KEY = 'ai-chat-history-v1';

  // --- Closed dictionaries ---
  const normalize = (t)=>t.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/ą/g,'a').replace(/ć/g,'c').replace(/ę/g,'e')
    .replace(/ł/g,'l').replace(/ń/g,'n').replace(/ó/g,'o')
    .replace(/ś/g,'s').replace(/ż|ź/g,'z')
    .replace(/[^\w\s%/.-]+/g,' ').replace(/\s+/g,' ').trim();

  const FOODS = [
    {name:"jabłko", syn:["jablko","apple"], kcal:52, p:0.3, f:0.2, c:14, piece_g:150, groups:["fruit","vege"]},
    {name:"banan", syn:["banana"], kcal:89, p:1.1, f:0.3, c:23, piece_g:120, groups:["fruit","vege"]},
    {name:"pierś z kurczaka", syn:["piers z kurczaka","kurczak","chicken breast"], kcal:165, p:31, f:3.6, c:0, groups:["meat","keto","hp"]},
    {name:"łosoś", syn:["losos","salmon"], kcal:208, p:20, f:13, c:0, groups:["fish","keto","hp"]},
    {name:"jajko", syn:["jajo","egg"], kcal:143, p:13, f:10, c:1.1, piece_g:50, groups:["keto","hp"]},
    {name:"mleko 2%", syn:["mleko","milk"], kcal:50, p:3.4, f:2, c:5, groups:["dairy"]},
    {name:"jogurt naturalny", syn:["jogurt","yogurt"], kcal:61, p:3.5, f:3.3, c:4.7, groups:["dairy"]},
    {name:"awokado", syn:["avocado"], kcal:160, p:2, f:15, c:9, groups:["keto"]},
    {name:"oliwa z oliwek", syn:["oliwa","olive oil"], kcal:884, p:0, f:100, c:0, groups:["keto"]},
    {name:"masło", syn:["maslo","butter"], kcal:717, p:1, f:81, c:0.1, groups:["keto"]},
    {name:"ser żółty", syn:["ser zolty","cheddar","gouda"], kcal:402, p:25, f:33, c:1.3, groups:["keto"]},
    {name:"chleb pszenny", syn:["chleb","bread","pieczywo"], kcal:265, p:9, f:3.2, c:49, slice_g:35, groups:["cereal"]},
    {name:"ryż gotowany", syn:["ryz","ryz gotowany","rice"], kcal:130, p:2.4, f:0.3, c:28, groups:["cereal"]},
    {name:"makaron gotowany", syn:["makaron","pasta"], kcal:158, p:5.8, f:0.9, c:31, groups:["cereal"]},
    {name:"ziemniaki gotowane", syn:["ziemniaki","potato"], kcal:87, p:2, f:0.1, c:20, groups:["vege"]},
    {name:"brokuł", syn:["brokul","broccoli"], kcal:34, p:2.8, f:0.4, c:7, groups:["vege"]},
    {name:"marchew", syn:["carrot"], kcal:41, p:0.9, f:0.2, c:10, groups:["vege"]},
    {name:"pomidor", syn:["pomidor"], kcal:18, p:0.9, f:0.2, c:3.9, groups:["vege"]},
    {name:"ogórek", syn:["ogorek","cucumber"], kcal:16, p:0.7, f:0.1, c:3.6, groups:["vege"]},
    {name:"cukier", syn:["sugar"], kcal:387, p:0, f:0, c:100, groups:[]},
    {name:"czekolada gorzka 70%", syn:["czekolada","dark chocolate"], kcal:600, p:7.8, f:43, c:46, groups:[]},
    {name:"pizza margherita", syn:["pizza"], kcal:250, p:11, f:9, c:29, groups:[]},
    {name:"kebab", syn:["kebab"], kcal:215, p:13, f:10, c:18, groups:[]},
    {name:"burger wołowy", syn:["burger","hamburger"], kcal:255, p:17, f:12, c:20, groups:[]},
    {name:"frytki", syn:["fries"], kcal:312, p:3.4, f:15, c:41, groups:[]},
    {name:"croissant", syn:["rogalik"], kcal:406, p:8, f:21, c:45, groups:[]},
    {name:"brownie", syn:["ciasto brownie"], kcal:466, p:6, f:24, c:58, groups:[]},
    {name:"tiramisu", syn:["tiramisu"], kcal:330, p:6, f:22, c:27, groups:[]},
    {name:"panna cotta", syn:["pannacotta"], kcal:350, p:5, f:29, c:17, groups:[]},
    {name:"tarta cytrynowa", syn:["lemon tart"], kcal:340, p:5, f:18, c:42, groups:[]},
  
,
    {name:"mleko 3,2%", syn:["mleko pełne","milk whole"], kcal:61, p:3.2, f:3.2, c:4.8, groups:["dairy"], cup_g:250},
    {name:"mleko 0,5%", syn:["mleko chude","milk skim"], kcal:35, p:3.4, f:0.5, c:5, groups:["dairy"], cup_g:250},
    {name:"ser twarogowy półtłusty", syn:["twaróg","cottage cheese"], kcal:133, p:18, f:6, c:3, groups:["dairy"]},
    {name:"jogurt grecki", syn:["grecki jogurt","greek yogurt"], kcal:97, p:9, f:5, c:3.6, groups:["dairy"], cup_g:240},
    {name:"tofu", syn:["tofu sojowe"], kcal:76, p:8, f:4.8, c:1.9, groups:["vege","soy"], piece_g:100},
    {name:"tempeh", syn:["tempe"], kcal:193, p:20, f:11, c:7.6, groups:["vege","soy"]},
    {name:"płatki owsiane", syn:["platki owsiane","owsianka","oats"], kcal:379, p:13, f:7, c:63, groups:["cereal"], cup_g:90, tbsp_g:6},
    {name:"mąka pszenna", syn:["maka pszenna","flour","wheat flour"], kcal:364, p:10, f:1, c:76, groups:["cereal"], cup_g:120, tbsp_g:8, tsp_g:3},
    {name:"ryż biały surowy", syn:["ryz surowy","rice uncooked"], kcal:365, p:7, f:0.6, c:80, groups:["cereal"], cup_g:190, tbsp_g:12},
    {name:"quinoa surowa", syn:["komosa ryżowa","komosa","quinoa"], kcal:368, p:14, f:6, c:64, groups:["cereal"], cup_g:170},
    {name:"ciecierzyca gotowana", syn:["ciecierzyca","chickpeas cooked"], kcal:164, p:8.9, f:2.6, c:27, groups:["legume"], cup_g:164},
    {name:"soczewica gotowana", syn:["soczewica","lentils cooked"], kcal:116, p:9, f:0.4, c:20, groups:["legume"], cup_g:198},
    {name:"migdały", syn:["migdaly","almonds"], kcal:579, p:21, f:50, c:22, groups:["nuts"], handful_g:30},
    {name:"orzechy włoskie", syn:["orzechy wloskie","walnuts"], kcal:654, p:15, f:65, c:14, groups:["nuts"], handful_g:30},
    {name:"masło orzechowe", syn:["maslo orzechowe","peanut butter"], kcal:588, p:25, f:50, c:20, groups:["nuts"], tbsp_g:16},
    {name:"nasiona chia", syn:["chia"], kcal:486, p:17, f:31, c:42, groups:["seeds"], tbsp_g:12},
    {name:"olej rzepakowy", syn:["olej"], kcal:884, p:0, f:100, c:0, groups:["keto"], tbsp_g:10},
    {name:"miód", syn:["miod","honey"], kcal:304, p:0.3, f:0, c:82, groups:[], tbsp_g:21, tsp_g:7},
    {name:"cukier biały", syn:["cukier","sugar"], kcal:387, p:0, f:0, c:100, groups:[], tbsp_g:12, tsp_g:4},
    {name:"sól", syn:["sol","salt"], kcal:0, p:0, f:0, c:0, groups:[], tsp_g:6},
    {name:"chleb żytni", syn:["chleb razowy","zytni"], kcal:259, p:9, f:3.3, c:48, groups:["cereal"], slice_g:35},
    {name:"tortilla pszenna", syn:["tortilla"], kcal:300, p:8, f:7, c:49, groups:["cereal"], piece_g:50},
    {name:"wołowina chuda", syn:["wolowina","beef"], kcal:187, p:26, f:9, c:0, groups:["meat"]},
    {name:"tuńczyk w sosie własnym", syn:["tunczyk","tuna"], kcal:132, p:29, f:1, c:0, groups:["fish"]},
    {name:"dorsz", syn:["cod"], kcal:82, p:18, f:0.7, c:0, groups:["fish"]},
    {name:"krewetki", syn:["shrimp"], kcal:99, p:24, f:0.3, c:0.2, groups:["seafood"]},
    {name:"truskawki", syn:["truskawka","strawberries"], kcal:32, p:0.7, f:0.3, c:8, groups:["fruit"], cup_g:150},
    {name:"borówki", syn:["jagody","blueberries"], kcal:57, p:0.7, f:0.3, c:14, groups:["fruit"], cup_g:148},
    {name:"pomarańcza", syn:["pomarancza","orange"], kcal:47, p:0.9, f:0.1, c:12, piece_g:130, groups:["fruit"]},
    {name:"szpinak", syn:["spinach"], kcal:23, p:2.9, f:0.4, c:3.6, groups:["vege"], cup_g:30}
];

  const DISHES = {
    "panna cotta": "Włoski deser na bazie śmietanki z wanilią i żelatyną, zwykle podawany z musem owocowym.",
    "tiramisu": "Warstwowy deser z biszkoptów nasączonych espresso, kremu z mascarpone i kakao.",
    "brownie": "Gęste, wilgotne ciasto czekoladowe o fudgy konsystencji.",
    "margherita": "Klasyczna pizza z sosem pomidorowym, mozzarellą i bazylią.",
    "caprese": "Przystawka z plastrów pomidora, mozzarelli i bazylii, skropiona oliwą."
  
    "ramen": "Japońska zupa na wywarze z dodatkami (makaron, mięso/warzywa, jajko).",
    "shakshuka": "Jajka gotowane w aromatycznym sosie pomidorowo-paprykowym.",
    "guacamole": "Pasta z dojrzałego awokado, limonki, cebuli i kolendry.",
    "risotto": "Włoskie danie z ryżu arborio gotowanego stopniowo na bulionie.",
    "ceviche": "Surowa ryba marynowana w soku z limonki z dodatkami.",
    "ratatouille": "Duszone francuskie warzywa: bakłażan, cukinia, papryka, pomidory.",
    "pad thai": "Tajski smażony makaron ryżowy z tamaryndowcem, jajkiem i orzeszkami.",
    "pho": "Wietnamska zupa na klarownym wywarze z przyprawami i makaronem ryżowym.",
    "gnocchi": "Włoskie kluseczki ziemniaczane podawane z sosami.",
    "falafel": "Smażone kulki z ciecierzycy z przyprawami.",
    "hummus": "Krem z ciecierzycy z tahini, cytryną i czosnkiem.",
    "pesto": "Sos z bazylii, orzeszków piniowych, parmezanu i oliwy."
};

  const DIETS = {
    "keto": {title:"Dieta ketogeniczna", text:"Wysokotłuszczowa, bardzo niskowęglowodanowa. Promuje produkty z małą ilością węgli; celem jest ketoza.", pros:["Szybka utrata masy u części osób","Stabilny apetyt"], cons:["Trudna do utrzymania","Ogranicza owoce i zboża"], caution:"Nie dla osób z niektórymi schorzeniami — skonsultuj z lekarzem."},
    "wegańska": {title:"Dieta wegańska", text:"Bez produktów odzwierzęcych.", pros:["Wysoka gęstość odżywcza z warzyw/strączków"], cons:["Uwaga na B12, żelazo, omega-3"], caution:"Wymaga planowania białka i suplementacji B12."},
    "wegetariańska": {title:"Dieta wegetariańska", text:"Bez mięsa, dopuszcza nabiał/jaja.", pros:["Elastyczna"], cons:["Ryzyko niedoboru żelaza"], caution:"Dbaj o źródła białka."},
    "śródziemnomorska": {title:"Dieta śródziemnomorska", text:"Dużo warzyw, oliwy, ryb, pełnych ziaren.", pros:["Dobre dowody naukowe dla serca"], cons:["Wymaga regularnego gotowania"], caution:"Umiar w deserach i czerwonym mięsie."},
    "dash": {title:"Dieta DASH", text:"Skupiona na kontroli ciśnienia: niska sól, dużo warzyw i nabiał o niskiej zawartości tłuszczu.", pros:["Wsparcie dla nadciśnienia"], cons:["Może być mniej satysfakcjonująca bez soli"], caution:"Kontroluj sod."},
    "low fodmap": {title:"Low FODMAP", text:"Ogranicza fermentujące węgle dla łagodzenia IBS.", pros:["Pomaga części osób z IBS"], cons:["Złożona eliminacja"], caution:"Najlepiej z dietetykiem."}
  };

  // --- Helpers ---
  
const gramsFrom = (food, qty, unit)=>{
  if (!qty) return 100;
  if (!unit) return qty;
  const u = normalize(unit);
  if (['g','gram','gramy'].includes(u)) return qty;
  if (['ml'].includes(u)) return qty; // przyjmij g≈ml

  // szklanka / kubek / cup
  if (['szkl','szklanka','szklanki','kubek','cup'].includes(u)) {
    const w = (food && (food.cup_g)) ? food.cup_g : 250;
    return qty * w;
  }
  // łyżka stołowa
  if (['lyzka','łyżka','lż','l.','tbsp','łyzka','łyż'].includes(u)) {
    const w = (food && food.tbsp_g) ? food.tbsp_g : 15;
    return qty * w;
  }
  // łyżeczka
  if (['lyzeczka','łyżeczka','tsp'].includes(u)) {
    const w = (food && food.tsp_g) ? food.tsp_g : 5;
    return qty * w;
  }
  // garść
  if (['garsc','garść','handful'].includes(u)) {
    const w = (food && food.handful_g) ? food.handful_g : 30;
    return qty * w;
  }
  // sztuka / plaster / kromka
  if (['szt','sztuka','sztuki','sztuk','piece'].includes(u)){
    const piece = (food && (food.piece_g || food.slice_g)) ? (food.piece_g || food.slice_g) : 100;
    return qty * piece;
  }
  if (['kromka','slice','plaster'].includes(u)){
    const piece = (food && food.slice_g) ? food.slice_g : 35;
    return qty * piece;
  }
  // szczypta
  if (['szczypta','pinch'].includes(u)){
    return qty * 0.5;
  }
  return qty;
};


  const fmt = n => (Math.round(n*10)/10).toString().replace('.',',');

  const findFood = (q)=>{
    const nq = normalize(q);
    const all = FOODS.map(f=>({...f, all:[f.name, ...(f.syn||[])].map(normalize)}));
    // direct includes
    let best = all.find(f => f.all.some(a => nq.includes(a)));
    if (best) return best;
    // token overlap
    const toks = nq.split(' ');
    best = all.map(f=>{
      const score = Math.max(...f.all.map(a=>{
        const at = a.split(' ');
        const overlap = at.filter(t=>toks.includes(t)).length;
        return overlap / at.length;
      }));
      return {f, score};
    }).sort((a,b)=>b.score-a.score)[0];
    return (best && best.score>0) ? best.f : null;
  };

  function answerKcal(text){
    // parse quantity
    const m = text.match(/(\d+[.,]?\d*)\s*(g|gram|gramy|ml|szt(?:uka|uki|uk)?|kromka|slice)?/i);
    const qty = m ? parseFloat(m[1].replace(',','.')) : 100;
    const unit = m ? (m[2]||'g') : 'g';
    const food = findFood(text);
    if (!food) return "Nie mam tego produktu w słowniku. Spróbuj inaczej lub podaj nazwę bardziej precyzyjnie.";
    const grams = gramsFrom(food, qty, unit);
    const factor = grams/100;
    const kcal = food.kcal*factor;
    const p = (food.p||0)*factor, f=(food.f||0)*factor, c=(food.c||0)*factor;
    return `≈ **${fmt(kcal)} kcal** dla *${food.name}* (${fmt(grams)} g).\nMakro: **B ${fmt(p)} g • T ${fmt(f)} g • W ${fmt(c)} g**.`;
  }

  function answerMacro(text){
    const food = findFood(text);
    if (!food) return "Nie mam makro dla tego produktu w słowniku.";
    return `Makro dla *${food.name}* na 100 g: **B ${fmt(food.p||0)} g • T ${fmt(food.f||0)} g • W ${fmt(food.c||0)} g**, energia **${fmt(food.kcal)} kcal**.`;
  }

  function answerDish(text){
    const nq = normalize(text);
    for (const key in DISHES){
      if (nq.includes(normalize(key))) return DISHES[key];
    }
    return "Nie mam definicji tej potrawy w słowniku.";
  }

  function answerDiet(text){
    const nq = normalize(text);
    const entries = Object.entries(DIETS);
    for (const [k,v] of entries){
      if (nq.includes(normalize(k))) {
        return `**${v.title}**\n${v.text}\nPlusy: ${v.pros.join(', ')}.\nMinusy: ${v.cons.join(', ')}.\nUwaga: ${v.caution}`;
      }
    }
    return "Tego rodzaju diety nie mam w słowniku.";
  }

  function route(text){
    const t = text.trim();
    const nt = normalize(t);
    if (!t) return "Napisz wiadomość 🙂";
    // commands
    if (nt.startsWith('/kcal')) return answerKcal(t.replace(/^\/kcal/,'').trim() || t);
    if (nt.startsWith('/makro')) return answerMacro(t.replace(/^\/makro/,'').trim() || t);
    if (nt.startsWith('/dieta')) return answerDiet(t.replace(/^\/dieta/,'').trim() || t);
    if (/kcal|kalor/i.test(t)) return answerKcal(t);
    if (/makro|b\/t\/w|białko|tluszcz|tłuszcz|wegl/i.test(nt)) return answerMacro(t);
    if (/co to jest|definicja|jaki to deser|opis/i.test(nt)) return answerDish(t);
    if (/dieta|ketogeniczna|wegan|weget|srodziem/i.test(nt)) return answerDiet(t);
    // fallback: try entity kcal first then dish
    const f = findFood(t);
    if (f) return answerKcal(t);
    return "Jestem słownikiem offline: potrawy, kalorie i diety. Spróbuj np.:\n- `/kcal banan 120g`\n- `Makro: pierś z kurczaka`\n- `Co to jest panna cotta?`\n- `Dieta śródziemnomorska`";
  }

  // --- UI ---
  function scrollBottom(){ msgBox.scrollTop = msgBox.scrollHeight; }
  function addMsg(who, text){
    const el = document.createElement('div');
    el.className = 'ai-msg ' + (who==='user' ? 'ai-msg--user':'ai-msg--bot');
    el.innerHTML = text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>');
    msgBox.appendChild(el);
    saveHistory();
    scrollBottom();
  }
  function saveHistory(){
    const items = Array.from(msgBox.querySelectorAll('.ai-msg')).map(el=>({role: el.classList.contains('ai-msg--user')?'user':'bot', html: el.innerHTML}));
    try{ localStorage.setItem(LS_KEY, JSON.stringify(items)); }catch{}
  }
  function loadHistory(){
    try{
      const arr = JSON.parse(localStorage.getItem(LS_KEY)||'[]');
      arr.forEach(m=>{
        const el = document.createElement('div');
        el.className = 'ai-msg ' + (m.role==='user' ? 'ai-msg--user':'ai-msg--bot');
        el.innerHTML = m.html;
        msgBox.appendChild(el);
      });
      scrollBottom();
    }catch{}
  }

  function openPanel(){
    panel.classList.remove('hidden');
    panel.setAttribute('aria-hidden','false');
    input.focus();
  }
  function closePanel(){
    panel.classList.add('hidden');
    panel.setAttribute('aria-hidden','true');
  }

  btnToggle?.addEventListener('click', openPanel);
  btnMin?.addEventListener('click', ()=> closePanel());
  btnClose?.addEventListener('click', ()=> closePanel());

  sendBtn?.addEventListener('click', ()=>{
    const t = input.value;
    if (!t.trim()) return;
    addMsg('user', t);
    const out = route(t);
    addMsg('bot', out);
    input.value='';
    input.focus();
  });

  input?.addEventListener('keydown', (e)=>{
    if (e.key==='Enter' && !e.shiftKey){
      e.preventDefault();
      sendBtn.click();
    }
  });

  SG.forEach(b=> b.addEventListener('click', ()=>{
    input.value = b.textContent;
    sendBtn.click();
  }));

  // init greeting once
  if (btnToggle){ loadHistory(); if (!localStorage.getItem(LS_KEY)) addMsg('bot', 'Cześć! Jestem słownikiem offline o potrawach, kaloriach i dietach. Zapytaj np. *Ile kalorii ma tiramisu?*'); }

})();
