function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;

    document.getElementById(video_id).src = video + '& auyoplay=1';
    document.getElementById(div).style.display = 'block';
};

function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;

    var limpiar = video.replace('& auyoplay=1', '');
    document.getElementById(video_id).src = limpiar;

    document.getElementById(div).style.display = 'none';
};

let botonScrooll = document.getElementById("btnScroll");

window.onload = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop < 1 ||
        document.documentElement.scrollTop < 1
    ) {
        botonScrooll.style.display = "block";
    } else {
        botonScrooll.style.display = "none";
    }
};
botonScrooll.addEventListener("click", regreso);

function regreso() {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
};
