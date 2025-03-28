document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline li");

    const revealOnScroll = () => {
        let triggerBottom = window.innerHeight * 0.9;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger animation on page load
});
