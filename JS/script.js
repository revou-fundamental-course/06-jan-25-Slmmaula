document.getElementById('to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Email Send
(function(){
    emailjs.init("YaRnVhvSJrDKttApa");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_572mw3r';
    const templateID = 'template_g1kgjtq';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        alert('Message Sent Successfully!');
        document.getElementById('contact-form').reset();
    }, (err) => {
        alert('Failed to send message. Please try again!');
        console.error('Error:', err);
    });
});


// Footer Year
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('footer-year');
    const currentYear = new Date().getFullYear();
    const startYear = 2023;

    if (currentYear > startYear) {
        yearElement.textContent = `${startYear}-${currentYear}`;
    } else {
        yearElement.textContent = startYear;
    }
});

// Scroll Reveal
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .home-content h3', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });