document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-img');
  let current = 0;
  let slideInterval;

  const gallery = document.querySelector('.photo-gallery');
  gallery.style.position = 'relative';

  // Create navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&#10094;';
  prevBtn.className = 'slideshow-btn prev';
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#10095;';
  nextBtn.className = 'slideshow-btn next';
  gallery.appendChild(prevBtn);
  gallery.appendChild(nextBtn);

  // Full-screen modal
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

  // Setup slides fade
  slides.forEach((slide, i) => {
    slide.style.position = 'absolute';
    slide.style.top = 0;
    slide.style.left = 0;
    slide.style.width = '100%';
    slide.style.transition = 'opacity 1s';
    slide.style.opacity = i === 0 ? 1 : 0;

    // Click for full-screen modal
    slide.addEventListener('click', () => {
      modalImg.src = slide.src;
      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = 1, 10);
    });

    // Double-click placeholder for image maps
    slide.addEventListener('dblclick', () => {
      alert(`You double-clicked on ${slide.alt}. Image map actions can go here.`);
    });
  });

  // Show slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? 1 : 0;
    });
    current = index;
  }

  // Next/Prev functions
  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  // Buttons
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // Modal close
  modal.addEventListener('click', () => {
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = 'none', 300);
  });

  // Slideshow interval
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  function pauseSlideShow() {
    clearInterval(slideInterval);
  }
  function resetInterval() {
    pauseSlideShow();
    startSlideShow();
  }

  gallery.addEventListener('mouseenter', pauseSlideShow);
  gallery.addEventListener('mouseleave', startSlideShow);

  startSlideShow();
});

