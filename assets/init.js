AOS.init();

// JavaScript for toggling mobile menu
document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const menuIcon = document.querySelector('.rotate-90 img');
    const closeIcon = document.querySelector('.w-screen .absolute img');
    const mobileMenu = document.querySelector('section.w-screen.h-screen');

    // Add event listener to menu icon to show mobile menu
    menuIcon.addEventListener('click', function () {
        mobileMenu.style.display = 'block';
    });

    // Add event listener to close icon to hide mobile menu
    closeIcon.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
    });
});