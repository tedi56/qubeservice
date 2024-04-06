document.getElementById('menuIcon').addEventListener('click', function() {
    var menuBox = document.querySelector('.menuBox');
    if (menuBox.style.display === "flex") {
        // Apply the slide-out animation
        menuBox.style.animation = 'slideOut 0.5s forwards';

        // Wait for the animation to complete before hiding the menu
        setTimeout(function() {
            menuBox.style.display = "none";
            // Reset the animation so it can slide in again next time
            menuBox.style.animation = '';
        }, 500); // This duration should match the slideOut animation duration
    } else {
        menuBox.style.display = "flex";
        // Apply the slide-in animation
        menuBox.style.animation = 'slideIn 0.5s forwards';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Menu icon click listener remains unchanged

    // Improved scroll event listener for smoother fade effect
    window.addEventListener('scroll', function() {
        const infoBox = document.querySelector('.intructionBox');
        const infoBoxPosition = infoBox.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (infoBoxPosition < screenPosition) {
            infoBox.classList.add('show');
        } else {
            infoBox.classList.remove('show');
        }
    });
});

// Existing code for menu toggle and fade effect

// Add smooth scroll functionality
document.getElementById('Home').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('Services').addEventListener('click', function() {
    const servicesPosition = document.querySelector('.scroll-extension').offsetTop;
    window.scrollTo({
        top: servicesPosition - 60, // Adjust based on fixed header height
        behavior: 'smooth'
    });
});

document.getElementById('Information').addEventListener('click', function() {
    const infoPosition = document.querySelector('.information-section').offsetTop;
    window.scrollTo({
        top: infoPosition - 60, // Adjust based on fixed header height
        behavior: 'smooth'
    });
});
