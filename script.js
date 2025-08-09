// --- CONFIG / DATA ---
// 12 przepisów
const RECIPES = [
  {
    id: "caprese",
    title: "Sałatka caprese",
    category: "Przekąski",
    tags: ["mozzarella", "pomidor", "bazylia"],
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
    desc: "Klasyczna włoska przystawka z dojrzałych pomidorów, mozzarelli i świeżej bazylii. Gotowa w 10 minut!"
  },
  {
    id: "krem-z-dyni",
    title: "Krem z dyni",
    category: "Zupy",
    tags: ["dynia", "imbir", "bulion"],
    img: "https://images.unsplash.com/photo-1543357480-c60d40007aef?q=80&w=1600&auto=format&fit=crop",
    desc: "Aksamitna, rozgrzewająca zupa z nutą imbiru. Idealna na chłodne dni."
  },
  {
    id: "makaron-pesto",
    title: "Makaron z pesto",
    category: "Dania główne",
    tags: ["pesto", "parmezan", "makaron"],
    img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop",
    desc: "Szybki obiad w 15 minut — makaron z domowym pesto bazyliowym i parmezanem."
  },
  {
    id: "brownie",
    title: "Brownie czekoladowe",
    category: "Desery",
    tags: ["czekolada", "kakao", "masło"],
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?q=80&w=1600&auto=format&fit=crop",
    desc: "Wilgotne, intensywnie czekoladowe brownie z chrupiącą skórką."
  },
  {
    id: "tacos",
    title: "Tacos z kurczakiem",
    category: "Dania główne",
    tags: ["kurczak", "tortilla", "awokado"],
    img: "https://images.unsplash.com/photo-1601050690597-9fd75f3108c2?q=80&w=1600&auto=format&fit=crop",
    desc: "Kolorowe tacosy z soczystym kurczakiem, świeżą salsą i kremowym guacamole."
  },
  {
    id: "owsianka",
    title: "Owsianka z owocami",
    category: "Przekąski",
    tags: ["płatki owsiane", "banan", "jagody"],
    img: "https://images.unsplash.com/photo-1505575972945-280b9f50d1f4?q=80&w=1600&auto=format&fit=crop",
    desc: "Szybkie i pożywne śniadanie z sezonowymi owocami i orzechami."
  },
  {
    id: "ramen",
    title: "Ramen miso",
    category: "Zupy",
    tags: ["miso", "makaron", "bulion"],
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    desc: "Aromatyczny bulion miso z makaronem, jajkiem i warzywami — rozgrzewa i syci."
  },
  {
    id: "tiramisù",
    title: "Tiramisù",
    category: "Desery",
    tags: ["kawa", "mascarpone", "biszkopty"],
    img: "https://images.unsplash.com/photo-1607920591413-4ec007e70097?q=80&w=1600&auto=format&fit=crop",
    desc: "Klasyczny włoski deser o smaku kawy i kakao — bez pieczenia."
  },
  {
    id: "zapiekanka",
    title: "Zapiekanka ziemniaczana",
    category: "Dania główne",
    tags: ["ziemniaki", "ser", "śmietana"],
    img: "https://images.unsplash.com/photo-1612872087720-bb87605b2a12?q=80&w=1600&auto=format&fit=crop",
    desc: "Kremowa zapiekanka z ziemniaków i sera, złocista z wierzchu i miękka w środku."
  },
  {
    id: "krem-truskawkowy",
    title: "Krem truskawkowy",
    category: "Desery",
    tags: ["truskawki", "śmietanka", "wanilia"],
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1600&auto=format&fit=crop",
    desc: "Lekki deser z truskawek i wanilii — idealny na lato."
  },
  {
    id: "shakshuka",
    title: "Szakszuka",
    category: "Dania główne",
    tags: ["jajka", "papryka", "kumin"],
    img: "https://images.unsplash.com/photo-1544025163-1f6f2a8d6a8e?q=80&w=1600&auto=format&fit=crop",
    desc: "Jajka duszone w pikantnym sosie pomidorowym z papryką i przyprawami — śniadanie mistrzów."
  },
  {
    id: "broccoli-cream",
    title: "Krem z brokułów",
    category: "Zupy",
    tags: ["brokuły", "czosnek", "bulion"],
    img: "https://images.unsplash.com/photo-1611401189023-1219d3f1a5da?q=80&w=1600&auto=format&fit=crop",
    desc: "Delikatna, zielona zupa-krem z brokułów i czosnku, podawana z grzankami."
  }
];

