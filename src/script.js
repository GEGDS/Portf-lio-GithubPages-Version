 /* Menu */
 const menuBtn = document.querySelector('.menu-btn');
 const menu = document.querySelector('.menu');

 menuBtn.addEventListener('click', () => {
     menu.classList.toggle('show');
 });

 /* Projetos */
 document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { 
            title: 'Simon Game', 
            image:'public/Images/Simon Game.png', 
            alt:'portfolio carousel', 
            description: 'Jogo de gravar a sequencia de cores' 
        },
        { 
            title: 'IMC Calculator', 
            image:'public/Images/IMC Calculator.png', 
            alt:'portfolio carousel', 
            description: 'calculadora de indice de massa corporal' 
        }
    ];

    const carousel = document.querySelector('.carousel');
    const descriptionContainer = document.querySelector('.description');

    // Adiciona os slides
    projects.forEach((project, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) {
            slide.classList.add('active');
        }
        slide.innerHTML = `<img src="${project.image}" alt="${project.alt}">`;
        carousel.appendChild(slide);
    });

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    
    document.getElementById('prevBtn').addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });

  
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        updateDescription();
    }


    function updateDescription() {
        const descriptions = document.querySelectorAll('.info');
        descriptions.forEach((description, index) => {
            if (index === currentSlide) {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    }
    

    
    projects.forEach((project, index) => {
        const description = document.createElement('div');
        description.classList.add('info');
        if (index === 0) {
            description.classList.add('active');
        }
        description.innerHTML = `<h4>${project.title}</h4><p>${project.description}</p>`;
        descriptionContainer.appendChild(description);
    });

    updateDescription(); 
});




/* Footer */

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('footer');
    const year = new Date().getFullYear();
    footer.textContent = `© Copyright Gabriel Silva ${year} | Todos os direitos reservados`;
});
