// script.js

const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function startAutoScroll() {
    setInterval(showNextImage, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoScroll();
});