/* main-section01-Swiper */
var swiper = new Swiper(".swiper-sec2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  autoplay: {
  delay: 5000,
  disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});