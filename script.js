/* ---------- BACKGROUND MUSIC ---------- */
const music = document.getElementById("bgMusic");

// Start muted (allowed)
music.volume = 0.3;
music.muted = true;
music.play().catch(() => {});

// Unmute on first user interaction
function enableMusic() {
  music.muted = false;
  music.play();
}

document.body.addEventListener("click", enableMusic, { once: true });
document.body.addEventListener("touchstart", enableMusic, { once: true });

/* ---------- BUTTON LOGIC ---------- */
const noBtn = document.querySelector(".no-button");
const yesBtn = document.querySelector(".yes-button");

const messages = [
  "Үнэхээр үү?",
  "Дахиад бод доо 🥺",
  "Битгий тэгээч 💔",
  "Зүрх минь өвдөж байна 😢",
  "За больё доо 😞"
];

let msgIndex = 0;

// Make NO run away immediately
setTimeout(runAway, 300);

noBtn.addEventListener("mouseenter", runAway);
noBtn.addEventListener("touchstart", runAway);

function runAway() {
  const x = Math.random() * 260 - 130;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noBtn.textContent = messages[msgIndex % messages.length];
  msgIndex++;

  // Grow YES
  const size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size * 1.4 + "px";
}

/* ---------- YES HANDLER (PAUSE MUSIC) ---------- */
function handleYes() {
  // Pause music BEFORE leaving page
  music.pause();
  music.currentTime = 0;

  window.location.href = "yes.html";
}

/* ---------- FLOATING HEARTS ---------- */
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const h = document.createElement("span");
  h.textContent = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = 3 + Math.random() * 2 + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 5000);
}, 300);