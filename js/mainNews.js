var swiper = new Swiper(".newsSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints : {
    800 : {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

