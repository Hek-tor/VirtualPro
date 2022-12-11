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

const titl_0 = document.querySelector('.titl_0');
const evt_1 = document.querySelector('.evt_1');
const evt_2 = document.querySelector('.evt_2');
const evt_3 = document.querySelector('.evt_3');
const parra_1 = document.querySelector('.parra_1');
const parra_2 = document.querySelector('.parra_2');
const parra_3 = document.querySelector('.parra_3');
const titl_1 = document.querySelector('.titl_1');
const parra_4 = document.querySelector('.parra_4');

const parra_5 = document.querySelector('.parra_5');
const titl_2 = document.querySelector('.titl_2');
const parra_6 = document.querySelector('.parra_6');
const parra_7 = document.querySelector('.parra_7');
const titl_3 = document.querySelector('.titl_3');
const box_1 = document.querySelector('.box_1');
const box_2 = document.querySelector('.box_2');
const box_3 = document.querySelector('.box_3');
const titl_4 = document.querySelector('.titl_4');
const box_4 = document.querySelector('.box_4');
const box_5 = document.querySelector('.box_5');
const box_6 = document.querySelector('.box_6');
const titl_5 = document.querySelector('.titl_5');
const box_7 = document.querySelector('.box_7');
const box_8 = document.querySelector('.box_8');
const box_9 = document.querySelector('.box_9');
const btnEncuesta = document.querySelector('.btnEncuesta');

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
        titl_0.textContent = changeLanguage[lang].titl_0;
        evt_1.textContent = changeLanguage[lang].evt_1;
        evt_2.textContent = changeLanguage[lang].evt_2;
        evt_3.textContent = changeLanguage[lang].evt_3;
        parra_1.textContent = changeLanguage[lang].parra_1;
        parra_2.textContent = changeLanguage[lang].parra_2;
        parra_3.textContent = changeLanguage[lang].parra_3;
        titl_1.textContent = changeLanguage[lang].titl_1;
        parra_4.textContent = changeLanguage[lang].parra_4;
        parra_5.textContent = changeLanguage[lang].parra_5;
        titl_2.textContent = changeLanguage[lang].titl_2;
        parra_6.textContent = changeLanguage[lang].parra_6;
        parra_7.textContent = changeLanguage[lang].parra_7;
        titl_3.textContent = changeLanguage[lang].titl_3;
        box_1.textContent = changeLanguage[lang].box_1;
        box_2.textContent = changeLanguage[lang].box_2;
        box_3.textContent = changeLanguage[lang].box_3;
        titl_4.textContent = changeLanguage[lang].titl_4;
        box_4.textContent = changeLanguage[lang].box_4;
        box_5.textContent = changeLanguage[lang].box_5;
        box_6.textContent = changeLanguage[lang].box_6;
        titl_5.textContent = changeLanguage[lang].titl_5;
        box_7.textContent = changeLanguage[lang].box_7;
        box_8.textContent = changeLanguage[lang].box_8;
        box_9.textContent = changeLanguage[lang].box_9;
        btnEncuesta.textContent = changeLanguage[lang].btnEncuesta;
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
        "titl_0": "Nuestros eventos",
        "evt_1": "Organización de eventos",
        "evt_2": "Eventos presenciales",
        "evt_3": "Eventos virtuales",
        "parra_1": "Además de ser una plataforma virtual tenemos como misión fortalecer y generar el crecimiento de la comunidad de personas apasionadas por el desarrollo de la tecnología. Es por eso que organizamos eventos presenciales y virtuales para el disfrute de todos los que quieran integrarse en esta área.En las otras pestañas brindamos más información sobre cada uno de nuestros diferentes eventos.",
        "parra_2": " Nuestros eventos presenciales tienen como objetivo generar Networking y que todos los aficionados por el mundo del software tengan un espacio dedicado para poder mostrar sus proyectos, portafolios y repositorios.Además siempre contamos con charlas de expertos para aportar conocimientos nuevos a la comunidad.Mantente al tanto de nuestras noticias para saber donde será nuestro siguiente evento presencial abierto a todo el público.",
        "parra_3": "Para todos aquellos que no puedan viajar a un evento presencial les informamos que también contamos con actividades virtuales como charlas, live- conding y entrevistas a influyentes de nuestra comunidad.Estos eventos son gratuitos y puedes verlos desde nuestra aplicación web Así que te invitamos a estar pendiente de las proximas fechas para que puedas disfrutar de estas maravillosas actividades desde la comodidad de tu casa.",
        "titl_1": "Actividades",
        "parra_4": "Les brindamos diversas actividades para que esten atentos a nuestros proximos eventos y ofertas",
        "parra_5": "que vamos a tener en el siguiente año 2023",
        "titl_2": "Califica nuestros eventos",
        "parra_6": "Si ya has tenido la oportunidad de participar en uno",
        "parra_7": "de nuestros eventos te invitamos a llenar la siguiente encuesta.",
        "titl_3": "Calidad de las charlas impartidas:",
        "box_1": "Mala",
        "box_2": "Regular",
        "box_3": "Excelente",
        "titl_4": "Actividades realizadas:",
        "box_4": "Malas",
        "box_5": "Regulares",
        "box_6": "Excelentes",
        "titl_5": "Organización del evento:",
        "box_7": "Malo",
        "box_8": "Regular",
        "box_9": "Excelente",
        "btnEncuesta": "Enviar calificación",
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
        "titl_0": "Our events",
        "evt_1": "Event organization",
        "evt_2": "Face-to-face events",
        "evt_3": "Virtual events",
        "parra_1": "In addition to being a virtual platform, our mission is to strengthen and generate the growth of the community of people passionate about the development of technology. That is why we organize face-to-face and virtual events for the enjoyment of all those who want to join this area. In the other tabs we provide more information about each of our different events.",
        "parra_2": "Our face-to-face events aim to generate Networking and that all fans of the world of software have a dedicated space to show their projects, portfolios and repositories. We also always have talks by experts to contribute new knowledge to the community. Stay up-to-date of our news to find out where our next face-to-face event will be open to the public.",
        "parra_3": "For all those who cannot travel to a face-to-face event, we inform you that we also have virtual activities such as talks, live-conding, and interviews with influential people from our community. These events are free and you can see them from our web application. So we invite you to be pending the next dates so you can enjoy these wonderful activities from the comfort of your home.",
        "titl_1": "Activities",
        "parra_4": "We offer you various activities so that you stay tuned for our next events and offers.",
        "parra_5": "that we will have in the following year 2023",
        "titl_2": "Rate our events",
        "parra_6": "If you have already had the opportunity to participate in one",
        "parra_7": "of our events we invite you to fill out the following survey.",
        "titl_3": "Quality of the talks given:",
        "box_1": "Bad",
        "box_2": "Regular",
        "box_3": "Excellent",
        "titl_4": "Performed activities:",
        "box_4": "Bad",
        "box_5": "Regular",
        "box_6": "Excellent",
        "titl_5": "Event organization:",
        "box_7": "Bad",
        "box_8": "Regular",
        "box_9": "Excellent",
        "btnEncuesta": "Submit rating",
        "contacto": "Contact information",
    },
};
