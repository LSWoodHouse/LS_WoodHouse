const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
let currentIndex = 0;
let visibleSlides = 4; // показуємо по 4 фото

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex > slides.length - visibleSlides) {
        currentIndex = 0; // назад на початок
    }
    updateSlider();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - visibleSlides; // в кінець
    }
    updateSlider();
}

setInterval(nextSlide, 2000); // автопрокрутка