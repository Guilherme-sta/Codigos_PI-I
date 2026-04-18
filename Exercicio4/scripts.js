function getById(id){
    return document.getElementById(id);
}

function getByTag(seletor){
    return document.querySelectorAll(seletor);
}

let multiplicar = getById('multiplicar');
let resultadoMultiplicacao = getById('resultadoMultiplicacao');

multiplicar.addEventListener('click', () => {
    let n1 = getById('n1').value;
    let n2 = getById('n2').value;
    let multiplicacao = parseFloat(n1) * parseFloat(n2);
    resultadoMultiplicacao.innerText = multiplicacao;
})

let rosa = "pink";

let botao = getById('mudarCor');
botao.addEventListener('click', function() {
    getByTag("p").forEach(function(p) {
        p.style.color = rosa;
    })
});

let paragrafos = getById("Paragrafos")
let botao2 = getById('ContagemParagrafos');
let resultadoContagem = getById('resultadoContagem');

botao2.addEventListener('click', function() {
    let contador = getByTag("p").length;
    resultadoContagem.innerText = contador;
})