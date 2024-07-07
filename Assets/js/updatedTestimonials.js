document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".section__carousel-inner");
    const dots = document.querySelectorAll(".dot");
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 40;
      carouselInner.style.transform = `translateX(${offset}vw)`;
  
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    function autoScroll() {
      currentIndex = (currentIndex + 1) % dots.length;
      updateCarousel();
    }
  
    setInterval(autoScroll, 5000); // Change the interval as needed
  
    updateCarousel(); // Initialize the carousel position
  });
  