const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

const success = document.getElementById("success")

function move() {
  const incrementer = window.scrollY
  success.style.left = incrementer * 0.1 + '%'
  success.style.color = "#cd3533"
  success.style.fontSize = 90 + 'px'
}

window.addEventListener('scroll', move)
