window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var heroSection = document.getElementById("bannerBg");

    // Get the height of the hero section
    var heroHeight = heroSection.offsetHeight;

    // Check if the scroll position is past the hero section
    if (window.scrollY > heroHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".scrollanimation");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    cards.forEach((scrollanimation) => observer.observe(scrollanimation));
});




document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname.split("/").pop(); // Get the current page filename
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});