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
