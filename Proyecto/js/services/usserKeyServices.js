var sesion = [];

function loadSesion(usserName, usserEmail, usserPassword) {
    let usserSesion = {
        Name: usserName,
        Email: usserEmail,
        Password: usserPassword
    };
    sesion.push(usserSesion);
    activeSesion(sesion);
};

function activeSesion(sesion) {
    localStorage.setItem('usserSesion', JSON.stringify(sesion));
};

function getUsserId() {
    let datos_Usuario = localStorage.getItem('usserSesion');

    if (datos_Usuario == null) {
        sesion = [];
    } else {
        sesion = JSON.parse(datos_Usuario);
    }
    return sesion;
};

function closeSesion() {
    localStorage.removeItem('usserSesion');
    location.href = './login.html';
};