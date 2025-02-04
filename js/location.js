const brandSwiper2 = new Swiper('.custom-brands-swiper-2', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    navigation: {
        nextEl: '.custom-swiper-next-1',
        prevEl: '.custom-swiper-prev-1',
    },
    breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 6, spaceBetween: 30 },
    }
});