function getById(id){
    return document.getElementById(id);
}

function getByTag(seletor,contexto = document){
    return contexto.querySelectorAll(seletor);
}

let multiplicar = getById('multiplicar');
let resultadoMultiplicacao = getById('resultadoMultiplicacao');

multiplicar.addEventListener('click', () => {
    let n1 = getById("n1").value;
    let n2 = getById("n2").value;
    let multiplicacao = parseFloat(n1) * parseFloat(n2);
    resultadoMultiplicacao.innerText = "Resultado: " + multiplicacao;
})

let rosa = "pink";

let botao = getById('mudarCor');
botao.addEventListener('click', function() {
    getByTag("p").forEach(function(p) {
        p.style.color = rosa;
    })
});

let paragrafos_contagem = getById("paragrafosDeContagem");
let botao2 = getById('contagemParagrafos');
let resultadoContagem = getById('resultadoContagem');

botao2.addEventListener('click', function() {
    let contador = getByTag("p",paragrafos_contagem).length;
    resultadoContagem.innerText = "Paragráfos: " + contador;
})

var botao3 = getById("alterar");

botao3.addEventListener('click', function() {
    let paragrafo = getById("paragrafo");
    paragrafo.innerText = "O texto deste parágrafo foi alterado!";
})

var botao4 = getById("limpar");

botao4.addEventListener('click', function() {
    let paragrafo = getById("paragrafo");
    paragrafo.innerText = "";
})

let exemplo = getById("exemplo");
exemplo.style.position = "absolute";
exemplo.style.left = "-9999px";
let botao5 = getById("exemplo1");

botao5.addEventListener('click', function() {
    let resultado = getById("resultadoExemplo1");
    resultado.innerText = exemplo.textContent;
})

let botao6 = getById("exemplo2");

botao6.addEventListener('click', function() {
    let resultado = getById("resultadoExemplo2");
    resultado.innerText = exemplo.innerText;
})

let botao7 = getById("exemplo3");

botao7.addEventListener('click', function () {
    let resultado = getById("resultadoExemplo3");
    resultado.innerText = exemplo.innerHTML;
})

let botao8 = getById("ocultar");

botao8.addEventListener('click', function() {
    getByTag("p").forEach(function(p) {
        if (p.style.visibility == "hidden"){
            p.style.visibility = "visible";
        }
        else {
            p.style.visibility = "hidden";
        }
    })
})

let botao9 = getById("transferir");

botao9.addEventListener('click', function() {
    let origem = getById("caixaOriginal").innerText;
    let destino = getById("caixaDestino");
    destino.innerText = origem.toUpperCase();
})

let preto = "black";
let branco = "white";
let botao10 = getById("estiloBlack");

botao10.addEventListener('click', function() {
    getByTag("body").forEach(function(body) {
        body.style.color = branco;
        body.style.background = preto;
    })
})

let corTextoOriginal = document.body.style.color;
let corFundoOriginal = document.body.style.background;
let botao11 = getById("estiloPadrao");

botao11.addEventListener('click', function() {
    getByTag("body").forEach(function(body) {
        body.style.color = corTextoOriginal;
        body.style.background = corFundoOriginal;
    })
})

let botao12 = getById("aumentarTexto");

botao12.addEventListener('click',function() {
    let tamanhoFonteAtual = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanhoFonteAtual + 1) + "px";
})

let botao13 = getById("diminuirTexto");

botao13.addEventListener('click',function() {
    let tamanhoFonteAtual = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanhoFonteAtual - 1) + "px";
})

let botao14 = getById("calcular");
let resultadoOperacao = getById("resultadoOperacao")

botao14.addEventListener('click', function() {
    let n3 = getById("n3").value;
    let n4 = getById("n4").value;
    if ((getById("soma").checked) == true) {
        operacao = parseFloat(n3) + parseFloat(n4);
    }
    else if ((getById("subtracao").checked) == true) {
        operacao = parseFloat(n3) - parseFloat(n4);
    }
    else if ((getById("multiplicacao").checked) == true) {
        operacao = parseFloat(n3) * parseFloat(n4);
    }
    else if ((getById("divisao").checked) == true) {
        operacao = parseFloat(n3) / parseFloat(n4);
    }
    else {
        operacao = 'Nenhuma operação foi selecionada'
    }
    resultadoOperacao.innerText = "resultado: " + operacao;
})

let botao15 = getById("adicionarLista");

botao15.addEventListener('click', function() {
    let texto = getById("inputLista").value;
    let lista = getById("Lista");
    let novoItem = document.createElement("li");
    novoItem.textContent = texto;
    lista.appendChild(novoItem);
})

let botao16 = getById("adicionarSelect");

botao16.addEventListener('click', function() {
    let texto = getById("inputSelect").value;
    let select = getById("Opcoes");
    let novaOpcao = document.createElement("option");
    novaOpcao.value = texto;
    novaOpcao.textContent = texto;
    select.appendChild(novaOpcao);
})
