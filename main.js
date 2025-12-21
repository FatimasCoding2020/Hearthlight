
const fireGlow = document.getElementById("fire-glow");
// 🔥 FIRE BODY MOVEMENT (PRIMARY FLAME MOTION)
gsap.timeline({ repeat: -1, yoyo: true })
  .to("#fire-glow", {
    scaleX: 1.15,
    scaleY: 1.05,
    x: 4,
    y: -6,
    duration: 1.1,
    ease: "sine.inOut"
  })
  .to("#fire-glow", {
    scaleX: 0.95,
    scaleY: 1.1,
    x: -3,
    y: 4,
    duration: 0.9,
    ease: "sine.inOut"
  });

// 🔥 FIRE — ALWAYS ON (SINGLE TIMELINE, NO CONFLICTS)
gsap.timeline({ repeat: -1, yoyo: true })
  .to(fireGlow, {
    scale: 1.12,
    x: 6,
    y: -4,
    opacity: 0.9,
    duration: 0.9,
    ease: "sine.inOut"
  })
  .to(fireGlow, {
    scale: 1.05,
    x: -4,
    y: 2,
    opacity: 0.65,
    duration: 0.8,
    ease: "sine.inOut"
  });

  gsap.to("#heat-shimmer", {
  x: "+=6",
  y: "-=4",
  repeat: -1,
  yoyo: true,
  duration: 1.4,
  ease: "sine.inOut"
});

gsap.to("#heat-shimmer", {
  y: "-=10",
  scaleX: 1.08,
  scaleY: 0.92,
  repeat: -1,
  yoyo: true,
  duration: 1.2,
  ease: "sine.inOut"
});


  // 🔥 EMBERS — RISING FIRE PARTICLES
const embersContainer = document.getElementById("embers");

function createEmber() {
  const ember = document.createElement("div");
  ember.className = "ember";
  embersContainer.appendChild(ember);

  // 🔥 START DEEPER & HOTTER
  gsap.set(ember, {
    x: Math.random() * embersContainer.offsetWidth,
    y: embersContainer.offsetHeight - 6,   // ⬅️ INSIDE FIRE BED
    scale: Math.random() * 0.8 + 0.6,       // ⬅️ BIGGER FLAMES
    opacity: Math.random() * 0.6 + 0.6
  });

  // 🔥 RISE STRONGER + WILDER
 gsap.to(ember, {
  y: -45 - Math.random() * 20,  // ⬆️ higher but capped
  x: "+=" + (Math.random() * 28 - 14),
  opacity: 0,
  scale: 0,
  duration: Math.random() * 1.7 + 1.1,
  ease: "power1.out",
  onComplete: () => ember.remove()
});
}


// 🔥 SPAWN FASTER = INTENSE FIRE
setInterval(createEmber, 70);



const room = document.getElementById("room");
const hotspot = document.getElementById("fireplace-hotspot");

const treeSparkles = document.getElementById("tree-sparkles");

/* ✨ WHITE TWINKLES (MORE DENSE) */
for (let i = 0; i < 48; i++) {
  const sparkle = document.createElement("div");
  sparkle.className = "tree-sparkle";
  treeSparkles.appendChild(sparkle);

  gsap.set(sparkle, {
  x: Math.random() * treeSparkles.offsetWidth,
  y: Math.random() * treeSparkles.offsetHeight * 0.7, // ⬅️ TREE ONLY
  scale: Math.random() * 0.6 + 0.4
});


  gsap.to(sparkle, {
  opacity: Math.random() * 0.8 + 0.4, // brighter
  scale: "+=0.7",                     // stronger pulse
  duration: Math.random() * 1.4 + 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  delay: Math.random() * 2.5
});
}

/* 🎄 COLORED FAIRY LIGHTS */
const lightColors = [
  "rgba(255,80,80,1)",   // red
  "rgba(255,200,120,1)", // gold
  "rgba(120,220,160,1)"  // green
];

