document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  let slides = slider.querySelectorAll("img");
  let currentIndex = 0;
  let visibleSlides = getVisibleSlides();

  // Функція визначає кількість фото залежно від ширини екрана
  function getVisibleSlides() {
    if (window.innerWidth <= 640) return 1;   // мобільний
    if (window.innerWidth <= 1024) return 2;  // планшет
    return 4;                                 // ПК
  }

  // Клонування перших N фото для плавного loop
  function cloneSlides() {
    for (let i = 0; i < visibleSlides; i++) {
      let clone = slides[i].cloneNode(true);
      slider.appendChild(clone);
    }
    slides = slider.querySelectorAll("img");
  }
  cloneSlides();

  function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex++;
    updateSlider();

    if (currentIndex >= slides.length - visibleSlides) {
      setTimeout(() => {
        slider.style.transition = "none";
        currentIndex = 0;
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "transform 0.7s ease-in-out";
        }, 50);
      }, 700);
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      slider.style.transition = "none";
      currentIndex = slides.length - visibleSlides;
      updateSlider();
      setTimeout(() => {
        slider.style.transition = "transform 0.7s ease-in-out";
        currentIndex--;
        updateSlider();
      }, 50);
    } else {
      currentIndex--;
      updateSlider();
    }
  }

  // Автоматична прокрутка
  setInterval(nextSlide, 4000);

  // Кнопки
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  // Оновлення при зміні розміру
  window.addEventListener("resize", () => {
    visibleSlides = getVisibleSlides();
  });
});
