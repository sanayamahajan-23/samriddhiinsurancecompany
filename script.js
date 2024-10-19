window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(34, 59, 81, 0.8)';
    } else {
        navbar.style.backgroundColor = 'rgba(34, 59, 81, 1)'; 
    }
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id'); 
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    if (current) {
        const activeLink = document.querySelector(`.nav-links li a[href*="${current}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    } else if (window.scrollY === 0) {
        navLinks[0].classList.add('active');
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
const buttons = document.querySelectorAll('.service-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const serviceButtons = document.querySelectorAll('.service-btn');

function setInitialActiveButton() {
    const allButton = document.querySelector('.service-btn[data-category="all"]'); 
    allButton.classList.add('active'); 
}

serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        serviceButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
window.addEventListener('DOMContentLoaded', setInitialActiveButton);
const playBtn = document.getElementById("play-btn");
const videoOverlay = document.getElementById("videoOverlay");
const closeBtn = document.getElementById("closeBtn");
const videoPlayer = document.getElementById("videoPlayer");

playBtn.addEventListener("click", function () {
    videoOverlay.style.display = "block";  
    videoPlayer.play();  
});

closeBtn.addEventListener("click", function () {
    videoPlayer.pause();  
    videoPlayer.currentTime = 0; 
    videoOverlay.style.display = "none"; 
});