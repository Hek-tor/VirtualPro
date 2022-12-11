const traslate = document.querySelectorAll('.btnTraslate');

//navbar
const nav_link_1 = document.querySelector('.nav_link_1');
const nav_link_2 = document.querySelector('.nav_link_2');
const nav_link_3 = document.querySelector('.nav_link_3');
const nav_link_4 = document.querySelector('.nav_link_4');
const nav_link_5 = document.querySelector('.nav_link_5');
const nav_link_6 = document.querySelector('.nav_link_6');
const nav_link_7 = document.querySelector('.nav_link_7');
const nav_link_8 = document.querySelector('.nav_link_8');
const nav_link_9 = document.querySelector('.nav_link_9');

const sub_1 = document.querySelector('.sub_1');
const sub_2 = document.querySelector('.sub_2');
const sub_3 = document.querySelector('.sub_3');
const sub_4 = document.querySelector('.sub_4');
const sub_5 = document.querySelector('.sub_5');
const sub_6 = document.querySelector('.sub_6');
const sub_7 = document.querySelector('.sub_7');
const sub_8 = document.querySelector('.sub_8');
const sub_9 = document.querySelector('.sub_9');

//footer
const contacto = document.querySelector('.contacto');

traslate.forEach(r => {
    r.addEventListener('click', () => {
        let lang = r.getAttribute('language');
        nav_link_1.textContent = changeLanguage[lang].nav_link_1;
        nav_link_2.textContent = changeLanguage[lang].nav_link_2;
        nav_link_3.textContent = changeLanguage[lang].nav_link_3;
        nav_link_4.textContent = changeLanguage[lang].nav_link_4;
        nav_link_5.textContent = changeLanguage[lang].nav_link_5;
        nav_link_6.textContent = changeLanguage[lang].nav_link_6;
        nav_link_7.textContent = changeLanguage[lang].nav_link_7;
        nav_link_8.textContent = changeLanguage[lang].nav_link_8;
        nav_link_9.textContent = changeLanguage[lang].nav_link_9;

        sub_1.textContent = changeLanguage[lang].sub_1;
        sub_2.textContent = changeLanguage[lang].sub_2;
        sub_3.textContent = changeLanguage[lang].sub_3;
        sub_4.textContent = changeLanguage[lang].sub_4;
        sub_5.textContent = changeLanguage[lang].sub_5;
        sub_6.textContent = changeLanguage[lang].sub_6;
        sub_7.textContent = changeLanguage[lang].sub_7;
        sub_8.textContent = changeLanguage[lang].sub_8;
        sub_9.textContent = changeLanguage[lang].sub_9;
    });
});
let changeLanguage = {
    "Spanish": {
        "nav_link_1": "Inicio",
        "nav_link_2": "Nosotros",
        "nav_link_3": "Cursos disponibles",
        "nav_link_4": "Contáctenos",
        "nav_link_5": "Benefícios",
        "nav_link_6": "Planes de estudios",
        "nav_link_7": "Eventos",
        "nav_link_8": "Regresar",
        "nav_link_9": "Galería",
        "sub_1": "Información de contacto",
        "sub_2": "Usa este formulario para recibir ayuda de nuestros asesores. ¡Será un gusto atenderte!",
        "sub_3": "Correo electrónico",
        "sub_4": "Necesitas un correo para enviar el mensaje.",
        "sub_5": "Consulta",
        "sub_6": "Escríbenos tú consulta en este espacio.",
        "sub_7": "Consultas frecuentes.",
        "sub_8": "Acepto las políticas de privacidad de la empresa.",
        "sub_9": "Enviar consulta",
    },
    "English": {
        "nav_link_1": "Home",
        "nav_link_2": "About Us",
        "nav_link_3": "Courses",
        "nav_link_4": "Contact Us",
        "nav_link_5": "Benefits",
        "nav_link_6": "Study Plans",
        "nav_link_7": "Events",
        "nav_link_8": "Return",
        "nav_link_9": "Gallery",
        "sub_1": "Contact information",
        "sub_2": "Use this form to receive help from our advisors. It will be a pleasure to serve you!",
        "sub_3": "Email",
        "sub_4": "You need an email to send the message.",
        "sub_5": "Doubt",
        "sub_6": "Write us your query in this space.",
        "sub_7": "Frequent inquiries.",
        "sub_8": "RegI accept the privacy policies of the company.",
        "sub_9": "Send",
    },
};
