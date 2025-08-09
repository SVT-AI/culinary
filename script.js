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


// === CALORIE CALC =============================
// Updated DB: values per 100 g; optional gramsPerPiece for unit "szt"
const CAL_DB = {
  "pomidor": {kcal:18,p:0.9,f:0.2,c:3.9, gramsPerPiece:120},
  "mozzarella": {kcal:280,p:18,f:21,c:2.2},
  "bazylia": {kcal:23,p:3.2,f:0.6,c:2.7},
  "oliwa": {kcal:884,p:0,f:100,c:0},
  "dynia": {kcal:26,p:1,f:0.1,c:7},
  "cebula": {kcal:40,p:1.1,f:0.1,c:9.3, gramsPerPiece:80},
  "imbir": {kcal:80,p:1.8,f:0.8,c:18},
  "bulion": {kcal:5,p:1,f:0,c:0.5},
  "śmietanka 30%": {kcal:300,p:2.2,f:30,c:3.2},
  "makaron": {kcal:350,p:12,f:1.5,c:72},
  "pesto": {kcal:470,p:4.3,f:47,c:4.3},
  "parmezan": {kcal:431,p:38,f:29,c:4.1},
  "kurczak (pierś)": {kcal:165,p:31,f:3.6,c:0},
  "tortilla pszenna": {kcal:320,p:8.7,f:8.4,c:49},
  "awokado": {kcal:160,p:2,f:14.7,c:8.5, gramsPerPiece:170},
  "ryż": {kcal:360,p:7.1,f:0.7,c:80},
  "płatki owsiane": {kcal:379,p:13,f:6.5,c:67},
  "mleko 2%": {kcal:50,p:3.4,f:2,c:5},
  "mleko 3.2%": {kcal:62,p:3.2,f:3.2,c:4.8},
  "napój migdałowy": {kcal:17,p:0.6,f:1.1,c:0.3},
  "banan": {kcal:89,p:1.1,f:0.3,c:23, gramsPerPiece:120},
  "jagody": {kcal:57,p:0.7,f:0.3,c:14},
  "jajko": {kcal:143,p:12.6,f:9.5,c:0.7, gramsPerPiece:60},
  "truskawki": {kcal:33,p:0.7,f:0.3,c:8},
  "cukier": {kcal:400,p:0,f:0,c:100},
  "masło": {kcal:717,p:0.9,f:81,c:0.1},
  "czekolada gorzka": {kcal:546,p:4.9,f:31.3,c:61.2},
  "mąka pszenna": {kcal:364,p:10,f:1,c:76},
  "ser żółty": {kcal:350,p:25,f:27,c:1.3},
  "ziemniaki": {kcal:77,p:2,f:0.1,c:17},
  "brokuły": {kcal:34,p:2.8,f:0.4,c:7},
  "czosnek": {kcal:149,p:6.4,f:0.5,c:33},
  "ser mascarpone": {kcal:435,p:7,f:43,c:4.6},
  "kakao": {kcal:228,p:19.6,f:13.7,c:57.9},
  "śmietanka": {kcal:300,p:2.2,f:30,c:3.2},
  "wanilia": {kcal:288,p:0.1,f:0.1,c:12.7}
};

// selectors
const calName = document.getElementById('cal-name');
const calQty = document.getElementById('cal-qty');
const calUnit = document.getElementById('cal-unit');
const calGpp = document.getElementById('cal-gpp');
const calAdd = document.getElementById('cal-add');
const calClear = document.getElementById('cal-clear');
const calTable = document.getElementById('cal-table');
const calBody = calTable ? calTable.querySelector('tbody') : null;
const totalKcal = document.getElementById('cal-total-kcal');
const totalP = document.getElementById('cal-total-prot');
const totalF = document.getElementById('cal-total-fat');
const totalC = document.getElementById('cal-total-carb');
const calDatalist = document.getElementById('cal-db');

// populate datalist
if (calDatalist) {
  Object.keys(CAL_DB).sort().forEach(k => {
    const op = document.createElement('option'); op.value = k; calDatalist.appendChild(op);
  });
}

function saveCalc() {
  if (!calBody) return;
  const rows = [...calBody.querySelectorAll('tr')].map(tr => {
    const name = tr.querySelector('.c-name').value.trim();
    const qty = parseFloat(tr.querySelector('.c-qty').value) || 0;
    const unit = tr.querySelector('.c-unit').value;
    const gpp = parseFloat(tr.querySelector('.c-gpp').value) || 0;
    const k100 = parseFloat(tr.querySelector('.c-k100').value) || 0;
    const p100 = parseFloat(tr.querySelector('.c-p100').value) || 0;
    const f100 = parseFloat(tr.querySelector('.c-f100').value) || 0;
    const c100 = parseFloat(tr.querySelector('.c-c100').value) || 0;
    return { name, qty, unit, gpp, k100, p100, f100, c100 };
  });
  localStorage.setItem('CALC_ROWS_V2', JSON.stringify(rows));
}

function gramsFromRow(tr){
  const qty = parseFloat(tr.querySelector('.c-qty').value) || 0;
  const unit = tr.querySelector('.c-unit').value;
  const gpp = parseFloat(tr.querySelector('.c-gpp').value) || 0;
  if (unit === 'szt') return Math.round(qty * gpp);
  return qty; // qty is grams
}

