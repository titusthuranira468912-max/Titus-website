// ==== Clock Variables ====
const hourLinks = document.querySelectorAll(".hour-link");
const clockCenter = document.querySelector("#clock-center");
const backButton = document.querySelector("#back-home");
const body = document.body;

// Ticking sound
const tickSound = new Audio("tick.mp3");

// Theme toggle
const themeToggle = document.querySelector("#theme-toggle");

// ==== Clock Update Function ====
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Tick sound
    tickSound.currentTime = 0;
    tickSound.play();

    // Highlight 6 PM links
    if (hours === 18) {
        hourLinks.forEach(link => link.classList.add("highlight"));
    } else {
        hourLinks.forEach(link => link.classList.remove("highlight"));
    }

    // Rotate links around clock (if using rotation animation)
    hourLinks.forEach((link, i) => {
        const angle = (i * 30) - 90; // 12 links, 360/12 = 30deg
        const radius = 150; // adjust radius as needed
        const x = radius * Math.cos(angle * Math.PI / 180);
        const y = radius * Math.sin(angle * Math.PI / 180);
        link.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Update center clock text (optional digital display)
    if (clockCenter) {
        clockCenter.textContent = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }
}

// ==== Theme Toggle ====
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
    });
}

// ==== Back Home Button ====
if (backButton) {
    backButton.addEventListener("click", () => {
        window.location.href = "index.html"; // change if your homepage URL differs
    });
}

// ==== Initial Call ====
updateClock();

// ==== Update Every Second ====
setInterval(updateClock, 1000);
