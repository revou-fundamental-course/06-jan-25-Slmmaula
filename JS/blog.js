document.addEventListener('DOMContentLoaded', () => {
  fetch('data/blogPosts.json')
    .then(response => response.json())
    .then(data => {
      
      // Sort posts by published date in descending order
      data.sort((a, b) => new Date(b.publishedOn) - new Date(a.publishedOn));
      
      const blogContainer = document.querySelector('.blog-container');
      blogContainer.innerHTML = data.map(post => {
        // Format publish date
        const publishDate = new Date(post.publishedOn).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        return `
          <div class="blog-box">
            <img src="${post.mainImage}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p class="publish-date">${publishDate}</p>
            <p>${post.body.substring(0, 150)}...</p>
            <div class="btn-container">
              <a href="blog-details.html?id=${post.id}" class="btn-read">Read More</a>
            </div>
          </div>
        `;
      }).join('');
    })
    .catch(error => console.error('Error loading blog posts:', error));
});

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

document.getElementById('to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
    });

ScrollReveal().reveal('.heading', { origin: 'left' });
ScrollReveal().reveal('.desc', { origin: 'right' });
ScrollReveal().reveal('.blog-container', { origin: 'bottom' });

});
