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

const type_1 = document.querySelector('.type_1');
const type_2 = document.querySelector('.type_2');
const type_3 = document.querySelector('.type_3');
const type_4 = document.querySelector('.type_4');

const curso_1 = document.querySelector('.curso_1');
const curso_2 = document.querySelector('.curso_2');
const curso_3 = document.querySelector('.curso_3');
const curso_4 = document.querySelector('.curso_4');
const curso_5 = document.querySelector('.curso_5');
const curso_6 = document.querySelector('.curso_6');
const curso_7 = document.querySelector('.curso_7');
const curso_8 = document.querySelector('.curso_8');
const curso_9 = document.querySelector('.curso_9');

const text_1 = document.querySelector('.text_1');
const text_2 = document.querySelector('.text_2');

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

        type_1.textContent = changeLanguage[lang].type_1;
        type_2.textContent = changeLanguage[lang].type_2;
        type_3.textContent = changeLanguage[lang].type_3;
        type_4.textContent = changeLanguage[lang].type_4;

        curso_1.textContent = changeLanguage[lang].curso_1;
        curso_2.textContent = changeLanguage[lang].curso_2;
        curso_3.textContent = changeLanguage[lang].curso_3;
        curso_4.textContent = changeLanguage[lang].curso_4;
        curso_5.textContent = changeLanguage[lang].curso_5;
        curso_6.textContent = changeLanguage[lang].curso_6;
        curso_7.textContent = changeLanguage[lang].curso_7;
        curso_8.textContent = changeLanguage[lang].curso_8;
        curso_9.textContent = changeLanguage[lang].curso_9;

        text_1.textContent = changeLanguage[lang].text_1;
        text_2.textContent = changeLanguage[lang].text_2;
        contacto.textContent = changeLanguage[lang].contacto;
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
        "type_1": "Nivel del curso",
        "type_2": "Básico",
        "type_3": "Intermedio",
        "type_4": "Difícil",
        "curso_1": "Fundamentos en Flexbox",
        "curso_2": "Fundamentos en JavaScript",
        "curso_3": "Node JS para expertos",
        "curso_4": "Aprende GO",
        "curso_5": "Java para expertos",
        "curso_6": "Rubi on Rails para expertos",
        "curso_7": "PHP para principiantes",
        "curso_8": "Domina SQL a otro nivel",
        "curso_9": "De cero a experto en PostGreSQL",
        "text_1": "Galería de próximos cursos.",
        "text_2": "En esta galería te mostramos los futuros cursos de estudio que estarán disponibles muy pronto.",
        "contacto": "Información de contacto",
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
        "type_1": "Course level",
        "type_2": "Basic",
        "type_3": "Regular",
        "type_4": "Difficult",
        "curso_1": "Flexbox Basics",
        "curso_2": "Fundamentals in JavaScript",
        "curso_3": "Node JS for experts",
        "curso_4": "Lern GO",
        "curso_5": "Java for experts",
        "curso_6": "Rubi on Rails for experts",
        "curso_7": "PHP for beginners",
        "curso_8": "Master SQL to another level",
        "curso_9": "From zero to expert in PostGreSQL",
        "text_1": "Gallery of upcoming courses.",
        "text_2": "In this gallery we show you the future study courses that will be available very soon.",
        "contacto": "Contact information",
    },
};
