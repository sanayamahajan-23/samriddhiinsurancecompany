window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section'); // Make sure your sections are properly defined
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight; // Get the height of the section
        if (pageYOffset >= sectionTop - sectionHeight / 3) { // Adjust to trigger earlier
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
