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
    resultadoContagem.innerText = contador;
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

let botao5 = getById("ocultar");

botao5.addEventListener('click', function() {
    getByTag("p").forEach(function(p) {
        if (p.style.visibility == "hidden"){
            p.style.visibility = "visible";
        }
        else {
            p.style.visibility = "hidden";
        }
    })
})

let botao6 = getById("transferir");

botao6.addEventListener('click', function() {
    let origem = getById("caixaOriginal").innerText;
    let destino = getById("caixaDestino");
    destino.innerText = origem.toUpperCase();
})

let preto = "black";
let branco = "white";
let botao7 = getById("estiloBlack");

botao7.addEventListener('click', function() {
    getByTag("body").forEach(function(body) {
        body.style.color = branco;
        body.style.background = preto;
    })
})

let corTextoOriginal = document.body.style.color;
let corFundoOriginal = document.body.style.background;
let botao8 = getById("estiloPadrao");

botao8.addEventListener('click', function() {
    getByTag("body").forEach(function(body) {
        body.style.color = corTextoOriginal;
        body.style.background = corFundoOriginal;
    })
})

let botao9 = getById("aumentarTexto");

botao9.addEventListener('click',function() {
    let tamanhoFonteAtual = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanhoFonteAtual + 1) + "px";
})

let botao10 = getById("diminuirTexto");

botao10.addEventListener('click',function() {
    let tamanhoFonteAtual = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanhoFonteAtual - 1) + "px";
})

let botao11 = getById("calcular");
let resultadoOperacao = getById("resultadoOperacao")

botao11.addEventListener('click', function() {
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

let botao12 = getById("adicionarLista");

botao12.addEventListener('click', function() {
    let texto = getById("inputLista").value;
    let lista = getById("Lista");
    let novoItem = document.createElement("li");
    novoItem.textContent = texto;
    lista.appendChild(novoItem);
})

let botao13 = getById("adicionarSelect");

botao13.addEventListener('click', function() {
    let texto = getById("inputSelect").value;
    let select = getById("Opcoes");
    let novaOpcao = document.createElement("option");
    novaOpcao.value = texto;
    novaOpcao.textContent = texto;
    select.appendChild(novaOpcao);
})
