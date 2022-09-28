const toolbar = document.querySelector('.toolbar')

let startPosition = window.pageYOffset
window.onscroll = () => {
    let scroll = window.pageYOffset

    if ( startPosition >= scroll ) {
        toolbar.classList.remove('blur')
    } else {
        toolbar.classList.add('blur')
    }
    startPosition = scroll
}