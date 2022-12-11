let listUsser = getProductList();

function aviso() {
    let email = document.querySelector('#InputEmail').value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email == '' || email == undefined || !(regex.test(email))) {
        Swal.fire({
            icon: 'error',
            title: 'Revisa los datos que ingresaste',
        });
    } else {
        let foundUsser = search(email);
        if (foundUsser == 'errorFound') {
            Swal.fire({
                icon: 'info',
                title: 'No encontramos ningún correo',
                text: 'Te invitamos a registrarte!',
                footer: '<a href="./registrarse.html">Regístrate aquí</a>'
            });
        };
        if (foundUsser == 'found') {
            setTimeout(function () {
                window.location.href = "./login.html";
            }, 2000);
        };
        document.querySelector('#InputEmail').value = '';
    };
};
function search(email) {
    let valores = Object.values(listUsser);
    let access;
    for (let i = 0; i < valores.length; i++) {
        let usserInfo = valores[i]
        if (usserInfo.Email == email) {
            Swal.fire({
                icon: 'success',
                title: 'Código enviado',
                text: 'Se envió un código de recuperación a tu correo electrónico',
            })
            access = 'found';
            return access
        };
    };
    access = 'errorFound'
    return access
};
