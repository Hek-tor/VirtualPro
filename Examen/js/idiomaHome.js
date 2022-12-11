//Boton traductor
const traslate = document.querySelectorAll('.btnTraslate');
let flagEng = document.querySelector('#LangEng');
let flagEs = document.querySelector('#LangEs');

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

//banner
const titulo_Banner = document.querySelector('.titulo');
const subtitulo_Baner = document.querySelector('.subtitulo');
const boton_Banner = document.querySelector('.moreInfo');

//Anuncio
const add = document.querySelector('.titulo__Principal');

//Main
const parrafo_1 = document.querySelector('.box__paragraph_Right');
const sponsor__Tittle = document.querySelector('.sponsor__Tittle');
const parrafo_2 = document.querySelector('.box__paragraph_Left');
const img = document.querySelector('.ad')
//Testimonial
const test_1 = document.querySelector('.test_1');
const test_2 = document.querySelector('.test_2');
const test_3 = document.querySelector('.test_3');
const test_4 = document.querySelector('.test_4');
const test_5 = document.querySelector('.test_5');
const test_6 = document.querySelector('.test_6');

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
        subtitulo_Baner.textContent = changeLanguage[lang].subtitulo_Baner;
        boton_Banner.textContent = changeLanguage[lang].boton_Banner;
        add.textContent = changeLanguage[lang].add;
        parrafo_1.textContent = changeLanguage[lang].parrafo_1;
        sponsor__Tittle.textContent = changeLanguage[lang].sponsor__Tittle;
        parrafo_2.textContent = changeLanguage[lang].parrafo_2;
        test_1.textContent = changeLanguage[lang].test_1;
        test_2.textContent = changeLanguage[lang].test_2;
        test_3.textContent = changeLanguage[lang].test_3;
        test_4.textContent = changeLanguage[lang].test_4;
        test_5.textContent = changeLanguage[lang].test_5;
        test_6.textContent = changeLanguage[lang].test_6;
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
        "subtitulo_Baner": "El momento para dominar la tecnología es ahora",
        "boton_Banner": "Conocer más",
        "add": "Descuentos del 50% en cursos seleccionados",
        "parrafo_1": "Hoy en día es de suma importancia dominar lenguajes de programación y otras herramientas tecnológicas que impactan en nuestra sociedad. Saber sobre esto te puede insertar en el mercado laboral o incluso impulsarte dentro de este. Así que ahora es el momento para tomar uno de nuestros cursos y transformarte en todo un experto. Nuestra plataforma virtual te brinda los medios para que avances a tu ritmo y aprendar todo lo relacionado con este maravilloso mundo de la tecnología.",
        "sponsor__Tittle": "Empresas que confían en nosotros",
        "parrafo_2": "Si formas parte de un equipo de trabajo y quieres capacitar a tus colaboradores podemos ofrecerte un plan exclusivo para tu organización. Con este paquete tu empresa o grupo tendrá acceso a una formación de calidad para mejorar sus resultados o rendimiento en proyectos relacionados con la tecnología. Puedes ir a nuestra sección de contáctenos  para que uno de nuestros asesores se comunique con tu organización. Te mostramos algunas e las empresas que confían en nuestra capacidad de formación:",
        "test_1": "Desarrollo de IA",
        "test_2": "Metodologías ágiles",
        "test_3": "Seguridad en redes",
        "test_4": "Análisis de datos",
        "test_5": "Capacitación en TI",
        "test_6": "Control de datos",
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
        "subtitulo_Baner": "The time to master technology is now",
        "boton_Banner": "More",
        "add": "50% discounts on selected courses",
        "parrafo_1": "Nowadays it is very important to master programming languages and other technological tools that impact our society. Knowing about this can insert you into the labor market or even boost you within it. So now is the time to take one of our courses and become an expert. Our virtual platform gives you the means to advance at your own pace and learn everything related to this wonderful world of technology.",
        "sponsor__Tittle": "Companies that trust us.",
        "parrafo_2": "If you are part of a work team and want to train your collaborators, we can offer you an exclusive plan for organizations. With this package, your company or group will have access to quality training to improve their results or performance in projects related to technology. You can go to our contact us section so that one of our advisors can contact your organization. We show you some of the companies that trust our training capacity:",
        "test_1": "AI development",
        "test_2": "Agile methodologies",
        "test_3": "Network security",
        "test_4": "Analysis of data",
        "test_5": "IT training",
        "test_6": "Data control",
        "contacto": "Contact information",
    },
};

flagEng.addEventListener('click', function () {
    img.src = './img/intro_TI2.webp';
})
flagEs.addEventListener('click', function () {
    img.src = './img/intro_TI.webp';
})