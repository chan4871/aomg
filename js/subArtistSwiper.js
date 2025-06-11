/* main swiper */
const mainSwiper = new Swiper(".main-swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-main",
        prevEl: ".prev-main",
      },
      loop: true,
    });
/* artist */
var artistSwiper = new Swiper(".artist-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints:{
        768: {
          slidesPerView: 3.8,
        }
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      loop: true,
    });
/* artist-info */
//custom에 작성함함
/* artist-video */
var videoSwiper = new Swiper(".video", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      prevEl: ".prev-video",
      nextEl: ".next-video",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      }
    },
    loop: true,
    watchOverflow: false,
  });
/* artist-album */
var albumSwiper = new Swiper(".album", {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: ".next-album",
        prevEl: ".prev-album",
      },
      breakpoints:{
        768: {
          slidesPerView: 5,
        }
      },
      loop: true,
      watchOverflow: false,
    });
var mediaSwiper = new Swiper(".media", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".next-media",
      prevEl: ".prev-media",
    },
    breakpoints:{
      768: {
        slidesPerView: 5,
      }
    },
    watchOverflow: false,
    loop : true,
  });