const obverser = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }else{
            entry.target.classList.remove('visible');
        }
    })
});

let hiddenElments = document.querySelectorAll('.hidden');
hiddenElments.forEach(el => {
    obverser.observe(el);
});