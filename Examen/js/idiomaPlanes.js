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


const Plan_1 = document.querySelector('.Plan_1');
const Plan_2 = document.querySelector('.Plan_2');
const Plan_3 = document.querySelector('.Plan_3');
const Mes_1 = document.querySelector('.Mes_1');
const Mes_2 = document.querySelector('.Mes_2');
const Mes_3 = document.querySelector('.Mes_3');
const Ben_1 = document.querySelector('.Ben_1');
const Ben_2 = document.querySelector('.Ben_2');
const Ben_3 = document.querySelector('.Ben_3');
const Ben_4 = document.querySelector('.Ben_4');
const Ben_5 = document.querySelector('.Ben_5');
const Ben_6 = document.querySelector('.Ben_6');
const Ben_7 = document.querySelector('.Ben_7');
const Ben_8 = document.querySelector('.Ben_8');
const Ben_9 = document.querySelector('.Ben_9');
const Ben_10 = document.querySelector('.Ben_10');
const Ben_11 = document.querySelector('.Ben_11');
const Ben_12 = document.querySelector('.Ben_12');
const add_1 = document.querySelector('.add_1');
const add_2 = document.querySelector('.add_2');
const add_3 = document.querySelector('.add_3');

const razon = document.querySelector('.razon');
const Oferta1 = document.querySelector('.Oferta1');
const Oferta2 = document.querySelector('.Oferta2');
const moreInfo = document.querySelector('.moreInfo');
const cerrar = document.querySelector('.lightbox-close');

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
        Plan_1.textContent = changeLanguage[lang].Plan_1;
        Plan_2.textContent = changeLanguage[lang].Plan_2;
        Plan_3.textContent = changeLanguage[lang].Plan_3;
        Mes_1.textContent = changeLanguage[lang].Mes_1;
        Mes_2.textContent = changeLanguage[lang].Mes_2;
        Mes_3.textContent = changeLanguage[lang].Mes_3;
        Ben_1.textContent = changeLanguage[lang].Ben_1;
        Ben_2.textContent = changeLanguage[lang].Ben_2;
        Ben_3.textContent = changeLanguage[lang].Ben_3;
        Ben_4.textContent = changeLanguage[lang].Ben_4;
        Ben_5.textContent = changeLanguage[lang].Ben_5;
        Ben_6.textContent = changeLanguage[lang].Ben_6;
        Ben_7.textContent = changeLanguage[lang].Ben_7;
        Ben_8.textContent = changeLanguage[lang].Ben_8;
        Ben_9.textContent = changeLanguage[lang].Ben_9;
        Ben_10.textContent = changeLanguage[lang].Ben_10;
        Ben_11.textContent = changeLanguage[lang].Ben_11;
        Ben_12.textContent = changeLanguage[lang].Ben_12;
        add_1.textContent = changeLanguage[lang].add_1;
        add_2.textContent = changeLanguage[lang].add_2;
        add_3.textContent = changeLanguage[lang].add_3;
        razon.textContent = changeLanguage[lang].razon;
        Oferta1.textContent = changeLanguage[lang].Oferta1;
        Oferta2.textContent = changeLanguage[lang].Oferta2;
        moreInfo.textContent = changeLanguage[lang].moreInfo;
        cerrar.textContent = changeLanguage[lang].cerrar;
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
        "Plan_1": "Estándar",
        "Plan_2": "Empresarial",
        "Plan_3": "Platinum",
        "Mes_1": "Mensual",
        "Mes_2": "Mensual",
        "Mes_3": "Mensual",
        "Ben_1": "Acceso a todos los cursos de la plataforma.",
        "Ben_2": "Anuncios de otros instructores.",
        "Ben_3": "Espacio de 500MB para guardar material.",
        "Ben_4": "Calidad de video en 720p.",
        "Ben_5": "Acceso a todos los cursos de la plataforma.",
        "Ben_6": "Instructores en tiempo real disponibles.",
        "Ben_7": "Todos los datos guardados en la nube.",
        "Ben_8": "Calidad de video en 4K",
        "Ben_9": "Acceso a todos los cursos de la plataforma.",
        "Ben_10": "Sin anuncios ni contenido patrocinado.",
        "Ben_11": "Espacio de 1TB para guardar material.",
        "Ben_12": "Calidad de video en 1080p",
        "add_1": "COMPRAR",
        "add_2": "COMPRAR",
        "add_3": "COMPRAR",
        "razon": "¿Por qué elegir Virtual Pro?",
        "Oferta1": "Ofrecemos una amplia gama de cursos para convertir a nuestros estudiantes en",
        "Oferta2": "personas hábiles en el área de la tecnología de la infomarción.",
        "moreInfo": "Ver video",
        "cerrar": "CERRAR | X",
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
        "Plan_1": "Standard",
        "Plan_2": "Business",
        "Plan_3": "Platinum",
        "Mes_1": "Monthly",
        "Mes_2": "Monthly",
        "Mes_3": "Monthly",
        "Ben_1": "Access to all the courses on the Virtual Pro+.",
        "Ben_2": "Announcements from other instructors.",
        "Ben_3": "500MB space to save material.",
        "Ben_4": "Video quality in 720p.",
        "Ben_5": "Access to all the courses on the Virtual Pro+",
        "Ben_6": "Real time instructors available.",
        "Ben_7": "All data saved in the cloud.",
        "Ben_8": "4K video quality.",
        "Ben_9": "Access to all the courses on the Virtual Pro+",
        "Ben_10": "No ads or sponsored content.",
        "Ben_11": "1TB space to store material.",
        "Ben_12": "1080p video quality available",
        "add_1": "Get plan",
        "add_2": "Get plan",
        "add_3": "Get plan",
        "razon": "Why choose VirtualPro?",
        "Oferta1": "We offer a wide range of courses to turn our students into ",
        "Oferta2": "people skilled in the area of information technology.",
        "moreInfo": "Watch video",
        "cerrar": "CLOSE | X",
        "contacto": "Contact information",
    },
};
