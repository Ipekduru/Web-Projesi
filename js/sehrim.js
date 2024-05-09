const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const infoDiv = document.getElementById('info');

let index = 0;

function updateInfo() {
  switch(index) {
    case 0:
      infoDiv.innerHTML = "Burası resim 1 hakkında bilgi";
      break;
    case 1:
      infoDiv.innerHTML = "Burası resim 2 hakkında bilgi";
      break;
    case 2:
      infoDiv.innerHTML = "Burası resim 3 hakkında bilgi";
      break;
    default:
      infoDiv.innerHTML = "";
  }
}

function changeSlide() {
  slider.style.transform = `translateX(${-index * 100}%)`;
  updateInfo();
}

updateInfo();

document.addEventListener('DOMContentLoaded', changeSlide);

function nextSlide() {
  index = (index + 1) % slides.length;
  changeSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  changeSlide();
}

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    // When a slide is clicked, show its info
    updateInfo();
  });
});

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);