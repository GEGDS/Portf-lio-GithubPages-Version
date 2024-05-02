 /* Menu */
 const menuBtn = document.querySelector('.menu-btn');
 const menu = document.querySelector('.menu');

 menuBtn.addEventListener('click', () => {
     menu.classList.toggle('show');
 });

 /* Projetos */
 const projects = [
    {
        title: 'Simon Game',
        image:'../public/Images/Simon Game.png',
        alt:'portfolio carousel',
        description: 'Jogo de gravar a sequencia de cores',
    },
    {
        title: 'IMC Calculator',
        image:'../public/Images/IMC Calculator.png',
        alt:'portfolio carousel',
        description: 'calculadora de indice de massa corporal'
    },
   
];

function populateProjects() {
    const carousel = document.querySelector('.carousel');
    const description = document.querySelector('.description');

    
    carousel.innerHTML = '';
    description.innerHTML = '';

    
    projects.forEach((project, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) {
            slide.classList.add('active');
        }
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.alt;
        slide.appendChild(img);
        carousel.appendChild(slide);

        const info = document.createElement('div');
        info.classList.add('info');
        if (index === 0) {
            info.classList.add('active');
        }
        const title = document.createElement('h4');
        title.textContent = project.title;
        const desc = document.createElement('p');
        desc.textContent = project.description;
        info.appendChild(title);
        info.appendChild(desc);
        description.appendChild(info);
    });
}


window.addEventListener('load', populateProjects);

/* Footer */

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('footer');
    const year = new Date().getFullYear();
    footer.textContent = `© Copyright Gabriel Silva ${year} | Todos os direitos reservados`;
});
