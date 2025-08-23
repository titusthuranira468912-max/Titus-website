// ==== Elements ====
const clockLinks = document.querySelectorAll(".clock-link");
const clockCenter = document.querySelector("#clock-center");
const backButton = document.querySelector("#back-home");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

// ==== Update Clock ====
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Optional: Digital display in center
    if (clockCenter) {
        clockCenter.textContent = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }

    // Highlight 6 PM links
    if (hours === 18) {
        clockLinks.forEach(link => link.classList.add("highlight"));
    } else {
        clockLinks.forEach(link => link.classList.remove("highlight"));
    }
}

// ==== Initial Call & Interval ====
updateClock();
setInterval(updateClock, 1000);

// ==== Back Home Button ====
if (backButton) {
    backButton.addEventListener("click", () => {
        window.location.href = "index.html"; // change if needed
    });
}

// ==== Theme Toggle ====
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
    });
}
