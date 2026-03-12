const estilos = ["estilos.css","estilos-alternativo1.css","estilos-alternativo2.css"]

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