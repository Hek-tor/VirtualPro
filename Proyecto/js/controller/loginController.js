let listUsser = getProductList();
let btnSubmit = document.querySelector('#BtnLogin');

function GetCredencial() {

    let usserEmail = document.querySelector('#InputEmail').value,
        usserPassword = document.querySelector('#InputPassword').value;

    if (!check(usserEmail, usserPassword)) {
        let foundUsser = searchUsser(usserEmail, usserPassword);
        if (foundUsser == 'errorFound') {
            Swal.fire({
                icon: 'info',
                title: 'Aún no te has registrado',
                text: 'Te invitamos a registrarte!',
                footer: '<a href="./registrarse.html">Regístrate aquí</a>'
            });
        };
        if (foundUsser == 'Found') {
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido a Virtual++',
                showConfirmButton: false
            });
            setTimeout(function () {
                window.location.href = "./homeApp.html";
            }, 2000);
        };
    };
    if (check(usserEmail, usserPassword)) {
        Swal.fire({
            icon: 'error',
            title: 'Ingresó algún valor de forma incorrecta',
            text: '¡Revise su correo y contraseña!',
        });
    };
};

function check(usserEmail, usserPassword) {
    let err = false;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{5,12}/;

    if (usserPassword == '' || !(regexPassword.test(usserPassword))) {
        return err = true;
    };
    if (usserEmail == '' || !(regexEmail.test(usserEmail))) {
        return err = true;
    };

    return err;
};
function searchUsser(usserEmail, usserPassword) {
    let valores = Object.values(listUsser);
    let access = '';

    for (let i = 0; i < valores.length; i++) {
        let usserInfo = valores[i]
        if (usserInfo.Email == usserEmail && usserInfo.Password == usserPassword) {
            const usser = usserInfo.Name;
            const usserName = usserInfo.Email;
            const usserPassword = usserInfo.Password;

            loadSesion(usser, usserName, usserPassword);
            return access = 'Found';
        };
    };
    return access = 'errorFound';
};



btnSubmit.addEventListener('click', GetCredencial)
SaveStorageUsser(listUsser);