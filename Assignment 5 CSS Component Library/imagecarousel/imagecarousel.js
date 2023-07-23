const carouselContainer = document.querySelector('.carousel-slides');
const images = carouselContainer.getElementsByTagName('img');
const imageCount = images.length;
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
};

setInterval(showNextImage, 3000);