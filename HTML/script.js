// ⏰ Clock and Day Function
function updateClockAndDay() {
  const clock = document.getElementById('clock');
  const day = document.getElementById('day');

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = weekdays[now.getDay()];

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  day.textContent = currentDay;
}

// Update clock every second
setInterval(updateClockAndDay, 1000);
updateClockAndDay(); // initial call

// 📸 Image Interactivity
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-img');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      alert(`You clicked: ${img.alt}`);
      // Future: open fullscreen view or start slideshow
    });
  });

  // 🎯 Placeholder for future image map functionality
  // e.g., detect areas within an image and trigger something
});