function recalc() {
  let sumK=0, sumP=0, sumF=0, sumC=0;
  [...calBody.querySelectorAll('tr')].forEach(tr => {
    const g = gramsFromRow(tr);
    tr.querySelector('.c-grams').textContent = g || 0;
    const k100 = parseFloat(tr.querySelector('.c-k100').value) || 0;
    const p100 = parseFloat(tr.querySelector('.c-p100').value) || 0;
    const f100 = parseFloat(tr.querySelector('.c-f100').value) || 0;
    const c100 = parseFloat(tr.querySelector('.c-c100').value) || 0;
    const kcal = Math.round(g * k100 / 100);
    const p = Math.round(g * p100 / 100 * 10) / 10;
    const f = Math.round(g * f100 / 100 * 10) / 10;
    const c = Math.round(g * c100 / 100 * 10) / 10;
    tr.querySelector('.c-kcal').textContent = kcal;
    tr.querySelector('.c-prot').textContent = p.toFixed(1);
    tr.querySelector('.c-fat').textContent = f.toFixed(1);
    tr.querySelector('.c-carb').textContent = c.toFixed(1);
    sumK += kcal; sumP += p; sumF += f; sumC += c;
  });
  totalKcal.textContent = sumK;
  totalP.textContent = sumP.toFixed(1);
  totalF.textContent = sumF.toFixed(1);
  totalC.textContent = sumC.toFixed(1);
  saveCalc();
}

function addRow({ name='', qty='', unit='g', gpp='', k100=null, p100=null, f100=null, c100=null } = {}) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input class="c-name" list="cal-db" placeholder="Składnik" value="${name}"></td>
    <td><input class="c-qty num" type="number" min="0" step="1" placeholder="0" value="${qty}"></td>
    <td>
      <select class="c-unit">
        <option value="g"${unit==='g'?' selected':''}>g</option>
        <option value="szt"${unit==='szt'?' selected':''}>szt</option>
      </select>
    </td>
    <td><input class="c-gpp num" type="number" min="0" step="1" placeholder="g/szt" value="${gpp}"></td>
    <td class="c-grams num">0</td>
    <td><input class="c-k100 num" type="number" min="0" step="1" placeholder="0" value="${k100!==null?k100:''}"></td>
    <td><input class="c-p100 num" type="number" min="0" step="0.1" placeholder="0" value="${p100!==null?p100:''}"></td>
    <td><input class="c-f100 num" type="number" min="0" step="0.1" placeholder="0" value="${f100!==null?f100:''}"></td>
    <td><input class="c-c100 num" type="number" min="0" step="0.1" placeholder="0" value="${c100!==null?c100:''}"></td>
    <td class="c-kcal num">0</td>
    <td class="c-prot num">0.0</td>
    <td class="c-fat num">0.0</td>
    <td class="c-carb num">0.0</td>
    <td><button class="row-remove" aria-label="Usuń wiersz">✕</button></td>
  `;
  calBody.appendChild(tr);

  const nameEl = tr.querySelector('.c-name');
  const qtyEl = tr.querySelector('.c-qty');
  const unitEl = tr.querySelector('.c-unit');
  const gppEl = tr.querySelector('.c-gpp');
  const k100El = tr.querySelector('.c-k100');
  const p100El = tr.querySelector('.c-p100');
  const f100El = tr.querySelector('.c-f100');
  const c100El = tr.querySelector('.c-c100');

  function autofillFromDB() {
    const key = nameEl.value.trim().toLowerCase();
    const db = CAL_DB[key];
    if (db) {
      if (k100El.value === '') k100El.value = db.kcal;
      if (p100El.value === '') p100El.value = db.p;
      if (f100El.value === '') f100El.value = db.f;
      if (c100El.value === '') c100El.value = db.c;
      if (gppEl.value === '' && db.gramsPerPiece != null) gppEl.value = db.gramsPerPiece;
    }
  }

  nameEl.addEventListener('change', () => { autofillFromDB(); recalc(); });
  [qtyEl, unitEl, gppEl, k100El, p100El, f100El, c100El].forEach(el => el.addEventListener('input', recalc));
  tr.querySelector('.row-remove').addEventListener('click', () => { tr.remove(); recalc(); });

  // Initial autofill
  autofillFromDB();
  recalc();
}

calAdd?.addEventListener('click', (e) => {
  e.preventDefault();
  const name = (calName.value || '').trim();
  const qty = calQty.value;
  const unit = calUnit.value;
  const gpp = calGpp.value;
  if (!name) { calName.focus(); return; }
  addRow({ name, qty, unit, gpp });
  calName.value=''; calQty.value=''; calGpp.value='';
  calName.focus();
});

calClear?.addEventListener('click', (e) => {
  e.preventDefault();
  calBody.innerHTML='';
  recalc();
});

// restore from storage (v2)
(function restoreCalc(){
  try {
    const saved = JSON.parse(localStorage.getItem('CALC_ROWS_V2')||'[]');
    if (saved.length) saved.forEach(r => addRow(r));
    else addRow(); // start with one empty row
  } catch { addRow(); }
})();

// Add from recipe detail (names only)
const detailToCal = document.getElementById('detail-to-cal');
detailToCal?.addEventListener('click', () => {
  if (!currentRecipe) return;
  (currentRecipe.ingredients||[]).forEach(name => addRow({ name, qty:'', unit:'g' }));
  document.getElementById('calorie-tool')?.scrollIntoView({ behavior: 'smooth' });
});
// ==============================================
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
