document.addEventListener('DOMContentLoaded', () => {
  // 5 pozycji + łatwe miejsce na kolejne 5
  const galleryData = [
    {
      src: 'images/salatka_krolewska.png',
      title: 'Sałatka Królewska z Selerem i Ananasem',
      desc: 'Świeża sałatka z selera konserwowego, ananasa, szynki i warzyw. Tip: dodaj świeżą bazylię.',
      category: 'Przekąski',
      tags: ['sałatka', 'seler', 'ananas', 'szynka'],
      ingredients: ['seler konserwowy', 'ananas', 'szynka', 'kukurydza', 'jajka', 'majonez', 'por', 'groszek']
    },
    {
      src: 'images/sledzie_burak.png',
      title: 'Śledzie z Burakiem w Warstwach',
      desc: 'Kolorowe warstwy śledzia, buraka, jabłka i majonezu. Tip: lepszy smak po schłodzeniu.',
      category: 'Przekąski',
      tags: ['śledzie', 'buraki', 'warstwowa', 'wigilia'],
      ingredients: ['śledzie', 'buraki', 'cebula', 'jabłko', 'majonez', 'jajka']
    },
    {
      src: 'images/salatka_gerbek.png',
      title: 'Sałatka Gerbek',
      desc: 'Rustykalna sałatka z ziemniaków, selera i pietruszki. Tip: dodaj ogórka kiszonego.',
      category: 'Przekąski',
      tags: ['sałatka', 'ziemniaki', 'seler'],
      ingredients: ['ziemniaki', 'seler', 'pietruszka', 'cebula', 'przyprawy']
    },
    {
      src: 'images/makaron_tofu.png',
      title: 'Makaron z Warzywami, Tofu i Orzechami',
      desc: 'Makaron z tofu, marchewką, orzechami i aromatycznymi przyprawami. Tip: posyp kolendrą.',
      category: 'Dania główne',
      tags: ['makaron', 'tofu', 'wegetariańskie', 'orzechy'],
      ingredients: ['makaron', 'tofu', 'marchew', 'cebula', 'czosnek', 'sos sojowy', 'sweet chili', 'curry', 'cukier trzcinowy', 'orzechy']
    },
    {
      src: 'images/hummus.png',
      title: 'Pasta z Ciecierzycy (Hummus)',
      desc: 'Kremowa pasta z ciecierzycy z oliwą i czosnkiem. Tip: dodaj tahini i kumin.',
      category: 'Przekąski',
      tags: ['pasta', 'hummus', 'wegańskie', 'smarowidło'],
      ingredients: ['ciecierzyca', 'czosnek', 'oliwa', 'cytryna', 'sól']
    },

    // TODO: 5 kolejnych przepisów
    // {
    //   src: 'images/zupa_brokolowa.png',
    //   title: 'Zupa Krem z Brokułów z Grzankami',
    //   desc: 'Aksamitna zupa krem z brokułów, podawana z chrupiącymi grzankami.',
    //   category: 'Zupy',
    //   tags: ['zupa', 'brokuły', 'krem'],
    //   ingredients: ['brokuły', 'bulion', 'śmietanka', 'czosnek', 'grzanki']
    // },
  ];

  const gallery = document.getElementById('image-gallery');
  const searchInput = document.getElementById('search-input');
  const categorySelect = document.getElementById('category-select');
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('.lightbox-image');
  const lbCap = lightbox.querySelector('.lightbox-caption');
  const lbClose = lightbox.querySelector('.close');

  function matchesText(item, text) {
    if (!text) return true;
    const t = text.toLowerCase();
    const inTitle = item.title.toLowerCase().includes(t);
    const inTags = (item.tags || []).some(tag => tag.toLowerCase().includes(t));
    const inIngs = (item.ingredients || []).some(ing => ing.toLowerCase().includes(t));
    return inTitle || inTags || inIngs;
  }

  function matchesCategory(item, cat) {
    return cat === 'all' || item.category === cat;
  }

  function filterAndRender() {
    const text = searchInput.value.trim();
    const cat = categorySelect.value;
    const filtered = galleryData.filter(item => matchesText(item, text) && matchesCategory(item, cat));
    renderGallery(filtered);
  }

  function renderGallery(items) {
    gallery.innerHTML = '';
    if (!items.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Brak wyników. Spróbuj innej frazy lub kategorii.';
      empty.style.gridColumn = '1 / -1';
      gallery.appendChild(empty);
      return;
    }
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy"/>
        <p>${item.title}</p>
      `;
      card.addEventListener('click', () => openLightbox(item));
      gallery.appendChild(card);
    });
  }

  function openLightbox(item) {
    lbImg.src = item.src;
    lbImg.alt = item.title;
    lbCap.textContent = item.desc;
    lightbox.classList.remove('hidden');
  }

  lbClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lbImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lbImg.src = '';
    }
  });

  searchInput.addEventListener('input', filterAndRender);
  categorySelect.addEventListener('change', filterAndRender);

  // Start
  renderGallery(galleryData);
});
