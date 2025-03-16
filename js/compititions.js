const compititionsEl = document.querySelectorAll(' .slider .item')
compititionsEl.forEach((compitition) => {
    compitition.addEventListener('click', () => {
        let classes = compitition.classList.value.split(' ')[1];
        var compititionPanel = document.querySelector(`#${classes}-panel`)
        compititionPopup.classList.remove('d-none')
        compititionPopup.classList.add('d-flex')
        compititionPopup.querySelectorAll('.panel').forEach((panel) => {
            panel.style.display='none';
        })
        compititionPanel.style.display='block';
    })
}
)
const compititionPopup = document.querySelector('#compitition-pop-up')
const compititionPopupClose = document.querySelectorAll('#compitition-pop-up .close')
compititionPopupClose.forEach((close) => {
    close.addEventListener('click', () => {
        compititionPopup.classList.remove('d-flex')
        compititionPopup.classList.add('d-none')
        compititionPopup.querySelectorAll('panel').forEach((panel) => {
            panel.style.display='none';
        })
    })
})