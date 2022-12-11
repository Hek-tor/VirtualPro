let select = document.getElementById('Categorias');
let Opciones = document.getElementById("Opciones");
let content = document.querySelector('.sub_Menu');
let cards = document.getElementsByClassName("card");
let descuentos = document.getElementsByClassName("descuento");

select.onchange = (e) => {
    target = e.target.value;
    let filter = false;

    switch (target) {
        case 'Categories':
            location.href = './lista_Cursos.html';
        case 'Software':
            addSoftware(filter, content, cards);
            Opciones.value = 'Opciones';
            break;
        case 'Business':
            addBusiness(filter, content, cards);
            Opciones.value = 'Opciones';
            break;
        case 'Agile':
            addAgile(filter, content, cards);
            Opciones.value = 'Opciones';
            break;
    };
};
Opciones.onchange = function (evt) {
    var option = evt.target.value;

    if (option == 'Descuentos' && target == 'Software') {
        filter = true;
        addSoftware(filter, content, cards);
    };
    if (option == 'Descuentos' && target == 'Business') {
        filter = true;
        addBusiness(filter, content, cards);
    };
    if (option == 'Descuentos' && target == 'Agile') {
        filter = true;
        addAgile(filter, content, cards);
    };
};

function addSoftware(filter, content, cards) {
    if (filter == false) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
        };
        for (let i = 0; i < cards.length; i++) {
            if (!(cards[i].classList.contains('software'))) {
                cards[i].style.display = 'none';
            } else {
                cards[i].classList.add("mx-2");
                content.appendChild(cards[i])
            };
        };
    };
    if (filter == true) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('descuento')) {
                content.appendChild(cards[i])
            } else {
                cards[i].style.display = 'none';
            };
        };
    };
};
function addBusiness(filter, content, cards) {
    if (filter == false) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
        };
        for (let i = 0; i < cards.length; i++) {
            if (!(cards[i].classList.contains('business'))) {
                cards[i].style.display = 'none';
            } else {
                cards[i].classList.add("mx-2");
                content.appendChild(cards[i])
            };
        };
    };
    if (filter == true) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('descuentoB')) {
                content.appendChild(cards[i])
            } else {
                cards[i].style.display = 'none';
            };
        };
    };
};
function addAgile(filter, content, cards) {
    if (filter == false) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
        };
        for (let i = 0; i < cards.length; i++) {
            if (!(cards[i].classList.contains('agile'))) {
                cards[i].style.display = 'none';
            } else {
                cards[i].classList.add("mx-2");
                content.appendChild(cards[i])
            };
        };
    };
    if (filter == true) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('descuentoM')) {
                content.appendChild(cards[i])
            } else {
                cards[i].style.display = 'none';
            };
        };
    };
};

let Cursos = document.querySelector('.lista__Cursos');

Cursos.addEventListener('click', e => {
    if (e.target.classList.contains('card_Btn')) {
        if (e.target.classList.contains('card_Btn')) {
            Swal.fire({
                title: 'Tu curso fue agregado al carrito de compras.',
                html: '<iframe src="https://embed.lottiefiles.com/animation/92411"></iframe>',
                showConfirmButton: false,
                timer: 4500
            });
        };
    };
    let alert = document.querySelector('#alert');
    alert.innerText = '1';
    setTimeout(function () {
        alert.innerText = '';
    }, 8000);

});