const galleryEl = document.getElementById('image-gallery');
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const favOnly = document.getElementById('fav-only');
const resultsCount = document.getElementById('results-count');
const backBtn = document.getElementById('back-btn');
const themeToggle = document.getElementById('theme-toggle');
const toTopBtn = document.getElementById('to-top');

// --- STATE ---
let filteredList = [...RECIPES];
let currentRecipe = null;
let lastFocusEl = null;
let closeFromCode = false;

const store = {
  get favs() { return new Set(JSON.parse(localStorage.getItem('FAVS') || '[]')); },
  set favs(valSet) { localStorage.setItem('FAVS', JSON.stringify([...valSet])); },
  get theme() { return localStorage.getItem('THEME') || 'auto'; },
  set theme(v) { localStorage.setItem('THEME', v); }
};

// --- THEME ---
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

// --- RENDER ---
function isFav(id) {
  return store.favs.has(id);
}

function createSrcSet(urlBase) {
  // Zakładamy parametr w=... w URL Unsplash — podmieniamy szerokość
  const widths = [400, 800, 1200, 1600];
  const srcset = widths.map(w => urlBase.replace(/w=\d+/, 'w=' + w) + ` ${w}w`).join(', ');
  return srcset;
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
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
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

    const shareBtn = document.createElement('button');
    shareBtn.className = 'btn ghost';
    shareBtn.textContent = 'Udostępnij';
    shareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      shareRecipe(r);
    });

    actions.appendChild(viewBtn);
    actions.appendChild(shareBtn);

    body.appendChild(h3);
    body.appendChild(badge);
    body.appendChild(tags);
    body.appendChild(actions);

    item.appendChild(img);
    item.appendChild(body);
    item.appendChild(favBtn);

    item.addEventListener('click', () => { lastFocusEl = item; openLightbox(r, { push: true }); });
    item.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        lastFocusEl = item;
        openLightbox(r, { push: true });
        ev.preventDefault();
      }
    });

    galleryEl.appendChild(item);
  }

  resultsCount.textContent = `Wyniki: ${recipes.length}`;
}

