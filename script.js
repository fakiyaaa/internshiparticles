const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor: true, 
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    },
  }

});

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}