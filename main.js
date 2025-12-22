const fireGlow = document.getElementById("fire-glow");
//  FIRE BODY MOVEMENT (PRIMARY FLAME MOTION)
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

//  FIRE — ALWAYS ON (SINGLE TIMELINE, NO CONFLICTS)
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


  //  EMBERS — RISING FIRE PARTICLES
const embersContainer = document.getElementById("embers");

function createEmber() {
  const ember = document.createElement("div");
  ember.className = "ember";
  embersContainer.appendChild(ember);

  //  START DEEPER & HOTTER
  gsap.set(ember, {
    x: Math.random() * embersContainer.offsetWidth,
    y: embersContainer.offsetHeight - 6,   // ⬅️ INSIDE FIRE BED
    scale: Math.random() * 0.8 + 0.6,       // ⬅️ BIGGER FLAMES
    opacity: Math.random() * 0.6 + 0.6
  });

  //  RISE STRONGER + WILDER
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


//  SPAWN FASTER = INTENSE FIRE
setInterval(createEmber, 140);



const room = document.getElementById("room");
const hotspot = document.getElementById("fireplace-hotspot");

const treeSparkles = document.getElementById("tree-sparkles");

/*  WHITE TWINKLES (MORE DENSE) */
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

/*  COLORED FAIRY LIGHTS */
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

  //  FALL DOWN
  gsap.to(flake, {
    y: snowContainer.offsetHeight + 20,
    duration: Math.random() * 6 + 6,
    repeat: -1,
    ease: "none",
    delay: Math.random() * 5
  });

  //  SHIMMER
  gsap.to(flake, {
    opacity: Math.random() * 0.6 + 0.4,
    scale: Math.random() * 0.6 + 0.8,
    duration: Math.random() * 0.6 + 0.3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  //  SIDE DRIFT
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






/* ===============================
    AMBIENT SOUND SYSTEM
================================ */

const soundDeck = document.getElementById("sound-deck");
const soundCards = document.querySelectorAll(".sound-card");
const audioMessage = document.getElementById("audio-message");
const audioMessageText = document.getElementById("audio-message-text");

function showAudioMessage(text) {
  audioMessageText.textContent = text;
  audioMessage.classList.remove("hidden");

  clearTimeout(audioMessage._timeout);
  audioMessage._timeout = setTimeout(() => {
    audioMessage.classList.add("hidden");
  }, 3000);
}

//  USER AUDIO LIMITS
const MAX_SIZE_MB = 10;        // 10 MB max file size
const MAX_DURATION = 15 * 60; // 15 minutes max duration


/* Load sounds */
const sounds = {
  fire: new Audio("assets/audio/fireplace.mp3"),
  wind: new Audio("assets/audio/winter-wind.mp3"),
  music: new Audio("assets/audio/soft-carol.mp3"),

  "warm-winter": new Audio("assets/audio/warm-winter.mp3"),
  "happy-jazz": new Audio("assets/audio/happy-jazz.mp3"),
  "snowfall-jazz": new Audio("assets/audio/snowfall-jazz.mp3"),
  "snowy-night": new Audio("assets/audio/snowy-night.mp3"),
  "sound-smooth": new Audio("assets/audio/sound-smooth.mp3"),
  "winter-jazz": new Audio("assets/audio/winter-jazz.mp3"),
  "relax-holiday": new Audio("assets/audio/relax-holiday.mp3")
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
    const name = card.querySelector(".sound-title").textContent;

    if (!isActive) {

      // 🔥 stop previously playing sound
      if (currentAudio && currentAudio !== audio) {
        fadeOut(currentAudio);
        if (currentCard) currentCard.classList.remove("active");
      }

      fadeIn(audio, key === "fire" ? 0.9 : key === "wind" ? 0.35 : 0.25);
      card.classList.add("active");
      showActiveSound(name, audio, card);

    } else {
      fadeOut(audio);
      card.classList.remove("active");
      hideActiveSound();
    }
  });
});


const addSoundBtn = document.getElementById("add-sound");
const fileInput = document.getElementById("sound-file-input");

addSoundBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  //  FILE SIZE CHECK
if (file.size > MAX_SIZE_MB * 1024 * 1024) {
  showAudioMessage(`Audio file too large (max ${MAX_SIZE_MB}MB)`);

  fileInput.value = "";
  return;
}

const url = URL.createObjectURL(file);
const audio = new Audio(url);

