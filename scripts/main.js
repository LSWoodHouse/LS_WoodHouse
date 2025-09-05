<script>
  let currentIndex = 0;

  function showSlide(index) {
      const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
    currentIndex = 0;
      } else {
    currentIndex = index;
      }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

  function nextSlide() {
    showSlide(currentIndex + 1);
    }

  function prevSlide() {
    showSlide(currentIndex - 1);
    }
</script>
</body >
</html >