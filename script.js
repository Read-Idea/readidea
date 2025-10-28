// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.vision-section, .mission-section, .contact-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Scroll down indicator auto-hide
let lastScroll = 0;
const scrollIndicator = document.querySelector('.scroll-down');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (scrollIndicator) {
        if (currentScroll > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }

    lastScroll = currentScroll;
});

// Console branding
console.log('%creadidea', 'color: #000; font-size: 24px; font-weight: 300; letter-spacing: 0.1em;');
console.log('%c건강한 내일을 위한 선택', 'color: #737373; font-size: 12px; font-weight: 300;');
