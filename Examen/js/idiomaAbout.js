//Boton traductor
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

//banner
const titulo_Banner = document.querySelector('.aboutTitulo');
const subtitulo_Baner = document.querySelector('.parrafo_Sobre');
const boton_Banner = document.querySelector('.subs');

//Anuncio
const add = document.querySelector('.exp');

//Main
const parrafo_1 = document.querySelector('.class');
const sponsor__Tittle = document.querySelector('.project');
const parrafo_2 = document.querySelector('.student');
//Testimonial
const test_1 = document.querySelector('.instructor');
const test_2 = document.querySelector('.descr_1');
const test_3 = document.querySelector('.descr_2');
const test_4 = document.querySelector('.descr_3');
const test_5 = document.querySelector('.descr_4');
const test_6 = document.querySelector('.descr_5');
const test_7 = document.querySelector('.descr_6');
const test_8 = document.querySelector('.descr_7');
const test_9 = document.querySelector('.descr_8');
const test_10 = document.querySelector('.descr_9');

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
        titulo_Banner.textContent = changeLanguage[lang].titulo_Banner;
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
        test_7.textContent = changeLanguage[lang].test_7;
        test_8.textContent = changeLanguage[lang].test_8;
        test_9.textContent = changeLanguage[lang].test_9;
        test_10.textContent = changeLanguage[lang].test_10;
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
        "titulo_Banner": "Sobre nosotros",
        "subtitulo_Baner": "Nuestro enfoque es preparar a nuestros estudiantes en tecnologías emergentes para convertirlos en expertos. También ofrecemos capacitación a profesionales para que estos profundicen sus conocimientos y aporten  mejoras en los proyectos de sus organizaciones En nuestra plataforma se encuentra disponible una gran cantidad de cursos online con material de estudio preparado con buenos estándares de calidad.",
        "boton_Banner": "Suscríbete a un plan mensual y disfruta de todo el contenido educativo de la plataforma Planes de estudio",
        "add": "Años de Experiencia",
        "parrafo_1": "Clases impartidas",
        "sponsor__Tittle": "Proyectos",
        "parrafo_2": "Estudiantes online",
        "test_1": "Nuestros instructores",
        "test_2": "10 años de experiencia como Front end developer.",
        "test_3": "5 años de experiencia como analista de datos.",
        "test_4": "Profesora de estadística con experiencia en RStudio.",
        "test_5": "6 años de experiencia enseñando bases de datos.",
        "test_6": "Nueva instructora con conocimientos en Java.",
        "test_7": "6 años de experiencia en backend con C#.",
        "test_8": "Instrunctor en bootcamps sobre desarrollo web.",
        "test_9": "Ingeniero en sistemas. Enfocado en la enseñanza.",
        "test_10": "10 años de experiencia en metodologías ágiles..",
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
        "titulo_Banner": "About Us",
        "subtitulo_Baner": "Our focus is to prepare our students in emerging technologies to become experts. We also offer training to professionals so that they deepen their knowledge and contribute to improvements in the projects of their organizations A large number of online courses are available on our platform with study material prepared with good quality standards.",
        "boton_Banner": "Subscribe to a monthly plan and enjoy all the educational content of the Study Plans platform",
        "add": "Years of experience",
        "parrafo_1": "Classes taught",
        "sponsor__Tittle": "Projects",
        "parrafo_2": "online students",
        "test_1": "Our instructors",
        "test_2": "10 years of experience as Front end developer.",
        "test_3": "5 years of experience as a data analyst.",
        "test_4": "Statistics teacher with experience in RStudio.",
        "test_5": "6 years of experience teaching databases.",
        "test_6": "New instructor with knowledge in Java.",
        "test_7": "6 years of backend experience with C#.",
        "test_8": "Instructor in bootcamps on web development.",
        "test_9": "Systems engineer. Focused on teaching.",
        "test_10": "10 years of experience in agile methodologies.",
        "contacto": "Contact information",
    },
};
