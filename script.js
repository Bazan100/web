// Efecto visual al hacer click en los enlaces de música
document.querySelectorAll('.music-link').forEach(link => {
    link.addEventListener('click', function () {
        this.style.color = '#FFD700';
        setTimeout(() => {
            this.style.color = '#1DB954';
        }, 300);
    });
});