//  DURATION CHECK (wait for metadata)
audio.addEventListener("loadedmetadata", () => {
  if (audio.duration > MAX_DURATION) {
    showAudioMessage("Audio too long (max 15 minutes)");

    fileInput.value = "";
    return;
  }
audio.loop = true;
audio.volume = 0;

  //  EVERYTHING YOU ALREADY HAVE GOES INSIDE HERE

  const id = `user-sound-${Date.now()}`;
  const cleanName = file.name.replace(/\.[^/.]+$/, "");

  sounds[id] = audio;

  const card = document.createElement("button");
  card.className = "sound-card";
  card.dataset.sound = id;

  card.innerHTML = `
    <span class="sound-title" contenteditable="true">${cleanName}</span>
    <span class="sound-toggle"></span>
    <span class="sound-remove">✕</span>
  `;

  //  REMOVE BUTTON — RIGHT HERE
  const removeBtn = card.querySelector(".sound-remove");
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    fadeOut(audio);
    delete sounds[id];
    card.remove();
  });

  // Insert BEFORE the + card
  soundDeck.insertBefore(card, addSoundBtn);

  //  PLAY / PAUSE
  //  PLAY / PAUSE (USER-ADDED SOUND)
  card.addEventListener("click", () => {
  const isActive = card.classList.contains("active");
  const name = card.querySelector(".sound-title").textContent;

  if (!isActive) {

    // 🔥 STOP PREVIOUS SOUND
    if (currentAudio && currentAudio !== audio) {
      fadeOut(currentAudio);
      if (currentCard) currentCard.classList.remove("active");
    }

    fadeIn(audio, 0.25);
    card.classList.add("active");
    showActiveSound(name, audio, card);

  } else {
    fadeOut(audio);
    card.classList.remove("active");
    hideActiveSound();
  }
});


  // Auto-scroll to new sound
  soundDeck.scrollTo({
    left: soundDeck.scrollWidth,
    behavior: "smooth"
  });

  fileInput.value = "";

}); // ✅ closes audio.addEventListener("loadedmetadata")

}); // ✅ closes fileInput.addEventListener("change")

/* ===============================
    ACTIVE SOUND CARD
================================ */

const activeCard = document.getElementById("active-sound-card");
const activeName = document.getElementById("active-sound-name");
const activeToggle = document.getElementById("active-sound-toggle");
const activeVolume = document.getElementById("active-sound-volume");

activeVolume.addEventListener("input", () => {
  if (!currentAudio) return;

  const volume = activeVolume.value / 100; // 0–1
  currentAudio.volume = volume;
});


let currentAudio = null;
let currentCard = null;

function showActiveSound(name, audio, card) {
  activeName.textContent = name;
  activeToggle.textContent = "ON";
  activeToggle.classList.remove("off");

  //  sync slider with current audio volume
  activeVolume.value = Math.round(audio.volume * 100);

  activeCard.classList.remove("hidden");

  currentAudio = audio;
  currentCard = card;
}


function hideActiveSound() {
  activeCard.classList.add("hidden");
  currentAudio = null;
  currentCard = null;
}

activeToggle.addEventListener("click", () => {
  if (!currentAudio) return;

  const isOn = !activeToggle.classList.contains("off");

  if (isOn) {
    fadeOut(currentAudio);
    activeToggle.classList.add("off");
    activeToggle.textContent = "OFF";

    if (currentCard) currentCard.classList.remove("active");
  } else {
    fadeIn(currentAudio, 0.25);
    activeToggle.classList.remove("off");
    activeToggle.textContent = "ON";

    if (currentCard) currentCard.classList.add("active");
  }
});


/* ===============================
    AUTO-HIDE SOUND UI
================================ */

let uiTimeout;

function showSoundDeck() {
  soundDeck.classList.add("active");
  clearTimeout(uiTimeout);

  uiTimeout = setTimeout(() => {
    soundDeck.classList.remove("active");
  }, 3200);
}

let lastShow = 0;

document.addEventListener("mousemove", () => {
  const now = Date.now();
  if (now - lastShow > 300) {
    showSoundDeck();
    lastShow = now;
  }
});
document.addEventListener("click", showSoundDeck);

//  keep deck open while user is interacting with it
soundDeck.addEventListener("mouseenter", () => {
  clearTimeout(uiTimeout);
});

soundDeck.addEventListener("mouseleave", () => {
  uiTimeout = setTimeout(() => {
    soundDeck.classList.remove("active");
  }, 3200);
});

//  on mobile: touching the deck should keep it open
soundDeck.addEventListener("touchstart", () => {
  clearTimeout(uiTimeout);
}, { passive: true });

soundDeck.addEventListener("touchend", () => {
  uiTimeout = setTimeout(() => {
    soundDeck.classList.remove("active");
  }, 3200);
}, { passive: true });

// DRAG-TO-SCROLL FOR SOUND DECK (DESKTOP)
let isDown = false;
let startX;
let scrollLeft;

soundDeck.addEventListener("mousedown", (e) => {
  isDown = true;
  soundDeck.classList.add("dragging");
  startX = e.pageX - soundDeck.offsetLeft;
  scrollLeft = soundDeck.scrollLeft;
});

soundDeck.addEventListener("mouseleave", () => {
  isDown = false;
  soundDeck.classList.remove("dragging");
});

soundDeck.addEventListener("mouseup", () => {
  isDown = false;
  soundDeck.classList.remove("dragging");
});

soundDeck.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - soundDeck.offsetLeft;
  const walk = (x - startX) * 1.6;
  soundDeck.scrollLeft = scrollLeft - walk;
});
