// JavaScript for handling the sign-in modal
document.getElementById('signin-button').addEventListener('click', function() {
    document.getElementById('signin-modal').style.display = 'block';
  });
  
  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('signin-modal').style.display = 'none';
  });
  
  // JavaScript for the image carousel
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  let slideIndex = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }
  
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }
  
  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }
  
  setInterval(nextSlide, 1500); // Auto-play the carousel
  
  showSlide(slideIndex); // Initialize the carousel

  const content = document.querySelector('.content');
const parallaxSection = document.querySelector('.parallax-section');

parallaxSection.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    content.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
});

parallaxSection.addEventListener('mouseenter', () => {
    content.style.transition = 'none';
});

parallaxSection.addEventListener('mouseleave', () => {
    content.style.transition = 'transform 0.4s ease-in-out';
    content.style.transform = 'translateX(0) translateY(0)';
});
