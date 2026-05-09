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

// Accordion for programs page
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const isActive = item.classList.contains('active');

            
            document.querySelectorAll('.accordion-item').forEach(function (el) {
                el.classList.remove('active');
                el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                el.querySelector('.accordion-body').classList.remove('open');
            });

            
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                body.classList.add('open');
            }
        });
    });
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