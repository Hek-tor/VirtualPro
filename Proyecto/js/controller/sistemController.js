
let data = getUsserId();
loadData();

function loadData() {

    let name = document.querySelector('.Id');
    name.innerText = data[0].Name;
};

let btnClose = document.querySelector('.closeSesion');
btnClose.addEventListener('click', function () {
    closeSesion();
});

//Mensaje alerta
document.querySelector('.terms').addEventListener('click', () => {
    Swal.fire({
        title: '<strong><u>Términos y condiciones</u></strong>',
        icon: 'info',
        html:
            `Es requisito necesario para la adquisición de los servicios que se ofrecen en este sitio, que lea
            y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de
            nuestros servicios implicará que usted ha leído y aceptado los Términos y Condiciones de Uso
            en el presente documento. Todas los servicios que son ofrecidos por nuestro sitio web
            pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal
            caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir
            un servicio, será necesario el registro por parte del usuario, con ingreso de datos personales
            fidedignos y definición de una contraseña.`
    });
});