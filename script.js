document.addEventListener('DOMContentLoaded', () => {
  const galleryData = [
    { src: 'images/photo1.jpg', title: 'Bruschetta', category: 'przekąski', desc: 'Chrupiące pieczywo z pomidorami i bazylią.' },
    { src: 'images/photo2.jpg', title: 'Spaghetti Bolognese', category: 'dania główne', desc: 'Makaron z sosem mięsnym.' },
    { src: 'images/photo3.jpg', title: 'Zupa krem z dyni', category: 'zupy', desc: 'Aromatyczna zupa z dyni z imbirem.' },
    { src: 'images/photo4.jpg', title: 'Sernik na zimno', category: 'desery', desc: 'Delikatny sernik z owocami.' }
  ];

  const gallery = document.getElementById('image-gallery');
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderGallery(items) {
    gallery.innerHTML = '';
    items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');
      div.dataset.category = item.category;
      div.innerHTML = `<img src="${item.src}" alt="${item.title}" class="enhanced" /><p>${item.title}</p>`;
      div.addEventListener('click', () => openLightbox(item));
      gallery.appendChild(div);
    });
  }

  function openLightbox(item) {
    const lightbox = document.getElementById('lightbox');
    const img = lightbox.querySelector('.lightbox-image');
    const caption = lightbox.querySelector('.lightbox-caption');
    img.src = item.src;
    caption.textContent = item.desc;
    document.getElementById('share-email').href = `mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(item.desc + ' ' + window.location.href)}`;
    document.getElementById('share-whatsapp').href = `https://wa.me/?text=${encodeURIComponent(item.title + ' - ' + item.desc + ' ' + window.location.href)}`;
    lightbox.classList.remove('hidden');
  }

  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').classList.add('hidden');
  });

  searchInput.addEventListener('input', () => {
    const val = searchInput.value.toLowerCase();
    const filtered = galleryData.filter(item => item.title.toLowerCase().includes(val));
    renderGallery(filtered);
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      if (filter === 'all') {
        renderGallery(galleryData);
      } else {
        renderGallery(galleryData.filter(item => item.category === filter));
      }
    });
  });

  renderGallery(galleryData);
});
