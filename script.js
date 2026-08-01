let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let isAudioStarted = false;

// Auto-Play Trigger on first tap anywhere
function enableAutoplayOnce() {
  if (!isAudioStarted) {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");
    if (music) {
      music.play().then(() => {
        isAudioStarted = true;
        btn.innerText = "⏸️ Pause Music";
        btn.style.background = "linear-gradient(135deg, #ec4899 0%, #be185d 100%)";
      }).catch(err => {
        console.log("Audio play error:", err);
      });
    }
  }
}

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove('active');
    dots[i].classList.remove('active');
  });

  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  enableAutoplayOnce();
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

function goToSlide(index) {
  enableAutoplayOnce();
  showSlide(index);
}

// Manual Music Toggle Button
function toggleMusic(e) {
  if (e) e.stopPropagation();
  
  var music = document.getElementById("bgMusic");
  var btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play().then(() => {
      isAudioStarted = true;
      btn.innerText = "⏸️ Pause Music";
      btn.style.background = "linear-gradient(135deg, #ec4899 0%, #be185d 100%)";
    }).catch((err) => {
      alert("Please tap anywhere on the screen first to allow audio play!");
    });
  } else {
    music.pause();
    btn.innerText = "▶️ Play Music";
    btn.style.background = "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)";
  }
}

// Working Photo Changing Logic for Quiz
function answerQ1(option) {
  var cat = document.getElementById("catImg");
  var caption = document.getElementById("catCaption");
  var res = document.getElementById("resQ1");

  if (option === 'elisha') {
    cat.src = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&auto=format&fit=crop&q=80";
    caption.innerText = "Cat Reaction: '100% True! Elisha hi number 1 dramebaaz hai!' 😹⭐";
    res.innerHTML = "Sahi jawaab! Elisha se bada dramebaaz koi nahi hai! 🎭💜";
  } else {
    cat.src = "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&auto=format&fit=crop&q=80";
    caption.innerText = "Cat Reaction: 'Shocked!' 😼🕯️";
    res.innerHTML = "Jhoot mat bolo Elisha! Avin toh bilkul innocent hai 😜!";
  }
}

function answerQ2(type) {
  var cat = document.getElementById("catImg");
  var caption = document.getElementById("catCaption");
  var res = document.getElementById("resQ2");

  if (type === 'elisha') {
    cat.src = "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&auto=format&fit=crop&q=80";
    caption.innerText = "Cat Reaction: 'Elisha ki baatein kabhi khatam nahi hoti!' 🌙";
    res.innerHTML = "Sahi baat hai! Radio ki tarah non-stop bol sakti hai Elisha! 😂";
  } else {
    cat.src = "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&auto=format&fit=crop&q=80";
    caption.innerText = "Cat Reaction: 'Double trouble night!' ✨";
    res.innerHTML = "Bilkul! Jab hum dono milte hain, toh dimaag pakna 100% paka hai! 🥳💥";
  }
}

function answerQ3(option) {
  var res = document.getElementById("resQ3");
  if (option === 'elisha') {
    res.innerHTML = "Haha late night midnight cravings hamesha Elisha ki hi hoti hain! 🍩🍕";
  } else {
    res.innerHTML = "Avin toh bas saath me khane chala jata hai! 😋🍟";
  }
}

function answerQ4(option) {
  var res = document.getElementById("resQ4");
  if (option === 'elisha') {
    res.innerHTML = "Fact! Choti si baat par 100 scenarios banana Elisha ki specialty hai! 🤯✨";
  } else {
    res.innerHTML = "Avin calm rehne ka naatak karta hai par dimaag me chalta rehta hai! 🧠😜";
  }
}
