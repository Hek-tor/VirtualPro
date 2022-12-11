var foto = 0;
var micarrusel = 0;
var total = 0;
let botonEncuesta = document.querySelector('#Encuesta');

micarrusel = [
    { imageurl: "./img/Eventos/evento_1.jpg", titulo: " Foto #1" },
    { imageurl: "./img/Eventos/evento_2.jpg", titulo: " Foto #2" },
    { imageurl: "./img/Eventos/evento_3.jpg", titulo: " Foto #3" },
    { imageurl: "./img/Eventos/evento_4.jpg", titulo: " Foto #4" },
];

function cambioVista(evt, info) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    };

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    };
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active"
};

var cambiar = function (mas) {
    total = micarrusel.length;
    foto = foto + mas;

    if (foto > total) {
        foto = 1;
    };
    if (foto < 1) {
        foto = total;
    };

    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
};

botonEncuesta.addEventListener('click', function (e) {
    let valorFinal = 0;

    e.preventDefault();
    if (document.getElementById('MaloProd').checked) {
        valorFinal += 1;
    };
    if (document.getElementById('BuenoProd').checked) {
        valorFinal += 2;
    };
    if (document.getElementById('ExcelenteProd').checked) {
        valorFinal += 3;
    };

    if (document.getElementById('MaloServ').checked) {
        valorFinal += 1;
    };
    if (document.getElementById('BuenoServ').checked) {
        valorFinal += 2;
    };
    if (document.getElementById('ExcelenteServ').checked) {
        valorFinal += 3;
    };

    if (document.getElementById('MaloPrec').checked) {
        valorFinal += 1;
    };
    if (document.getElementById('BuenoPrec').checked) {
        valorFinal += 2;
    };
    if (document.getElementById('ExcelentePrec').checked) {
        valorFinal += 3;
    };

    result(valorFinal);
});

function result(valor) {

    if (valor >= 3 && valor < 5) {
        Swal.fire({
            title: 'Lo sentimos, nos estamos esforzando por mejorar.',
            html: '<iframe src="https://embed.lottiefiles.com/animation/86967"></iframe>',
            confirmButtonText: "Aceptar",
        });
    };
    if (valor >= 5 && valor <= 7) {
        Swal.fire({
            title: 'Que bien que te gustara algo. ¡Seguiremos esforzándonos!',
            html: '<iframe src="https://embed.lottiefiles.com/animation/91620"></iframe>',
            confirmButtonText: "Aceptar",
        });
    };
    if (valor > 7) {
        Swal.fire({
            title: 'Nos alegra que te gustara, te esperamos ver nuevamente.',
            html: '<iframe src="https://embed.lottiefiles.com/animation/29774"></iframe>',
            confirmButtonText: "Aceptar",
        });
    };
    if (valor == 0) {
        Swal.fire({
            title: 'Debes llenar toda la encuesta',
            html: '<iframe src = "https://embed.lottiefiles.com/animation/90569"></iframe>',
            confirmButtonText: "Aceptar",
        });
    };
};
let botonScrooll = document.getElementById("btnScroll");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        botonScrooll.style.display = "block";
    } else {
        botonScrooll.style.display = "none";
    }
}
botonScrooll.addEventListener("click", regreso);

function regreso() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}