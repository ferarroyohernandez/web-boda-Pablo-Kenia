// Obtener todas las secciones de la página
const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;

// Escuchar eventos de desplazamiento en la ventana
window.addEventListener('wheel', handleScroll, { passive: false });

function handleScroll(event) {
    event.preventDefault(); // Evitar el desplazamiento automático
    
    const currentSection = sections[currentSectionIndex];
    
    // Verificar si estamos al final de la sección actual (solo si se desplaza hacia abajo)
    if (event.deltaY > 0 && currentSection.scrollTop + currentSection.clientHeight >= currentSection.scrollHeight) {
        // Solo permite avanzar si hay una sección siguiente
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        }
    }
    
    // Verificar si estamos al inicio de la sección actual (solo si se desplaza hacia arriba)
    else if (event.deltaY < 0 && currentSection.scrollTop === 0) {
        // Solo permite retroceder si no estamos en la primera sección
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
    }
}

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}
