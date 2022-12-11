let emailUsser = document.querySelector('#InputEmail');
let messageUsser = document.querySelector('#InputAsunto');
let TermsUsser = document.querySelector('.form-check-input:checked');
const bntSend = document.querySelector('#Send');

bntSend.addEventListener('click', function (e) {
    e.preventDefault()
    let email = emailUsser.value;
    let message = messageUsser.value;

    let access = validador(email, message, TermsUsser);

    if (!access) {
        Swal.fire({
            icon: 'success',
            title: 'Gracias por hacernos tú consulta, pronto te daremos una respuesta.',
            showConfirmButton: false,
        });
        setTimeout(() => {
            window.location.href = './homeApp.html';
        }, 2500)
    };
});

function validador(email, message, TermsUsser) {
    let error = false;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email == '' || !(regex.test(email))) {
        Swal.fire({
            icon: 'info',
            title: 'Necesitas ingresar un correo electrónico para poder ser contactado',
        });
        return error = true;
    };

    if (message == '' || message == undefined) {
        Swal.fire({
            icon: 'info',
            title: 'Debes agregar una consulta.',
        });
        return error = true;
    };

    if (TermsUsser.checked == false) {
        Swal.fire({
            icon: 'info',
            title: 'Es necesario aceptar los términos y condiciones de la empresa',
        });
        return error = true;
    };
    return error;
};