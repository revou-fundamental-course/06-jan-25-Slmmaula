document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
        console.error('No article ID found in the URL.');
        return;
    }

    fetch('/data/blogPosts.json')
        .then(response => response.json())
        .then(data => {
            const post = data.find(post => post.id === parseInt(id, 10));

            if (!post) {
                console.error('No article found with ID:', id);
                return;
            }

            
            const publishedOn = new Date(post.publishedOn);
            const options = {
                timeZone: 'Asia/Jakarta',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };

            
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const parts = formatter.formatToParts(publishedOn);

            
            const month = parts.find(part => part.type === 'month').value;
            const day = parts.find(part => part.type === 'day').value;
            const year = parts.find(part => part.type === 'year').value;
            const hour = parts.find(part => part.type === 'hour').value;
            const minute = parts.find(part => part.type === 'minute').value;
            const period = parts.find(part => part.type === 'dayPeriod').value;

            
            const formattedDate = `${month} ${day}, ${year} ${hour}:${minute}${period}`;

            
            document.getElementById('blog-title').textContent = post.title;
            document.getElementById('blog-date').textContent = `Published on ${formattedDate}`;
            document.getElementById('blog-image').src = post.mainImage;
            document.getElementById('blog-image').alt = post.title;
            document.getElementById('blog-content').innerHTML = post.body;
        })
        .catch(error => console.error('Error loading blog post:', error));
});
