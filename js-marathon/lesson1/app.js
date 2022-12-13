
function slidesPlugin(activeSlide = 2) {
  const slides = document.querySelectorAll('.slider__item');

  slides[activeSlide].classList.add('slider__item--active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveSlides();
      slide.classList.add('slider__item--active');
    })
  }
  function clearActiveSlides() {
    slides.forEach((slide) => {
      slide.classList.remove('slider__item--active');
    })
  }
}

slidesPlugin()