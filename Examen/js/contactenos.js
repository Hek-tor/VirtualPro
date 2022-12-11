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
            title: 'Gracias por hacernos tú consulta, pronto te daremos una respuesta.',
            html: '<iframe src="https://embed.lottiefiles.com/animation/91068"></iframe>',
            showConfirmButton: false,
        });
        setTimeout(() => {
            window.location.href = './home.html';
        }, 2500)
    };
});

function validador(email, message, TermsUsser) {
    let error = false;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email == '' || !(regex.test(email))) {
        Swal.fire({
            title: 'Necesitas ingresar un correo electrónico para poder ser contactado',
            html: '<iframe src="https://embed.lottiefiles.com/animation/65475"></iframe>'
        });
        return error = true;
    };

    if (message == '' || message == undefined) {
        Swal.fire({
            title: 'Debes agregar una consulta.',
            html: '<iframe src="https://embed.lottiefiles.com/animation/65475"></iframe>'
        });
        return error = true;
    };

    if (TermsUsser.checked == false) {
        Swal.fire({
            title: 'Es necesario aceptar los términos y condiciones de la empresa',
            html: '<iframe src="https://embed.lottiefiles.com/animation/65475"></iframe>'
        });
        return error = true;
    };
    return error;
};