function toggleFav(id, btnEl) {
  const favs = store.favs;
  if (favs.has(id)) {
    favs.delete(id);
  } else {
    favs.add(id);
  }
  store.favs = favs;
  if (btnEl) {
    const active = favs.has(id);
    btnEl.classList.toggle('active', active);
    btnEl.setAttribute('aria-pressed', active ? 'true' : 'false');
    btnEl.textContent = active ? '♥' : '♡';
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
searchInput?.addEventListener('input', applyFilters);
categorySelect?.addEventListener('change', applyFilters);
favOnly?.addEventListener('change', applyFilters);

// --- LIGHTBOX & SHARE ---
const lb = document.getElementById('lightbox');
const lbClose = lb.querySelector('.close');
const lbImg = lb.querySelector('.lightbox-image');
const lbCap = lb.querySelector('.lightbox-caption');
const shareNative = document.getElementById('share-native');
const shareFb = document.getElementById('share-fb');
const shareX = document.getElementById('share-x');
const shareCopy = document.getElementById('share-copy');

function openLightbox(recipe, { push = false } = {}) {
  currentRecipe = recipe;
  lbImg.src = recipe.img;
  lbImg.alt = recipe.title;
  lbCap.innerHTML = `<strong>${recipe.title}</strong><br>${recipe.desc}<br><em>Kategoria:</em> ${recipe.category} • ${recipe.tags.map(t => '#'+t).join(' ')}`;
  lb.classList.remove('hidden');
  lb.setAttribute('aria-hidden', 'false');

  // Focus to close button for a11y
  lbClose.focus();

  // Historia i URL param
  const url = new URL(window.location.href);
  url.searchParams.set('r', recipe.id);
  if (push) {
    history.pushState({ lb: true, id: recipe.id }, '', url);
  } else {
    history.replaceState({ lb: true, id: recipe.id }, '', url);
  }

  setShareLinks({ title: recipe.title, text: recipe.desc, url: url.toString() });
}

function closeLightbox({ pop = true } = {}) {
  lb.classList.add('hidden');
  lb.setAttribute('aria-hidden', 'true');
  const wasFocused = lastFocusEl;
  currentRecipe = null;

  if (pop) {
    if (history.state && history.state.lb) {
      closeFromCode = true;
      history.back();
    } else {
      const url = new URL(window.location.href);
      url.searchParams.delete('r');
      history.replaceState({}, '', url);
    }
  } else {
    const url = new URL(window.location.href);
    url.searchParams.delete('r');
    history.replaceState({}, '', url);
  }

  // Restore focus
  if (wasFocused && typeof wasFocused.focus === 'function') {
    setTimeout(() => wasFocused.focus(), 0);
  }
}

lb.addEventListener('click', (e) => {
  if (e.target === lb) closeLightbox();
});
lbClose.addEventListener('click', () => closeLightbox());
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
  const shareData = {
    title: recipe.title,
    text: recipe.desc,
    url: url.toString()
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    openLightbox(recipe, { push: true });
  }
}

function setShareLinks({ title, text, url }) {
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + ' — ' + text)}`;
  shareFb.href = fbUrl;
  shareX.href = xUrl;
}

shareNative.addEventListener('click', () => {
  if (!currentRecipe) return;
  shareRecipe(currentRecipe);
});
shareCopy.addEventListener('click', async () => {
  if (!currentRecipe) return;
  const url = new URL(window.location.href);
  url.searchParams.set('r', currentRecipe.id);
  try {
    await navigator.clipboard.writeText(url.toString());
    shareCopy.textContent = 'Skopiowano!';
    setTimeout(() => (shareCopy.textContent = 'Kopiuj link'), 1500);
  } catch {}
});

// --- BACK / HISTORY ---
const hasHistory = () => (window.history.length > 1);

backBtn?.addEventListener('click', () => {
  if (!lb.classList.contains('hidden')) {
    closeLightbox();
    return;
  }
  if (hasHistory()) {
    history.back();
  } else {
    // fallback: wyczyść filtry i przewiń do góry
    if (searchInput) searchInput.value = '';
    if (categorySelect) categorySelect.value = 'all';
    if (favOnly) favOnly.checked = false;
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

window.addEventListener('popstate', (e) => {
  const hasParam = new URL(window.location.href).searchParams.has('r');
  if (!hasParam || (e.state && !e.state.lb)) {
    if (!lb.classList.contains('hidden')) {
      closeLightbox({ pop: false });
    }
  }
  if (closeFromCode) {
    const url = new URL(window.location.href);
    url.searchParams.delete('r');
    history.replaceState({}, '', url);
    closeFromCode = false;
  }
});

// --- SCROLL TO TOP ---
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) toTopBtn?.classList.add('show');
  else toTopBtn?.classList.remove('show');
});
toTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// --- INIT ---
window.addEventListener('DOMContentLoaded', () => {
  // Theme
  applyTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (store.theme === 'auto') applyTheme();
  });

  // Render
  render(RECIPES);

  // Open via URL param
  const params = new URLSearchParams(window.location.search);
  const id = params.get('r');
  if (id) {
    const found = RECIPES.find(r => r.id === id);
    if (found) openLightbox(found, { push: false });
  }

  // Initial filters
  applyFilters();
});
