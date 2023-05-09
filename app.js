const btnMenu = document.querySelector('img[src="./Img/btn-menu.png"]');
const ulMenu = document.querySelector('ul');

btnMenu.addEventListener('click', function () {
  if (ulMenu.style.display === 'none') {
    ulMenu.style.display = 'flex';
  } else {
    ulMenu.style.display = 'none';
  }
});

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slides = document.querySelectorAll(".slide, .slide1, .slide2");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "flex";
}

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

