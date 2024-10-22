document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  hamburger.onclick = function () {
    const navbar = document.querySelector('.nav-bar');
    navbar.classList.toggle('active');
  };
});


function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category'); // Fetch 'category' from query
  return { category };
}


$(document).ready(function () {
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      category: params.get('category') || 'tech',
    };
  }

  const { category } = getQueryParams();

  $('.Tech, .Business, .Social').hide(); // Hide all sections

  // Fade in the relevant section smoothly
  if (category === 'business') {
    $('.Business').fadeIn(500);
  } else if (category === 'social') {
    $('.Social').fadeIn(500);
  } else {
    $('.Tech').fadeIn(500);
  }

  $('.nav-bar a').click(function (e) {
    e.preventDefault();
    const newCategory = $(this).attr('href').split('=')[1];
    const newUrl = `${window.location.pathname}?category=${newCategory}`;
    window.history.pushState(null, '', newUrl);
    location.reload();
  });
});