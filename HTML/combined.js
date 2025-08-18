document.addEventListener('DOMContentLoaded', () => {

  /*-----------------------------------------
   1. About Section – Toggle Read More
  -----------------------------------------*/
  const aboutToggle = document.getElementById('about-toggle');
  if (aboutToggle) {
    aboutToggle.addEventListener('click', () => {
      const extraText = document.getElementById('about-extra');
      if (extraText.style.display === 'block') {
        extraText.style.display = 'none';
        aboutToggle.textContent = 'Read More';
      } else {
        extraText.style.display = 'block';
        aboutToggle.textContent = 'Read Less';
      }
    });
  }


  /*-----------------------------------------
   2. Resume Section – Tab Navigation
  -----------------------------------------*/
  const resumeTabs = document.querySelectorAll('.resume-tab');
  const resumeContents = document.querySelectorAll('.resume-content');
  resumeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      resumeContents.forEach(c => c.style.display = c.id === target ? 'block' : 'none');
      resumeTabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');
    });
  });


  /*-----------------------------------------
   3. Motivation Section – Quote Slider
  -----------------------------------------*/
  const quotes = document.querySelectorAll('.quote');
  let quoteIndex = 0;
  function showQuote(index) {
    quotes.forEach((q, i) => q.style.display = i === index ? 'block' : 'none');
  }
  if (quotes.length > 0) {
    showQuote(quoteIndex);
    setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      showQuote(quoteIndex);
    }, 7000); // change quote every 7s
  }


  /*-----------------------------------------
   4. Testimonials Slider
  -----------------------------------------*/
  const testimonials = document.querySelectorAll('.testimonial-card');
  let testimonialIndex = 0;
  function showTestimonial(index) {
    testimonials.forEach((t, i) => t.style.display = i === index ? 'block' : 'none');
  }
  if (testimonials.length > 0) {
    showTestimonial(testimonialIndex);
    setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      showTestimonial(testimonialIndex);
    }, 8000);
  }


  /*-----------------------------------------
   5. Skills Section – Animated Progress Bars
  -----------------------------------------*/
  const skillBars = document.querySelectorAll('.skill-bar');
  function fillSkills() {
    skillBars.forEach(bar => {
      const percent = bar.dataset.percent;
      bar.style.width = percent;
    });
  }
  window.addEventListener('load', fillSkills);


  /*-----------------------------------------
   6. Contact / Comment Form – Validation
  -----------------------------------------*/
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      alert('Thank you for your message!');
      contactForm.reset();
    });
  }


  /*-----------------------------------------
   7. Bible App (KJV) – Verse Search & Display
  -----------------------------------------*/
  const bibleInput = document.getElementById('bible-input');
  const bibleDisplay = document.getElementById('bible-display');
  if (bibleInput && bibleDisplay) {
    bibleInput.addEventListener('input', () => {
      const query = bibleInput.value.toLowerCase();
      // Placeholder: Use dummy verse for now
      if (query.length > 0) {
        bibleDisplay.textContent = `"For God so loved the world..." (John 3:16)`; 
      } else {
        bibleDisplay.textContent = '';
      }
    });
  }


  /*-----------------------------------------
   8. Bible Studies – Expandable Cards
  -----------------------------------------*/
  const studyCards = document.querySelectorAll('.study-card');
  studyCards.forEach(card => {
    const toggle = card.querySelector('.study-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const extra = card.querySelector('.study-extra');
        if (extra.style.display === 'block') {
          extra.style.display = 'none';
          toggle.textContent = 'Read More';
        } else {
          extra.style.display = 'block';
          toggle.textContent = 'Read Less';
        }
      });
    }
  });

});
