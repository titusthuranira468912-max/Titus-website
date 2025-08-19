document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-img');

  const gallery = document.querySelector('.photo-gallery');
  gallery.style.display = 'grid';
  gallery.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
  gallery.style.gap = '20px';
  gallery.style.padding = '20px';
  gallery.style.justifyContent = 'center';
  gallery.style.alignItems = 'center';

  // Create full-screen modal
  const modal = document.createElement('div');
  modal.id = 'fullscreen-modal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = 10000;
  modal.style.cursor = 'pointer';
  modal.style.transition = 'opacity 0.5s';
  modal.style.opacity = 0;

  const modalImg = document.createElement('img');
  modalImg.style.maxWidth = '90%';
  modalImg.style.maxHeight = '90%';
  modalImg.style.borderRadius = '10px';
  modalImg.style.boxShadow = '0 8px 20px rgba(0,0,0,0.5)';
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  // Setup image clicks for modal
  slides.forEach((slide) => {
    slide.style.position = 'static'; // Cancel absolute overlay
    slide.style.opacity = 1; // Always visible
    slide.style.width = '100%';
    slide.style.maxWidth = '100%';
    slide.style.margin = '0';
    slide.style.cursor = 'pointer';

    slide.addEventListener('click', () => {
      modalImg.src = slide.src;
      modal.style.display = 'flex';
      setTimeout(() => modal.style.opacity = 1, 10);
    });

    // Optional: double-click behavior
    slide.addEventListener('dblclick', () => {
      alert(`You double-clicked on ${slide.alt || 'an image'}. Image map actions can go here.`);
    });
  });

  // Close modal on click
  modal.addEventListener('click', () => {
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = 'none', 300);
  });
});
