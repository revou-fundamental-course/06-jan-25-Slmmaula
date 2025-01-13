ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.container', { origin: 'top' });
ScrollReveal().reveal('a', { origin: 'top' });
ScrollReveal().reveal('h1, h2', { origin: 'left' });
ScrollReveal().reveal('p', { origin: 'right' });