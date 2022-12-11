//Boton traductor
const traslate = document.querySelectorAll('.btnTraslate');

const nav_link_1 = document.querySelector('.nav_link_1');
const nav_link_2 = document.querySelector('.nav_link_2');
const nav_link_3 = document.querySelector('.nav_link_3');
const nav_link_4 = document.querySelector('.nav_link_4');
const nav_link_5 = document.querySelector('.nav_link_5');
const nav_link_6 = document.querySelector('.nav_link_6');
const nav_link_7 = document.querySelector('.nav_link_7');
const nav_link_8 = document.querySelector('.nav_link_8');
const nav_link_9 = document.querySelector('.nav_link_9');

const option_1 = document.querySelector('.option_1');
const option_2 = document.querySelector('.option_2');
const option_3 = document.querySelector('.option_3');
const option_4 = document.querySelector('.option_4');
const option_5 = document.querySelector('.option_5');
const option_6 = document.querySelector('.option_6');

const titulo_1 = document.querySelector('.titulo_1');
const titulo_2 = document.querySelector('.titulo_2');
const titulo_3 = document.querySelector('.titulo_3');
const titulo_4 = document.querySelector('.titulo_4');
const titulo_5 = document.querySelector('.titulo_5');
const titulo_6 = document.querySelector('.titulo_6');
const titulo_7 = document.querySelector('.titulo_7');
const titulo_8 = document.querySelector('.titulo_8');
const titulo_9 = document.querySelector('.titulo_9');
const titulo_10 = document.querySelector('.titulo_10');
const titulo_11 = document.querySelector('.titulo_11');
const titulo_12 = document.querySelector('.titulo_12');

const parrafo_1 = document.querySelector('.parrafo_1');
const parrafo_2 = document.querySelector('.parrafo_2');
const parrafo_3 = document.querySelector('.parrafo_3');
const parrafo_4 = document.querySelector('.parrafo_4');
const parrafo_5 = document.querySelector('.parrafo_5');
const parrafo_6 = document.querySelector('.parrafo_6');
const parrafo_7 = document.querySelector('.parrafo_7');
const parrafo_8 = document.querySelector('.parrafo_8');
const parrafo_9 = document.querySelector('.parrafo_9');
const parrafo_10 = document.querySelector('.parrafo_10');
const parrafo_11 = document.querySelector('.parrafo_11');
const parrafo_12 = document.querySelector('.parrafo_12');

const info_1 = document.querySelector('.info_1');
const info_2 = document.querySelector('.info_2');
const info_3 = document.querySelector('.info_3');
const info_4 = document.querySelector('.info_4');
const info_5 = document.querySelector('.info_5');
const info_6 = document.querySelector('.info_6');
const info_7 = document.querySelector('.info_7');
const info_8 = document.querySelector('.info_8');
const info_9 = document.querySelector('.info_9');
const info_10 = document.querySelector('.info_10');
const info_11 = document.querySelector('.info_11');
const info_12 = document.querySelector('.info_12');

const btn_Compra1 = document.querySelector('.btn_Compra1');
const btn_Compra2 = document.querySelector('.btn_Compra2');
const btn_Compra3 = document.querySelector('.btn_Compra3');
const btn_Compra4 = document.querySelector('.btn_Compra4');
const btn_Compra5 = document.querySelector('.btn_Compra5');
const btn_Compra6 = document.querySelector('.btn_Compra6');
const btn_Compra7 = document.querySelector('.btn_Compra7');
const btn_Compra8 = document.querySelector('.btn_Compra8');
const btn_Compra9 = document.querySelector('.btn_Compra9');
const btn_Compra10 = document.querySelector('.btn_Compra10');
const btn_Compra11 = document.querySelector('.btn_Compra11');
const btn_Compra12 = document.querySelector('.btn_Compra12');

