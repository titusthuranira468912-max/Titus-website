// Select elements
const clockLinks = document.querySelectorAll(".clock-link");
const clockCenter = document.querySelector("#clock-center");
const backButton = document.querySelector("#back-home");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

// Update clock function
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Optional digital display in center
    if (clockCenter) {
        clockCenter.textContent = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }

    // Highlight links at 6 PM
    if (hours === 18) {
        clockLinks.forEach(link => link.classList.add("highlight"));
    } else {
        clockLinks.forEach(link => link.classList.remove("highlight"));
    }
}

// Initial call + update every second
updateClock();
setInterval(updateClock, 1000);

// Back button
if (backButton) {
    backButton.addEventListener("click", () => {
        window.location.href = "index.html"; // change to your homepage
    });
}

// Theme toggle
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
    });
}
