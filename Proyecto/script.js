// Función para mostrar/ocultar el menú de idiomas
function toggleLanguageOptions() {
    var languageOptions = document.getElementById("language-options");
    if (languageOptions.style.display === "none" || languageOptions.style.display === "") {
        languageOptions.style.display = "flex"; // Muestra el elemento
    } else {
        languageOptions.style.display = "none"; // Oculta el elemento
    }
}

// Función para ocultar el menú de idiomas si se hace clic fuera de él
function clickOutside(event) {
    var languageOptions = document.getElementById("language-options");
    var languageToggle = document.getElementById("language-toggle");
    if (!languageOptions.contains(event.target) && !languageToggle.contains(event.target)) {
        languageOptions.style.display = "none";
    }
}

// Añade el evento click al botón de lenguajes
document.getElementById("language-toggle").addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el clic en el botón se propague al documento
    toggleLanguageOptions();
});

// Añade el evento click al documento para ocultar el menú
document.addEventListener("click", clickOutside);
