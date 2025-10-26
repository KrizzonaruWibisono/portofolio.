// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('nav button');
    const menu = document.getElementById('mobileMenu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});