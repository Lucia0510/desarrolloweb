// Elementos Dinámicos

// Eventos de scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const element = document.getElementById('dynamicElement');
    if (scrollPosition > 200) {
        element.style.display = 'block'; // Mostrar elemento
    } else {
        element.style.display = 'none'; // Ocultar elemento
    }
});

// Mostrar/Ocultar elementos
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function() {
    const elementToToggle = document.getElementById('elementToToggle');
    if (elementToToggle.style.display === 'none' || elementToToggle.style.display === '') {
        elementToToggle.style.display = 'block'; // Mostrar
    } else {
        elementToToggle.style.display = 'none'; // Ocultar
    }
});

// Eventos del mouse
const mouseOverElement = document.getElementById('mouseOverElement');
mouseOverElement.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue'; // Cambiar color al pasar el mouse
});
mouseOverElement.addEventListener('mouseout', function() {
    this.style.backgroundColor = ''; // Restaurar color al salir el mouse
});

// Transiciones en el carrusel de imágenes
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); // Cambiar imagen cada 3 segundos

// Intercambio asíncrono de información
// El intercambio asíncrono de información se refiere a la capacidad de enviar y recibir datos sin necesidad de recargar la página. 
// Herramientas comunes para esto incluyen AJAX (Asynchronous JavaScript and XML), Fetch API y WebSockets. 
// Estas herramientas permiten que las aplicaciones web sean más dinámicas y responsivas, mejorando la experiencia del usuario.