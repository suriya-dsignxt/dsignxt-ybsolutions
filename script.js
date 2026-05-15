window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    
    // Smoothly hide the loader once everything is loaded
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);

    // Menu toggle logic
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    }

    // Optional: Add a subtle parallax effect or reveal animation on scroll
    const designImage = document.querySelector('.design-image');
    if (designImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
        });
    }
});

// Smooth scroll to top when changing pages (standard browser behavior, but good to ensure)
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
