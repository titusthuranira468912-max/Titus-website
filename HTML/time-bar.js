const hourHand = document.querySelector('.time-bar-hour-hand');
const minuteHand = document.querySelector('.time-bar-minute-hand');
const secondHand = document.querySelector('.time-bar-second-hand');
const tickSound = document.getElementById('time-bar-tick');
const themeToggle = document.getElementById('time-bar-toggle');
const allLinks = document.querySelectorAll('.time-bar-link');

function updateTimeBar() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;

  if (tickSound) tickSound.play();

  // Highlight at 6:00 PM
  const isSixPM = now.getHours() === 18 && now.getMinutes() === 0;
  allLinks.forEach(link => {
    link.classList.toggle('time-bar-glow', isSixPM);
  });
}

// Update hands every second
setInterval(updateTimeBar, 1000);
updateTimeBar();

// Theme switcher
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('time-bar-light');
  document.body.classList.toggle('time-bar-dark');
});

// Hide splash and show clock after 3 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('time-bar-splash').style.display = 'none';
    document.getElementById('time-bar-main').style.display = 'flex';
  }, 3000);
});

