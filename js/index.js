var servicesSwiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
    },
    breakpoints: {
        300: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
    },
});

var locationsSwiper = new Swiper(".Mylocations", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-right-locations",
        prevEl: ".swiper-button-left-locations",
    },
    breakpoints: {
        300: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
    },
});





const brandSwiper1 = new Swiper('.custom-brands-swiper-1', {
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
