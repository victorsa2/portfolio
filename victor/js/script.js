// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove a classe "active" de todos os links de navegação
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            // Adiciona a classe "active" apenas ao link correspondente à seção atual
            let correspondingLink = document.querySelector(`header nav a[href='#${id}']`);

            if (correspondingLink) {
                correspondingLink.classList.add('active');
            };

            // active sections for animartion on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animarion that respeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Add click event listener to all nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe "active" de todos os links de navegação
        navLinks.forEach(links => {
            links.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skills-box, .title', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .education-column, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['BI Analyst', 'Power BI Developer', 'UI/UX Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
