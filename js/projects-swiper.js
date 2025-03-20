var swiper = new Swiper(".mySwiper.projects", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    grabCursor: true,
    freeMode: true,
    speed: 750,
    breakpoints: {
      1024: { slidesPerView: 4, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      500: { slidesPerView: 1, spaceBetween: 10 }
    }
  });
