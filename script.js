 const typetext = document.querySelector(".typed-text")
const cursor = document.querySelector(".cursor")
const words = ["coding " , "photography " , "editing "] 
const typingdelay= 100
const erasingdelay = 50 
const newletterdelay = 500
let index = 0;
let charindex = 0

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(type, newletterdelay);
    }
});

function type(){
    if ( charindex < words[index].length){
        typetext.textContent +=words[index].charAt(charindex)
        charindex++
        setTimeout(type, typingdelay)
    }else{
        setTimeout(erase, newletterdelay)
    }
}
function erase(){
    if(charindex > 0){
        typetext.textContent = words[index].substring(0, charindex-1)
        charindex--
        setTimeout(erase, erasingdelay)
    }else{
        index++;
        if(index >= words.length){
            index = 0 
        }
        setTimeout(type, typingdelay+100)
    }
}
gsap.to(".page2 h2", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".page2",
        scroller: "body",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})






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

document.addEventListener("keydown", handleArrowKey);

updateCurrentImg();

boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index));
});