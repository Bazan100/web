// Mensaje de bienvenida en consola y mini efecto al hacer click en los enlaces
console.log('Bienvenido a la página de Travis 🎵');

// Efecto: cuando haces click en una canción, cambia el color del link un momento
document.querySelectorAll('.music-link').forEach(link => {
    link.addEventListener('click', function () {
        this.style.color = '#FFD700';
        setTimeout(() => {
            this.style.color = '#1DB954';
        }, 300);
    });
});