for (let i = 0; i < 22; i++) {
  const light = document.createElement("div");
  light.className = "tree-light";
  treeSparkles.appendChild(light);

  const color = lightColors[Math.floor(Math.random() * lightColors.length)];
  light.style.background = color;
  light.style.color = color;

  gsap.set(light, {
  x: Math.random() * treeSparkles.offsetWidth,
  y: Math.random() * treeSparkles.offsetHeight * 0.7, // ⬅️ UP
  scale: Math.random() * 0.9 + 0.6
});

  gsap.to(light, {
  opacity: Math.random() * 0.9 + 0.4,
  scale: "+=0.5",
  duration: Math.random() * 2 + 1,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  delay: Math.random() * 3
});

}



const snowContainer = document.getElementById("snow");

for (let i = 0; i < 35; i++) {
  const flake = document.createElement("div");
  flake.className = "snowflake";
  snowContainer.appendChild(flake);

  gsap.set(flake, {
    x: Math.random() * snowContainer.offsetWidth,
    y: Math.random() * snowContainer.offsetHeight,
    scale: Math.random() * 0.6 + 0.3,
    opacity: Math.random() * 0.6 + 0.4
  });

  // ❄️ FALL DOWN
  gsap.to(flake, {
    y: snowContainer.offsetHeight + 20,
    duration: Math.random() * 6 + 6,
    repeat: -1,
    ease: "none",
    delay: Math.random() * 5
  });

  // ✨ SHIMMER
  gsap.to(flake, {
    opacity: Math.random() * 0.6 + 0.4,
    scale: Math.random() * 0.6 + 0.8,
    duration: Math.random() * 0.6 + 0.3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // 🌬️ SIDE DRIFT
  gsap.to(flake, {
    x: "+=" + (Math.random() * 80 - 40),
    duration: Math.random() * 8 + 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}



// LOGO INTRO ANIMATION
gsap.from("#logo", {
  opacity: 0,
  duration: 1.6,
  ease: "power3.out",
  delay: 0.4
});



const cursor = document.getElementById("cursor");
const cursorText = cursor.querySelector("span");

/* Disable cursor on touch devices */
if (window.matchMedia("(hover: hover)").matches) {

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let posX = mouseX;
  let posY = mouseY;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, {
      opacity: 1,
      duration: 0.3
    });
  });

  /* Smooth lag motion */
  gsap.ticker.add(() => {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    gsap.set(cursor, {
      x: posX,
      y: posY
    });
  });

  /* Hotspot hover effects */
  hotspot.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  hotspot.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });

  /* Click pulse */
  document.addEventListener("mousedown", () => {
    gsap.to(cursor, {
      scale: 0.85,
      duration: 0.1
    });
  });

  document.addEventListener("mouseup", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.2
    });
  });

}

/* ===============================
   🎵 AMBIENT SOUND SYSTEM
================================ */

const soundDeck = document.getElementById("sound-deck");
const soundCards = document.querySelectorAll(".sound-card");

/* Load sounds */
const sounds = {
  fire: new Audio("assets/audio/fireplace.mp3"),
  wind: new Audio("assets/audio/winter-wind.mp3"),
  music: new Audio("assets/audio/soft-carol.mp3")
};

/* Loop + base volumes */
Object.values(sounds).forEach(audio => {
  audio.loop = true;
  audio.volume = 0;
});

/* Cinematic fade helpers */
function fadeIn(audio, target = 0.8) {
  audio.volume = 0;
  audio.play();
  gsap.to(audio, {
    volume: target,
    duration: 1.2,
    ease: "sine.out"
  });
}

function fadeOut(audio) {
  gsap.to(audio, {
    volume: 0,
    duration: 1,
    ease: "sine.in",
    onComplete: () => audio.pause()
  });
}

/* Sound card interactions */
soundCards.forEach(card => {
  const key = card.dataset.sound;
  const audio = sounds[key];

  card.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    if (!isActive) {
      fadeIn(audio, key === "fire" ? 0.9 : key === "wind" ? 0.35 : 0.25);
      card.classList.add("active");
    } else {
      fadeOut(audio);
      card.classList.remove("active");
    }
  });
});

/* ===============================
   ✨ AUTO-HIDE SOUND UI
================================ */

let uiTimeout;

function showSoundDeck() {
  soundDeck.classList.add("active");
  clearTimeout(uiTimeout);

  uiTimeout = setTimeout(() => {
    soundDeck.classList.remove("active");
  }, 3200);
}

document.addEventListener("mousemove", showSoundDeck);
document.addEventListener("click", showSoundDeck);
