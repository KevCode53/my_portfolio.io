const menuSelector = document.querySelector('.nav-selector')
const home = document.querySelector('#home-section')
const about = document.querySelector('#about-section')
const portfolio = document.querySelector('#portfolio-section')
const sections = document.querySelectorAll('section')


// callback al ejecutar el obnserver
const callback = (entries, observer) => {
    entries.forEach( entry => {
        if (entry.isIntersecting) {
            if ( entry.target.id === 'home-section' ) {
                menuSelector.style = 'left: 2rem'
            } else if ( entry.target.id === 'about-section' ) {
                menuSelector.style = 'left: calc((100% / 3) + 1rem )'
            }  else {
                menuSelector.style = 'left: calc((100% / 3) + (100% / 3) - 1rem )'
            }
        }
    }) 
}

// Const Options
const options = {
    // Especifica el objeto que empleara el observer al no especificar sera el viewport
    // root:

    // Espeficica el marge que aplciara para el observer
    rootMargin: '-400px 0px',

    // Porcentaje de la visibilidad del elemento observado al ejectura el callback
    // threshold: 0
}

// Creacion del Observer
let observer = new IntersectionObserver(callback, options)


sections.forEach( section => observer.observe(section))
