document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // FORMULARIO (Formspree)
    // ================================
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: data,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    alert("¡Mensaje enviado con éxito!");
                    form.reset();
                } else {
                    alert("Hubo un problema al enviar el mensaje.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        });
    }

    // ================================
    // PARTÍCULAS
    // ================================
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#007bff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#007bff",
                    opacity: 0.4,
                    width: 1
                },
                move: { enable: true, speed: 2 }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" } }
            },
            retina_detect: true
        });
    }

    // ================================
    // BOTÓN SUBIR
    // ================================
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", function () {
            scrollBtn.style.display = (window.scrollY > 500) ? "flex" : "none";
        });

        scrollBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ================================
    // SCROLL REVEAL
    // ================================
    if (typeof ScrollReveal !== "undefined") {

        ScrollReveal().reveal('.card', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            interval: 100
        });

        ScrollReveal().reveal('.metodo-texto span', {
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            interval: 300,
            delay: 500
        });

        ScrollReveal().reveal('.hero-content', {
            delay: 100,
            origin: 'left',
            distance: '100px'
        });
    }

    // ================================
    // MODAL FLOWYBOT
    // ================================
    const flowybotLink = document.getElementById("flowybot-link");
    const modal = document.getElementById("flowybot-modal");
    const closeBtn = document.querySelector(".close-modal");

    if (flowybotLink && modal && closeBtn) {

        flowybotLink.addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.add("active");
        });

        closeBtn.addEventListener("click", function () {
            modal.classList.remove("active");
        });

        window.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }
// ================================
// EXPANDIR GOOGLE FORM
// ================================
const openFormBtn = document.getElementById("open-google-form");
const formContainer = document.getElementById("google-form-container");

if (openFormBtn && formContainer) {
    openFormBtn.addEventListener("click", function(e) {
        e.preventDefault();
        formContainer.style.display = "block";
        openFormBtn.style.display = "none"; // oculta el botón
    });
}

    if (openBtn && formContainer) {
        openBtn.addEventListener("click", function(e) {
            e.preventDefault();

            if (formContainer.style.display === "block") {
                formContainer.style.display = "none";
            } else {
                formContainer.style.display = "block";
            }
        });
    }
        if (e.target === modal) {
        modal.classList.remove("active");

        // 🔥 Reset del formulario y botón
        formContainer.style.display = "none";
        openFormBtn.style.display = "inline-block";
    }
});