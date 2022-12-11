'use strict'

const btnRegistrar = document.querySelector('#submit');

btnRegistrar.addEventListener('click', async () => {

    let usserName = document.querySelector('.txtId').value,
        usserEmail = document.querySelector('.txtEm').value,
        usserPassword = document.querySelector('.txtKey').value;


    if (!check(usserName, usserEmail, usserPassword)) {
        Swal.fire({
            icon: 'success',
            title: '¡Su registro se realizó con éxito!',
            text: '¡Bienvenido a Virtual ++!',
            showConfirmButton: false,
            timer: 2000
        });
        await RegisterUssers(usserName, usserEmail, usserPassword);
        clearData();
    };
    if (check(usserName, usserEmail, usserPassword)) {
        Swal.fire({
            icon: 'error',
            title: 'No se pudo registrar',
            text: '¡Hubo un error con los datos ingresados, revise por favor!',
        });
    };
});

function check(usserName, usserEmail, usserPassword) {
    let err = false;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{5,12}/;

    if (usserName == '' || usserName == undefined) {
        return err = true;
    };
    if (usserPassword == '' || !(regexPassword.test(usserPassword))) {
        return err = true;
    };
    if (usserEmail == '' || !(regexEmail.test(usserEmail))) {
        return err = true;
    };

    return err;
};
function clearData() {
    document.querySelector('.txtId').value = '';
    document.querySelector('.txtEm').value = '';
    document.querySelector('.txtKey').value = '';
};