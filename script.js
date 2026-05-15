window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Smoothly hide the loader once everything is loaded
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);

    // Optional: Add a subtle parallax effect or reveal animation on scroll
    const designImage = document.querySelector('.design-image');
    if (designImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            // You can add more complex logic here if needed
        });
    }
});

// Smooth scroll to top when changing pages (standard browser behavior, but good to ensure)
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
