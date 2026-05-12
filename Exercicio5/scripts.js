function q(seletor) {
    return document.querySelector(seletor);
}

function qall(seletor,contexto = document) {
    return contexto.querySelectorAll(seletor);
}

function mostrarErro(id,mensagem){
    let elemento = q('#'+id);
    if(elemento){
        elemento.textContent = mensagem;
        elemento.classList.remove('oculto');

        setTimeout(function() {
            elemento.classList.add('oculto');
        }, 3000)
    }
}

q('#botaoErro').addEventListener('click', function() {
    mostrarErro('mensagemErro1','O campo deve ser preenchido');
});

var botaoExibir = document.querySelector('#botaoExibir');
botaoExibir.addEventListener('click',exibirConteudo);

function exibirConteudo(){
    var conteudo = q('#caixaDeTexto').value;
    var conteudoLimpo = conteudo.trim();
    if (conteudoLimpo == ''){
        mostrarErro('mensagemErro2','O conteúdo do campo não pode ser vazio')
    }
    else {
        q('#conteudo').innerHTML = 'Texto digitado: ' + conteudoLimpo;
    }
}

let calculoTaxa = q('#calcularTaxa');
let taxaResultante = q('#taxaResultante');

calculoTaxa.addEventListener('click', () => {
    let interacoes = q('#caixadeInteracoes').value;
    let interacoesLimpo = interacoes.trim();
    let visualizacoes = q('#caixadeVisualizacoes').value;
    let visualizacoesLimpo = visualizacoes.trim();
    if ((interacoesLimpo == '' || isNaN(interacoesLimpo)) || (visualizacoesLimpo == '' || isNaN(visualizacoesLimpo))){
        mostrarErro('mensagemErro3','Insira valores númericos válidos');
        taxaResultante.innerText = '';
    }
    else {
        let operacao = (parseInt(interacoesLimpo)/parseInt(visualizacoesLimpo)) * 100;
        taxaResultante.innerText = "Taxa de engajamento: " + operacao + "%";
    }
})

let botaoUpload = q('#botaoUpload');

botaoUpload.addEventListener('click', () => {
    let resultado = q('#resultadoUpload');
    var arquivoSelecionado = uploadImagem.files[0];
    if (!arquivoSelecionado){
        mostrarErro('mensagemErro4','Selecione uma imagem antes de fazer upload')
    }
    resultado.innerHTML = '';
    let img = document.createElement('img');
    img.src = URL.createObjectURL(arquivoSelecionado);
    resultado.appendChild(img);
})

let selecionador = q('.galeria');

selecionador.addEventListener('change', (event) => {
    let escolhido = event.target.value;
    let resultado = q('#resultadoSelect');
    resultado.innerHTML = '';
    let img = document.createElement('img');
    if (escolhido == 'Aria'){
        img.src = './imagens/Aria.jpg';
    }
    else if (escolhido == 'Lament'){
        img.src = './imagens/Lament.jpg';
    }
    else if (escolhido == 'Symphony'){
        img.src = './imagens/Sotn.jpg';
    }
    resultado.appendChild(img);
})

let checksContagem = q("#redesSociais");
let botaoRedes = q('#enviarBtn');
let checksRedes = q('#redesSelecionadas');

botaoRedes.addEventListener('click', function() {
    let checkboxes = qall('input',checksContagem);
    let contador = 0;
    let mostraRedes = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked){
            contador += 1
            mostraRedes.push(checkbox.value)
        }
    })
    if (contador == 0){
        mostrarErro('mensagemErro5','Selecione pelo menos uma opção');
    }
    else{
        checksRedes.innerText = 'Suas redes sociais favoritas são: ' + mostraRedes;
    }
})

let selectsContagem = q('#threading');
let botaoHashtagsAdd = q('#adicionarHashtag');
let botaoHashtagsRem = q('#removerHashtag');
let selectsHashtags = q('#listaHashtags');
let hashtagLista = [];

botaoHashtagsAdd.addEventListener('click', function() {
    let conteudo = q('#inputHashtag').value;
    let conteudoLimpo = conteudo.trim();
    let hashtag = q('#Hashtags');
    let selects = qall('input',selectsContagem);
    if(conteudoLimpo == '') {
        mostrarErro('mensagemErro6','Não há conteúdo na hashtag informada para adição');
    }
    else if(hashtagLista.length >= 5) {
        mostrarErro('mensagemErro6','Só podem haver até 5 hashtags em alta')
    }
    else if(conteudoLimpo.length < 2) {
        mostrarErro('mensagemErro6','A hashtag informada possui um comprimento menor que 2 caracteres');
    }
    else if(hashtagLista.includes(conteudoLimpo)) {
        mostrarErro('mensagemErro6','Essa hashtag já existe');
    }
    else {
        let novoHashtag = document.createElement('option');
        novoHashtag.value = conteudoLimpo;
        novoHashtag.textContent = '#' + conteudoLimpo;
        hashtag.appendChild(novoHashtag);
        hashtagLista.push(conteudoLimpo);
    }
})

botaoHashtagsRem.addEventListener('click', function() {
    let hashtag = q('#Hashtags');
    let selects = hashtag.selectedOptions;
    if (selects.length == 0){
        mostrarErro('mensagemErro6','Selecione uma hashtag para remover')
    }
    Array.from(selects).forEach(option => {
        let valor = option.value;
        let indice = hashtagLista.indexOf(valor);
        if (indice !== -1) {
            hashtagLista.splice(indice, 1);
        }
        option.remove();
    })
})

let selectAtivos = q('#ativosDisponiveis');
let selectInvestimentos = q('#carteiraInvestimentos');
let botaoTransferirAtivos = q('#moverParaDireitaBtn');
let botaoTransferirInvestimentos = q("#moverparaEsquerdaBtn");

function atualizarBotoes() {
    botaoTransferirAtivos.disabled = (selectAtivos.options.length == 0);
    botaoTransferirInvestimentos.disabled = (selectInvestimentos.options.length == 0);
}

atualizarBotoes();

botaoTransferirAtivos.addEventListener('click', function() {
    let ativos = qall('option',selectAtivos);
    let contador = 0;
    let carteiraDestino = q('#carteiraInvestimentos');
    ativos.forEach(function(ativo) {
        if (ativo.selected){
            contador += 1;
            carteiraDestino.appendChild(ativo);
            ativo.selected = false;
        }
    })
    if(contador == 0) {
        mostrarErro('mensagemErro7','Selecione pelo menos um ativo para mover');
    }
    atualizarBotoes();
})

botaoTransferirInvestimentos.addEventListener('click',function() {
    let investimentos = qall('option',selectInvestimentos);
    let contador = 0;
    let carteiraDestino = q('#ativosDisponiveis');
    investimentos.forEach(function(investimento) {
        if (investimento.selected){
            contador += 1;
            carteiraDestino.appendChild(investimento);
            investimento.selected = false;
        }
    })
    if (contador == 0){
        mostrarErro('mensagemErro8','Selecione pelo menos um investimento para mover');
    }
    atualizarBotoes();
})
