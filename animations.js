document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.getAttribute('data-aos'));
                observer.unobserve(entry.target);
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

//Hamburger
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("hamburger");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        btn.classList.toggle("clicked");
    });
});