const btn_Info1 = document.querySelector('.btn_Info1');
const btn_Info2 = document.querySelector('.btn_Info2');
const btn_Info3 = document.querySelector('.btn_Info3');
const btn_Info4 = document.querySelector('.btn_Info4');
const btn_Info5 = document.querySelector('.btn_Info5');
const btn_Info6 = document.querySelector('.btn_Info6');
const btn_Info7 = document.querySelector('.btn_Info7');
const btn_Info8 = document.querySelector('.btn_Info8');
const btn_Info9 = document.querySelector('.btn_Info9');
const btn_Info10 = document.querySelector('.btn_Info10');
const btn_Info11 = document.querySelector('.btn_Info11');
const btn_Info12 = document.querySelector('.btn_Info12');

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

        option_1.textContent = changeLanguage[lang].option_1;
        option_2.textContent = changeLanguage[lang].option_2;
        option_3.textContent = changeLanguage[lang].option_3;
        option_4.textContent = changeLanguage[lang].option_4;
        option_5.textContent = changeLanguage[lang].option_5;
        option_6.textContent = changeLanguage[lang].option_6;

        titulo_1.textContent = changeLanguage[lang].titulo_1;
        titulo_2.textContent = changeLanguage[lang].titulo_2;
        titulo_3.textContent = changeLanguage[lang].titulo_3;
        titulo_4.textContent = changeLanguage[lang].titulo_4;
        titulo_5.textContent = changeLanguage[lang].titulo_5;
        titulo_6.textContent = changeLanguage[lang].titulo_6;
        titulo_7.textContent = changeLanguage[lang].titulo_7;
        titulo_8.textContent = changeLanguage[lang].titulo_8;
        titulo_9.textContent = changeLanguage[lang].titulo_9;
        titulo_10.textContent = changeLanguage[lang].titulo_10;
        titulo_11.textContent = changeLanguage[lang].titulo_11;
        titulo_12.textContent = changeLanguage[lang].titulo_12;

        parrafo_1.textContent = changeLanguage[lang].parrafo_1;
        parrafo_2.textContent = changeLanguage[lang].parrafo_2;
        parrafo_3.textContent = changeLanguage[lang].parrafo_3;
        parrafo_4.textContent = changeLanguage[lang].parrafo_4;
        parrafo_5.textContent = changeLanguage[lang].parrafo_5;
        parrafo_6.textContent = changeLanguage[lang].parrafo_6;
        parrafo_7.textContent = changeLanguage[lang].parrafo_7;
        parrafo_8.textContent = changeLanguage[lang].parrafo_8;
        parrafo_9.textContent = changeLanguage[lang].parrafo_9;
        parrafo_10.textContent = changeLanguage[lang].parrafo_10;
        parrafo_11.textContent = changeLanguage[lang].parrafo_11;
        parrafo_12.textContent = changeLanguage[lang].parrafo_12;

        info_1.textContent = changeLanguage[lang].info_1;
        info_2.textContent = changeLanguage[lang].info_2;
        info_3.textContent = changeLanguage[lang].info_3;
        info_4.textContent = changeLanguage[lang].info_4;
        info_5.textContent = changeLanguage[lang].info_5;
        info_6.textContent = changeLanguage[lang].info_6;
        info_7.textContent = changeLanguage[lang].info_7;
        info_8.textContent = changeLanguage[lang].info_8;
        info_9.textContent = changeLanguage[lang].info_9;
        info_10.textContent = changeLanguage[lang].info_10;
        info_11.textContent = changeLanguage[lang].info_11;
        info_12.textContent = changeLanguage[lang].info_12;


        btn_Compra1.textContent = changeLanguage[lang].btn_Compra1;
        btn_Compra2.textContent = changeLanguage[lang].btn_Compra2;
        btn_Compra3.textContent = changeLanguage[lang].btn_Compra3;
        btn_Compra4.textContent = changeLanguage[lang].btn_Compra4;
        btn_Compra5.textContent = changeLanguage[lang].btn_Compra5;
        btn_Compra6.textContent = changeLanguage[lang].btn_Compra6;
        btn_Compra7.textContent = changeLanguage[lang].btn_Compra7;
        btn_Compra8.textContent = changeLanguage[lang].btn_Compra8;
        btn_Compra9.textContent = changeLanguage[lang].btn_Compra9;
        btn_Compra10.textContent = changeLanguage[lang].btn_Compra10;
        btn_Compra11.textContent = changeLanguage[lang].btn_Compra11;
        btn_Compra12.textContent = changeLanguage[lang].btn_Compra12;

        btn_Info1.textContent = changeLanguage[lang].btn_Info1;
        btn_Info2.textContent = changeLanguage[lang].btn_Info2;
        btn_Info3.textContent = changeLanguage[lang].btn_Info3;
        btn_Info4.textContent = changeLanguage[lang].btn_Info4;
        btn_Info5.textContent = changeLanguage[lang].btn_Info5;
        btn_Info6.textContent = changeLanguage[lang].btn_Info6;
        btn_Info7.textContent = changeLanguage[lang].btn_Info7;
        btn_Info8.textContent = changeLanguage[lang].btn_Info8;
        btn_Info9.textContent = changeLanguage[lang].btn_Info9;
        btn_Info10.textContent = changeLanguage[lang].btn_Info10;
        btn_Info11.textContent = changeLanguage[lang].btn_Info11;
        btn_Info12.textContent = changeLanguage[lang].btn_Info12;

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
        "option_1": "Categorías",
        "option_2": "Desarrollo de Software",
        "option_3": "Gestión de negocios",
        "option_4": "Metodologías ágiles",
        "option_5": "Ofertas",
        "option_6": "Descuentos",
        "titulo_1": "Backend con Javascript",
        "titulo_2": "Gestión de datos",
        "titulo_3": "Interfaz con Bootstrap",
        "titulo_4": "Pizarra digital Miro",
        "titulo_5": "Aprende Python",
        "titulo_6": "Liderazgo empresarial",
        "titulo_7": "DevOps con Azure",
        "titulo_8": "Excel para principiantes",
        "titulo_9": "Conceptos para API'S",
        "titulo_10": "Metodología Scrum",
        "titulo_11": "Gestión de finanzas",
        "titulo_12": "Gestiones con Jira",
        "parrafo_1": "En este curso aprenderás a dominar el backend con  uno de los lenguajes de programación más usados en el mundo.",
        "parrafo_2": "Para obtener los mejores resultados en tu organización necesitas llevar un buen control de datos. Este curso te ayudará.",
        "parrafo_3": "Si aprendes a usar Bootstrap podrás crear una  interfaz limpia y responsive para los usuarios de tu web.",
        "parrafo_4": "Este curso te enseña a dominar la plataforma  Miro para gestionar tus metodologías de trabajo.",
        "parrafo_5": "Con este curso aprendarás a programar en Python  para tener una buena gestión de datos.",
        "parrafo_6": "Actualmente muchas plataformas digitales te ofrecen la posibilidad de mejorar tu liderazgo, aprende a usarlas.",
        "parrafo_7": "Con DevOps y las opciones de gestionar versiones con Azure  podrás mejorar el entorno de tus proyectos.",
        "parrafo_8": "Excel es una increible herramienta para tus labores profesionales en este curso puedes aprender a sacarle provecho.",
        "parrafo_9": "Con la plataforma Postman aprenderás conceptos sobre API necesarios para aplicarlos en entornos de desarrollo.",
        "parrafo_10": "En este curso aprenderás Scrum esto te ayudará  a manejar de mejor manera las buenas prácticas en un proyecto.",
        "parrafo_11": "Aprendiendo diversas herramientas tecnológicas podrás llevar un mejor control económico en tu empresa.",
        "parrafo_12": "En este curso aprendarás Jira, para la gestión de  proyectos de la mano con metodologías ágiles.",
        "info_1": "22 horas de contenido | Español | Certificado",
        "info_2": "10 horas de contenido | Español | Certificado",
        "info_3": "21 horas de contenido | Español | Proyecto",
        "info_4": "9 horas de contenido | Español | Proyecto",
        "info_5": "20 horas de contenido | Español | Certificado",
        "info_6": "24 horas de contenido | Español | Certificado",
        "info_7": "12 horas de contenido | Español | Proyecto",
        "info_8": "20 horas de contenido | Español | Proyecto",
        "info_9": "9 horas de contenido | Español | Proyecto",
        "info_10": "48 horas de contenido | Español | Certificado",
        "info_11": "12 horas de contenido | Español | Certificado",
        "info_12": "12 horas de contenido | Español | Certificado",
        "btn_Compra1": "Comprar",
        "btn_Compra2": "Comprar",
        "btn_Compra3": "Comprar",
        "btn_Compra4": "Comprar",
        "btn_Compra5": "Comprar",
        "btn_Compra6": "Comprar",
        "btn_Compra7": "Comprar",
        "btn_Compra8": "Comprar",
        "btn_Compra9": "Comprar",
        "btn_Compra10": "Comprar",
        "btn_Compra11": "Comprar",
        "btn_Compra12": "Comprar",
        "btn_Info1": "Información",
        "btn_Info2": "Información",
        "btn_Info3": "Información",
        "btn_Info4": "Información",
        "btn_Info5": "Información",
        "btn_Info6": "Información",
        "btn_Info7": "Información",
        "btn_Info8": "Información",
        "btn_Info9": "Información",
        "btn_Info10": "Información",
        "btn_Info11": "Información",
        "btn_Info12": "Información",
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
        "option_1": "Categories",
        "option_2": "Software development",
        "option_3": "Business management",
        "option_4": "Agile methodologies",
        "option_5": "Offers",
        "option_6": "Discounts",
        "titulo_1": "Backend with Javascript",
        "titulo_2": "Data management",
        "titulo_3": "Interface with Bootstrap",
        "titulo_4": "Miro digital whiteboard",
        "titulo_5": "Lern Python",
        "titulo_6": "Business leadership",
        "titulo_7": "DevOps with Azure",
        "titulo_8": "Excel for beginners",
        "titulo_9": "Concepts for API's",
        "titulo_10": "Scrum Methodology",
        "titulo_11": "Finance management",
        "titulo_12": "Management with Jira",
        "parrafo_1": "In this course you will learn to master the backend with one of the most used programming languages in the world.",
        "parrafo_2": "To get the best results in your organization you need to keep good data control. This course will help you.",
        "parrafo_3": "If you learn to use Bootstrap you will be able to create a clean and responsive interface for the users of your website.",
        "parrafo_4": "This course teaches you to master the Miro platform to manage your work methodologies.",
        "parrafo_5": "With this course you will learn to program in Python to have good data management.",
        "parrafo_6": "Currently many digital platforms offer you the possibility of improving your leadership, learn to use them.",
        "parrafo_7": "With DevOps and the options to manage versions with Azure you will be able to improve the environment of your projects.",
        "parrafo_8": "Excel is an incredible tool for your professional work in this course you can learn to take advantage of it.",
        "parrafo_9": "With the Postman platform you will learn API concepts necessary to apply them in development environments.",
        "parrafo_10": "In this course you will learn Scrum, this will help you better manage good practices in a project.",
        "parrafo_11": "By learning various technological tools you will be able to have better economic control in your company.",
        "parrafo_12": "In this course you will learn Jira, for project management hand in hand with agile methodologies.",
        "info_1": "22 hours of content | English | Certificate",
        "info_2": "10 hours of content | English | Certificate",
        "info_3": "21 hours of content | English | Full Project",
        "info_4": "9 hours of content | English | Full Project",
        "info_5": "20 hours of content | English | Full Project",
        "info_6": "24 hours of content | English | Full Project",
        "info_7": "12 hours of content | English | Full Project",
        "info_8": "20 hours of content | English | Full Project",
        "info_9": "9 hours of content | English | Full Project",
        "info_10": "48 hours of content | English | Certificate",
        "info_11": "12 hours of content | English | Certificate",
        "info_12": "12 hours of content | English | Certificate",
        "btn_Compra1": "Add",
        "btn_Compra2": "Add",
        "btn_Compra3": "Add",
        "btn_Compra4": "Add",
        "btn_Compra5": "Add",
        "btn_Compra6": "Add",
        "btn_Compra7": "Add",
        "btn_Compra8": "Add",
        "btn_Compra9": "Add",
        "btn_Compra10": "Add",
        "btn_Compra11": "Add",
        "btn_Compra12": "Add",
        "btn_Info1": "Information",
        "btn_Info2": "Information",
        "btn_Info3": "Information",
        "btn_Info4": "Information",
        "btn_Info5": "Information",
        "btn_Info6": "Information",
        "btn_Info7": "Information",
        "btn_Info8": "Information",
        "btn_Info9": "Information",
        "btn_Info10": "Information",
        "btn_Info11": "Information",
        "btn_Info12": "Information",
        "contacto": "Contact information",
    },
};
