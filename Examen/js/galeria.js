var select = document.querySelector('#nivel');
var result = document.querySelector('.result');
var basico = document.querySelector('.basico');
var intermedio = document.querySelector('.intermedio');
var dificil = document.querySelector('.Dificil');

select.onchange = (e) => {
    target = e.target.value;
    let data;
    switch (target) {
        case 'Nivel':
            location.href = './galeria.html';
        case 'Basico':
            refresh();
            intermedio.style.display = 'none';
            dificil.style.display = 'none';
            data = basico.innerHTML;
            result.appendChild(data);
            break;
        case 'Intermedio':
            refresh();
            basico.style.display = 'none';
            dificil.style.display = 'none';
            data = intermedio.innerHTML;
            result.appendChild(data);
            break;
        case 'Dificil':
            refresh();
            basico.style.display = 'none';
            intermedio.style.display = 'none';
            data = dificil.innerHTML;
            result.appendChild(data);
            break;
    };
};
function refresh() {
    basico.style.display = 'flex'
    intermedio.style.display = 'flex';
    dificil.style.display = 'flex';
};