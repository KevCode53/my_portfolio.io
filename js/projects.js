const portfolioSection = document.querySelector('#portfolio-section')
var parser = new DOMParser()

const createProject = (title, description, tecnologies, demo, code) => {
    template = `
        <article class="project">
            <picture class="project-image">
            <div class="type">
                <div class="front"></div>
                <div class="back"></div>
            </div>
            <img src="./assets/images/Invitacion.png" alt=""> </img>
            </picture>
            <div class="project-content">
            <h3 class="title">
                ${title}
            </h3>
            <div class="description">
                ${description}
            </div>
            <ul class="tecnologies">
                ${tecnologies}
            </ul>
            </div>
            <footer>
            <a class="primary-btn btn" href="${demo}" target="_blank">Demo</a>
            <a class="secondary-btn btn" href="${code}" target="_blank">Github</a>
            </footer>
        </article>
    `

    return template
}
let birthday = createProject(
    'Birthday Invitation',
    `
        <p>Web page made with the basic pillars of web development, its functionality being a birthday invitation, design inspired by the ticket made by 
        <a style="color: #199afc; display: inline-block; height: 1.4rem;" href="https://midu.dev/" target="_blank">
            <img style="height: 2rem; width: auto;" src="https://midu.dev/logo-dark.png" alt="Midudev">
        </a> 
        for the <a style="font-weight: bold;" href="https://miduconf.com/" target="_blank">#miduConf</a> of 2022</p>
    `,
    `
        <li class="element">html5</li>
        <li class="element">CSS3</li>
        <li class="element">JS</li>
    `,
    'https://kevcode53.github.io/invitation-card.io/',
    'https://github.com/KevCode53/invitation-card.io'

)

birthday = parser.parseFromString(birthday, "application/xml")