console.log("Sitio de turismo cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {

    // ================= HEADER COLOR + SECCIÓN ACTIVA =================
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    window.addEventListener("scroll", () => {
        // Header color
        header.classList.toggle("scrolled", window.scrollY > 50);

        // Sección activa
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // ================= MENU HAMBURGUESA =================
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav");
    const overlay = document.querySelector(".menu-overlay");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuToggle.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Cerrar al hacer click en overlay
    overlay.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Cerrar al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.classList.remove("active");
            overlay.classList.remove("active");
        });
    });

});
 // ================= CARRUSEL IMAGENES =================
const images = [
    "img/3luciernagas.webp",
    "img/pulque.jpg",
    "img/luciernaga.jpg",
    "img/monte.jpg",
    "img/aguamiel.jpg",
    "img/lucierna.jpg",
    "img/luciernagas.webp"
];

let index = 0;

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// imagen inicial
img1.style.backgroundImage = `url(${images[0]})`;
img1.classList.add("active");

let showFirst = true;


images.forEach(src => {
    const img = new Image();
    img.src = src;
});



setInterval(() => {
    index = (index + 1) % images.length;

    const nextImg = showFirst ? img2 : img1;
    const currentImg = showFirst ? img1 : img2;

    nextImg.style.backgroundImage = `url(${images[index]})`;
    nextImg.classList.add("active");
    currentImg.classList.remove("active");

    showFirst = !showFirst;
}, 6000);


//inicio carucel

document.addEventListener('DOMContentLoaded', () => {

    const strip = document.querySelector('.image-strip');
    const cards = document.querySelectorAll('.image-card');
    const infoCard = document.getElementById('infoCard');

    const INFO_WIDTH = 320;
    const GAP = 24;

    cards.forEach(card => {
        card.addEventListener('click', () => {

            // Activa la card
            infoCard.classList.add('active');

            // Calcula posición del elemento
            const cardRight =
                card.offsetLeft + card.offsetWidth + GAP + INFO_WIDTH;

            const visibleRight =
                strip.scrollLeft + strip.clientWidth;

            // Si no cabe, empuja el carrusel
            if (cardRight > visibleRight) {
                strip.scrollLeft += cardRight - visibleRight;
            }
        });
    });

});



const items = document.querySelectorAll('.gallery-item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // quitar active a todos
        items.forEach(i => i.classList.remove('active'));

        // activar el actual
        item.classList.add('active');
    });
});


// Selecciona todas las miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');
// Imagen grande principal
const mainImage = document.getElementById('mainImage');

// Agrega evento click a cada miniatura
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
        mainImage.alt = thumb.alt;
    });
});

// google maps 
document.addEventListener('DOMContentLoaded', () => {
  const mapa = document.querySelector('.mapa-santuario.animado iframe');

  if (!mapa) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        mapa.classList.add('visible');
        observer.unobserve(mapa);
      }
    });
  }, {threshold: 0.1});

  observer.observe(mapa);
});

// calendario ------------------------------------

/* ===================================== */
/* VARIABLES GENERALES */
/* ===================================== */

const botones = document.querySelectorAll(".btn-reservar");
const modal = document.getElementById("modalReserva");
const cerrar = document.querySelector(".cerrar");

let paqueteSeleccionado = "";

/* ===================================== */
/* ABRIR MODAL */
/* ===================================== */

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        paqueteSeleccionado = boton.dataset.paquete;

        modal.style.display = "block";

    });

});

/* ===================================== */
/* CERRAR MODAL */
/* ===================================== */

cerrar.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if(e.target == modal){
        modal.style.display = "none";
    }

};

/* ===================================== */
/* CALENDARIO PROFESIONAL */
/* ===================================== */

flatpickr("#fechaReserva", {

    dateFormat: "Y-m-d",
    minDate: "today",
    disableMobile: true

});

/* ===================================== */
/* ENVIAR RESERVA A WHATSAPP */
/* ===================================== */

document.getElementById("confirmarReserva").onclick = () => {

    const fecha = document.getElementById("fechaReserva").value;

    const personas = document.getElementById("personasReserva").value;

    const numero = "5212482501061";

    const mensaje = `Hola, quiero reservar el paquete ${paqueteSeleccionado} para el avistamiento de luciérnagas Lumara en Nanacamilpa.

Fecha: ${fecha}
Personas: ${personas}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url,"_blank");

};
/* ===================================== */
/* LIMPIAR CAMPOS DEL MODAL */
/* ===================================== */

function limpiarFormulario(){

document.getElementById("fechaReserva").value = "";
document.getElementById("personasReserva").value = 1;

}
/* ===================================== */
/* CERRAR MODAL CON X */
/* ===================================== */

cerrar.onclick = () => {

modal.style.display = "none";

limpiarFormulario();

};
/* ===================================== */
/* CERRAR MODAL HACIENDO CLICK AFUERA */
/* ===================================== */

window.onclick = (e) => {

if(e.target == modal){

modal.style.display = "none";

limpiarFormulario();

}

};
document.getElementById("confirmarReserva").onclick = () => {

const fecha = document.getElementById("fechaReserva").value;

const personas = document.getElementById("personasReserva").value;

const numero = "5212482501061";

const mensaje = `Hola, quiero reservar el paquete ${paqueteSeleccionado} para el avistamiento de luciérnagas Lumara en Nanacamilpa.

Fecha: ${fecha}
Personas: ${personas}`;

const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

window.open(url,"_blank");

/* limpiar formulario */

limpiarFormulario();

/* cerrar modal */

modal.style.display = "none";

};

/* ===================================== */
/* FAQ DESPLEGABLE */
/* ===================================== */

const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach(pregunta => {

    pregunta.addEventListener("click", () => {

        const respuesta = pregunta.nextElementSibling;

        if(respuesta.style.maxHeight){
            respuesta.style.maxHeight = null;
            pregunta.querySelector(".faq-icon").textContent = "+";
        } else {
            respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            pregunta.querySelector(".faq-icon").textContent = "−";
        }

    });

});