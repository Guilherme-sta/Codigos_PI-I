let inputCorTexto = document.getElementById('cor-texto');
let inputCorFundo = document.getElementById('cor-fundo');

inputCorTexto.addEventListener('input', () => {
    let cor = inputCorTexto.value;
    document.body.style.color = cor;
});

inputCorFundo.addEventListener('input', () => {
    let cor = inputCorFundo.value;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = cor;
});

let menuEscondido = document.getElementById('menu-pequeno');
let navLista = document.getElementById('nav-lista');

menuEscondido.addEventListener('click', () => {
    navLista.classList.toggle('aberto');
});

let estilos = ["estilos.css","estilos-alternativo.css"]

function trocarEstilo() {
    let index = parseInt(localStorage.getItem("estiloIndex")) || 0;
    index = (index + 1) % estilos.length;
    localStorage.setItem("estiloIndex",index);
    document.getElementById("tema").href = estilos[index];
}

window.onload = function() {
    let index = parseInt(this.localStorage.getItem("estiloIndex")) || 0;
    this.document.getElementById("tema").href = estilos[index]
}