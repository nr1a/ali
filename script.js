document.addEventListener('DOMContentLoaded', () => {
    fetch('https://r2.nr1a.inc/urls.json')
        .then(response => response.json())
        .then(images => {
            const gallery = document.getElementById('gallery');
            images.forEach(url => {
                const figure = document.createElement('figure');
                const img = document.createElement('img');

                img.src = url;
                img.alt = 'ai-illust';  // デフォルトのaltテキストを設定

                figure.appendChild(img);
                gallery.appendChild(figure);
            });
        })
        .catch(error => console.error('Error loading images:', error));
});