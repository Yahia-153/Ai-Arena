function header(){
    const header = document.querySelector('.navbar');
    const burgerBtn = document.querySelector('#burgerBtn');
    const burgerMenu = document.querySelector('#burgerMenu');
    burgerBtn.addEventListener("click" , (i) => {
        if(burgerBtn.checked){
            header.style= ' height : auto ;'
    }else{
        header.style= ' height : 95px ;'
    }
    })
    
}
header();