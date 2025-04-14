document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline li");
    const revealOnScroll = () => {
        let triggerBottom = window.innerHeight * 0.9;
        let photoBottom = window.innerHeight * 0.65;
        let phototop = window.innerHeight * 0.35;
        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }else{
                item.classList.remove("show");
            }

            if (itemTop < photoBottom && itemTop > phototop) {
                item.classList.add("opened");
            }else{
                item.classList.remove("opened");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger animation on page load
});
