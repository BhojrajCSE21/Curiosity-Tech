const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close hamburger menu on scroll
window.addEventListener('scroll', () => {
    navLinks.classList.remove('active');
});

// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Existing count-up script
document.addEventListener('DOMContentLoaded', function() {
    function countUp(element, start, end, duration) {
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = Math.min((timestamp - startTime) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    countUp(document.getElementById('projects-count'), 0, 452, 2000);
    countUp(document.getElementById('clients-count'), 0, 469, 2000);
    countUp(document.getElementById('experts-count'), 0, 400, 2000);
});
