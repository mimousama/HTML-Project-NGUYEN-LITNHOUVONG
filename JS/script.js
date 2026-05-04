// Simple JavaScript for the EFREI IT Department website

// Add event listener to the contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
});

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.fontWeight = 'bold';
        link.style.color = '#BE6E45';
    }
});