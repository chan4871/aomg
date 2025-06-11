/* main swiper */
const swiper1 = new Swiper(".main-swiper", {
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
