// Initialize EmailJS
emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your ID

// Submit Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };

  // Send email
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert('Message sent! Thank you.');
      // Save locally (for feedback viewer)
      let feedbacks = JSON.parse(localStorage.getItem('feedbacks') || "[]");
      feedbacks.push(formData);
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
      contactForm.reset();
    })
    .catch(err => alert('Error sending email: ' + err));
});

// Feedback Viewer (Private)
const FEEDBACK_PASSWORD = "YourSecretPassword"; // Change this
const loginBtn = document.getElementById('feedback-login-btn');
const passwordInput = document.getElementById('feedback-password');
const feedbackList = document.getElementById('feedback-list');
const feedbackLogin = document.getElementById('feedback-login');

loginBtn.addEventListener('click', () => {
  if(passwordInput.value === FEEDBACK_PASSWORD){
    feedbackLogin.style.display = 'none';
    feedbackList.style.display = 'block';
    loadFeedbacks();
  } else {
    alert('Incorrect password!');
  }
});

function loadFeedbacks(){
  const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || "[]");
  feedbackList.innerHTML = '';
  feedbacks.forEach(fb => {
    const div = document.createElement('div');
    div.classList.add('feedback-item');
    div.innerHTML = `<strong>${fb.name}</strong> (${fb.email}): <p>${fb.message}</p>`;
    feedbackList.appendChild(div);
  });
}
