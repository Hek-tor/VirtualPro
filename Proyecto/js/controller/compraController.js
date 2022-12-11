const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#dataGet');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const comprarCarritoBtn = document.querySelector('#comprar-carrito');
const borrarCarritoBtn = document.querySelector('#vaciar-carrito');

var articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {

    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    borrarCarritoBtn.addEventListener('click', clearData);

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });
};


function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement.parentElement;
        leerDatosCurso(curso);
    };
};

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.price').textContent,
        id: curso.querySelector('#buy').getAttribute('data-id'),
    }

    if (articulosCarrito.some(curso => curso.id === infoCurso.id)) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                let cantidad = parseInt(curso.cantidad);
                cantidad++
                curso.cantidad = cantidad;
                return curso;
            } else {
                return curso;
            }
        })
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    };
    carritoHTML();
};

function eliminarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        const curso = e.target.parentElement.parentElement.parentElement;
        const cursoId = curso.querySelector('a').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}

function carritoHTML() {
    vaciarCarrito();

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
          `;
        contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();

}


function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function getCursos() {
    let listaCursos = localStorage.getItem('carrito');

    if (listaCursos == null) {
        articulosCarrito = [];
    } else {
        articulosCarrito = JSON.parse(listaCursos);
    }
    return articulosCarrito;
};

function vaciarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function clearData() {
    localStorage.removeItem('carrito');
    location.reload();
}

let comprarBtn = document.querySelector('#comprado');
comprarBtn.addEventListener('click', function () {
    Swal.fire({
        title: 'Curso comprado con éxito. Disfrútalo',
        html: '<iframe src="https://embed.lottiefiles.com/animation/97401"></iframe>',
        showConfirmButton: false,
        timer: 4500
    });
    setTimeout(function () {
        clearData();
        location.reload();
    }, 4500);
});