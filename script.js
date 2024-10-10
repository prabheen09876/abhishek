

// GSAP animations for scrolling effects
gsap.to(".page2 h2", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers:true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true
  }
})

gsap.to(".page8 h2", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".page8",
    scroller: "body",

    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true
  }
})

gsap.to(".page9 h2", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".page9",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true
  }
})

// Function to animate cards on scroll
const boxes = document.querySelectorAll(".box");
let activeIndex = 1;
let isTransitioning = false;

function updateCurrentImg() {
  isTransitioning = true;

  boxes.forEach((box, index) => {
    const isActive = index === activeIndex;
    box.classList.toggle("expanded", isActive);
    box.classList.toggle("closed", !isActive);
  });

  setTimeout(() => {
    isTransitioning = false;
  }, 500);
}

// Function to handle arrow key presses for box navigation
function handleArrowKey(event) {
  if (isTransitioning) {
    return;
  }

  if (event.key === "ArrowRight") {
    activeIndex = (activeIndex + 1) % boxes.length;
  } else if (event.key === "ArrowLeft") {
    activeIndex = (activeIndex - 1 + boxes.length) % boxes.length;
  }

  updateCurrentImg();
}

// Function to handle box clicks for navigation
function handleBoxClick(index) {
  if (isTransitioning) {
    return;
  }

  if (index === activeIndex && boxes[index].classList.contains("expanded")) {
    boxes.forEach((box) => box.classList.remove("closed", "expanded"));
    activeIndex = 0;
  } else {
    activeIndex = index;
    updateCurrentImg();
  }
}

// Event listener for arrow key presses
document.addEventListener("keydown", handleArrowKey);

// Initial call to updateCurrentImg to set the first box as active
updateCurrentImg();

// Event listeners for box clicks
boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index));
});

// Function to animate cards on scroll
function animateCards(cards) {
  cards.forEach((card, index) => {
    gsap.to(card, {
      scale: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: card,
        start: 'top 15%',
        end: 'bottom 15%',
        scrub: true,
        onEnter: () => {
          if (index > 0) {
            gsap.to(window, { duration: 0.5, scrollTo: card });
          }
        },
      },
    });
  });
}

// Array of card selectors
const cards = ['.card1', '.card2', '.card3', '.card4', '.card5'];
// Call to animateCards function
animateCards(cards);



//js for img expanshion
const photos = document.querySelectorAll('.photo');
const fullPhotoOverlay = document.querySelector('.full-photo-overlay');
const fullPhoto = document.querySelector('.full-photo');
const closeBtn = document.querySelector('.close-btn');

photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    // Set the src of the full photo to the clicked photo
    fullPhoto.src = photos[index].querySelector('img').src;

    // Show the full photo overlay
    fullPhotoOverlay.style.display = 'block';
  });
});

function closeFullPhoto() {
  // Hide the full photo overlay when the close button is clicked
  fullPhotoOverlay.style.display = 'none';
}





const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
