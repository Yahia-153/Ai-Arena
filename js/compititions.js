const compititionsEl = document.querySelectorAll(' .slider .item')
console.log(compititionsEl)
compititionsEl.forEach((compitition) => {
    compitition.addEventListener('click', () => {
        let classes = compitition.classList;
        console.log(classes.value.split(' ')[1])
    })
}
)