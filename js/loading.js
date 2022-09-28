const container = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')

container.classList.add('view')



let modalDefault = `
    <div class="modal-options"></div>
    <div class="modal-title"></div>
    <div class="modal-body"></div>
    <div class="modal-footer"></div>
`

let loader = `
    <h3 style="font-size: var(--xxl); font-family: 'baloo-extra'; margin-bottom: 3rem; tex-align:center;">Loading...</h3>
    <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
    </div>
`

modal.innerHTML = loader

setTimeout(() => {
    modal.innerHTML = modalDefault
    container.classList.remove('view')
}, '1000')