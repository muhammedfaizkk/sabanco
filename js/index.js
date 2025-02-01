var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // When the viewport width is 640px or less
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // When the viewport width is 768px or less
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // When the viewport width is 1024px or more (default)
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
