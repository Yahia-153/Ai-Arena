window.addEventListener('load', () => {
    setTimeout(() => {
       console.log('loaded');
       document.querySelector('#preloader').classList.add('d-none');
    }
    , 8000);
})