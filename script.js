// Data: 10 przepisów
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
    id: "zapieknka",
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
  }
];

const galleryEl = document.getElementById('image-gallery');
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const backBtn = document.getElementById('back-btn');

// Helpers
const hasHistory = () => (window.history.length > 1);

// Render karty przepisów (z placeholderami podczas pierwszego ładowania)
function render(recipes) {
  galleryEl.innerHTML = '';

  if (!recipes.length) {
    const empty = document.createElement('p');
    empty.textContent = 'Brak wyników. Spróbuj innego wyszukiwania.';
    empty.style.gridColumn = '1 / -1';
    galleryEl.appendChild(empty);
    return;
  }

  for (const r of recipes) {
    const item = document.createElement('article');
    item.className = 'gallery-item';
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Otwórz przepis: ${r.title}`);

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = r.img;
    img.alt = r.title;
    img.onerror = () => {
      img.src = `https://picsum.photos/seed/${encodeURIComponent(r.id)}/800/600`;
    };

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

    item.addEventListener('click', () => openLightbox(r, { push: true }));
    item.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        openLightbox(r, { push: true });
        ev.preventDefault();
      }
    });

    galleryEl.appendChild(item);
  }
}

// Filtrowanie
function applyFilters() {
  const q = (searchInput?.value || '').toLowerCase().trim();
  const cat = categorySelect?.value || 'all';
  const filtered = RECIPES.filter(r => {
    const inCat = cat === 'all' || r.category === cat;
    const hay = [r.title, r.category, r.desc, ...(r.tags || [])].join(' ').toLowerCase();
    const inQuery = !q || hay.includes(q);
    return inCat && inQuery;
  });
  render(filtered);
}

searchInput?.addEventListener('input', applyFilters);
categorySelect?.addEventListener('change', applyFilters);

// Lightbox & udostępnianie
const lb = document.getElementById('lightbox');
const lbClose = lb.querySelector('.close');
const lbImg = lb.querySelector('.lightbox-image');
const lbCap = lb.querySelector('.lightbox-caption');
const shareNative = document.getElementById('share-native');
const shareFb = document.getElementById('share-fb');
const shareX = document.getElementById('share-x');
const shareCopy = document.getElementById('share-copy');

let currentRecipe = null;
let closeFromCode = false;

function openLightbox(recipe, { push = false } = {}) {
  currentRecipe = recipe;
  lbImg.src = recipe.img;
  lbImg.alt = recipe.title;
  lbCap.innerHTML = `<strong>${recipe.title}</strong><br>${recipe.desc}<br><em>Kategoria:</em> ${recipe.category} • ${recipe.tags.map(t => '#'+t).join(' ')}`;
  lb.classList.remove('hidden');
  lb.setAttribute('aria-hidden', 'false');

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
  currentRecipe = null;

  if (pop) {
    // Cofnij tylko jeśli jesteśmy w stanie "lightbox" w historii
    if (history.state && history.state.lb) {
      closeFromCode = true;
      history.back();
    } else {
      // usuń parametr r
      const url = new URL(window.location.href);
      url.searchParams.delete('r');
      history.replaceState({}, '', url);
    }
  } else {
    const url = new URL(window.location.href);
    url.searchParams.delete('r');
    history.replaceState({}, '', url);
  }
}

lb.addEventListener('click', (e) => {
  if (e.target === lb) closeLightbox();
});
lbClose.addEventListener('click', () => closeLightbox());
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lb.classList.contains('hidden')) closeLightbox();
});

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

// Back button (cofanie do poprzedniego ekranu)
backBtn?.addEventListener('click', () => {
  if (!lb.classList.contains('hidden')) {
    // jeżeli otwarty lightbox — zamknij go i cofaj w historii
    closeLightbox();
    return;
  }
  if (hasHistory()) {
    history.back();
  } else {
    // fallback: wyczyść filtry i przewiń do góry
    if (searchInput) searchInput.value = '';
    if (categorySelect) categorySelect.value = 'all';
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Obsługa wstecz/zamknij przez przycisk urządzenia
window.addEventListener('popstate', (e) => {
  // jeżeli wychodzimy ze stanu lightbox -> zamknij modal
  const hasParam = new URL(window.location.href).searchParams.has('r');
  if (!hasParam || (e.state && !e.state.lb)) {
    if (!lb.classList.contains('hidden')) {
      // zamykamy bez kolejnego cofania
      closeLightbox({ pop: false });
    }
  }

  if (closeFromCode) {
    // po zamknięciu lightboxa przez history.back, usuń parametr
    const url = new URL(window.location.href);
    url.searchParams.delete('r');
    history.replaceState({}, '', url);
    closeFromCode = false;
  }
});

// Inicjalizacja
window.addEventListener('DOMContentLoaded', () => {
  // Renderuj i ustaw placeholdery (na mobilkach bez migotania)
  render(RECIPES);

  // Jeżeli jest parametr r= w URL — otwórz odpowiedni przepis bez dodawania kolejnego wpisu do historii
  const params = new URLSearchParams(window.location.search);
  const id = params.get('r');
  if (id) {
    const found = RECIPES.find(r => r.id === id);
    if (found) openLightbox(found, { push: false });
  }

  // Początkowe zastosowanie filtrów (wyśrodkowanie całości)
  applyFilters();
});
