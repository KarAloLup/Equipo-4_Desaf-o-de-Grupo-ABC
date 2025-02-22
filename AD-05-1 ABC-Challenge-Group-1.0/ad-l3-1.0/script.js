// Función para generar un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Selecciona todos los elementos con la clase "clickable" (las etiquetas h5)
const clickableElements = document.querySelectorAll('.clickable');

// Añadir un "listener" de clic a cada elemento
clickableElements.forEach(element => {
    element.addEventListener('click', function() {
        // Cambia el color de fondo de la etiqueta a un color aleatorio
        element.style.color = getRandomColor();
    });
});
