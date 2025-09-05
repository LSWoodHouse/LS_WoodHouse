const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider img");
const visibleSlides = 4; // показуємо 4 фото
let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    if (currentIndex >= slides.length - visibleSlides) {
        currentIndex = 0; // повертаємось на початок
    } else {
        currentIndex++;
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex <= 0) {
        currentIndex = slides.length - visibleSlides; // йдемо в кінець
    } else {
        currentIndex--;
    }
    updateSlider();
}

// авто-прокрутка
setInterval(nextSlide, 3000);

// початковий стан
updateSlider();

