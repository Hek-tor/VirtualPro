const btn = document.querySelector('.btnCreate');
const texto = document.querySelector('.texto');
let lista_Apuntes = document.querySelector('.lista_apuntes');
let Notas = [];
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        Notas = JSON.parse(localStorage.getItem('Apuntes')) || [];
        crearHTML();
    });
    lista_Apuntes.addEventListener('click', borrarNota);
};
function borrarNota(e) {
    if (e.target.tagName == 'SPAN') {
        const borrarId = parseInt(e.target.getAttribute('task-id'));
        Notas = Notas.filter(Apuntes => Apuntes.id !== borrarId);
        crearHTML();
    };
};

btn.addEventListener('click', function () {
    let nuevoApunte = texto.value;
    if (nuevoApunte === '') {
        Swal.fire({
            icon: 'info',
            title: 'Necesitas escribir algo en el espacio en blanco.',
            showConfirmButton: false,
            timer: 1500
        })
        return;
    };
    const notasObj = {
        nuevoApunte: nuevoApunte,
        id: Date.now()
    };
    Notas = [...Notas, notasObj];
    crearHTML();
});

function crearHTML() {
    limpiarHTML();
    if (Notas.length > 0) {
        Notas.forEach(nota => {

            const div = document.createElement('div');
            div.classList.add("notaConteiner");
            div.innerHTML = `${nota.nuevoApunte} <span task-id=${nota.id} class="btnX"></span>`;
            lista_Apuntes.appendChild(div);
        });
    };
    addStorage();
};

function limpiarHTML() {
    lista_Apuntes.innerHTML = '';
    texto.value = '';
};

function addStorage() {
    localStorage.setItem('Apuntes', JSON.stringify(Notas));
};