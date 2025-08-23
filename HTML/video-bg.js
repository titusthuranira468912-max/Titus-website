const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const tickSound = document.getElementById('tick-sound');
const links = document.querySelectorAll('.clock-link');
const themeToggle = document.getElementById('theme-toggle');

function updateClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour + minute / 60) * 30;
  const minuteDeg = (minute + second / 60) * 6;
  const secondDeg = second * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

  tickSound.play();

  const fullHour = now.getHours();
  if (fullHour >= 18 || fullHour < 6) {
    links.forEach(link => link.classList.add('glow'));
  } else {
    links.forEach(link => link.classList.remove('glow'));
  }
}

setInterval(updateClock, 1000);
updateClock();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

