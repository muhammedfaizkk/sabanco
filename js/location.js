var servicesSwiper = new Swiper('.mySwiper', {
    slidesPerView: 1, // Only one slide visible at a time
    spaceBetween: 10, // Space between slides
    loop: true, // Enable looping
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay running after interaction
    },
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        // Small screens, 1 slide at a time
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // Medium screens, 2 slides at a time
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // Larger screens, 3 slides at a time
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});