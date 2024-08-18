function toggleLanguageOptions() {
    var languageOptions = document.getElementById("language-options");
    if (languageOptions.style.display === "none" || languageOptions.style.display === "") {
        languageOptions.style.display = "flex"; // Muestra el elemento
    } else {
        languageOptions.style.display = "none"; // Oculta el elemento
    }
}

function clickOutside(event) {
    var languageOptions = document.getElementById("language-options");
    var languageToggle = document.getElementById("language-toggle");
    if (!languageOptions.contains(event.target) && !languageToggle.contains(event.target)) {
        languageOptions.style.display = "none";
    }
}

document.getElementById("language-toggle").addEventListener("click", function(event) {
    event.stopPropagation();
    toggleLanguageOptions();
});
document.addEventListener("click", clickOutside);

(function() {

    emailjs.init("b34fMjjii8LcdrxYl");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Validar los campos del formulario
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }


        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message === "") {
            alert("Please enter a message.");
            return;
        }

   
        emailjs.sendForm('maria_Email', 'template_dtdondj', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send message. Please try again later.');
            });
    });
})();


document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
