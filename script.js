window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const container = document.querySelector('.container');

    // Hide loader and show content
    setTimeout(() => {
        if (loader) {
            loader.style.display = 'none';
        }
        if (container) {
            container.style.display = 'block';
        }
    }, 500); // Adjust delay as needed

    // Initialize Vanta.js animation
    VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x9b59b6,
        backgroundColor: 0x121212,
        points: 10.00,
        maxDistance: 25.00,
        spacing: 15.00
    });
});