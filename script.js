document.addEventListener('DOMContentLoaded', () => {
  // Data: 5 placeholder recipe cards (replace images with final ones later)
  const galleryData = [
    { src: 'images/salatka_krolewska.png', title: 'Sałatka Królewska z Selerem i Ananasem', desc: 'Świeża sałatka z selera konserwowego, ananasa, szynki i warzyw.' },
    { src: 'images/sledzie_burak.png', title: 'Śledzie z Burakiem w Warstwach', desc: 'Kolorowe warstwy śledzia, buraka, jabłka i majonezu.' },
    { src: 'images/salatka_gerbek.png', title: 'Sałatka Gerbek', desc: 'Rustykalna sałatka z ziemniaków, selera i pietruszki.' },
    { src: 'images/makaron_tofu.png', title: 'Makaron z Warzywami, Tofu i Orzechami', desc: 'Makaron z tofu, marchewką, orzechami i aromatycznymi przyprawami.' },
    { src: 'images/hummus.png', title: 'Pasta z Ciecierzycy (Hummus)', desc: 'Kremowa pasta z ciecierzycy z oliwą i czosnkiem.' }
  ];

  const gallery = document.getElementById('image-gallery');
  const searchInput = document.getElementById('search-input');
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('.lightbox-image');
  const lbCap = lightbox.querySelector('.lightbox-caption');
  const lbClose = lightbox.querySelector('.close');

  function renderGallery(items) {
    gallery.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.innerHTML = \`
        <img src="\${item.src}" alt="\${item.title}" loading="lazy"/>
        <p>\${item.title}</p>
      \`;
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

  searchInput.addEventListener('input', () => {
    const val = searchInput.value.trim().toLowerCase();
    const filtered = galleryData.filter(item => item.title.toLowerCase().includes(val));
    renderGallery(filtered);
  });

  // Initial render
  renderGallery(galleryData);
});
