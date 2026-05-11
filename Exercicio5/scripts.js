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
        mostrarErro('conteudo','O conteúdo do campo não pode ser vazio')
    }
    else {
        q('#conteudo').innerHTML = conteudoLimpo;
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
        mostrarErro('exibicaoErro','Insira valores númericos válidos');
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
    let img = document.createElement('img');
    img.src = URL.createObjectURL(arquivoSelecionado);
    resultado.appendChild(img);
})

let selecionador = q('.galeria');

selecionador.addEventListener('change', (event) => {
    let escolhido = event.target.value;
    let resultado = q('#resultadoSelect');
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
    });
    if (contador == 0){
        mostrarErro('mensagemErro2','Selecione pelo menos uma opção');
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
    selects.forEach(function(select) {
        if(conteudoLimpo == '') {
            mostrarErro('mensagemErro3','Não há conteúdo na hashtag informada para adição');
        }
        else if(hashtagLista.length >= 5) {
            mostrarErro('mensagemErro3','Só podem haver até 5 hashtags em alta')
        }
        else if(conteudoLimpo.length < 2) {
            mostrarErro('mensagemErro3','A hashtag informada possui um comprimento menor que 2 caracteres');
        }
        else if(hashtagLista.includes(conteudoLimpo)) {
            mostrarErro('mensagemErro3','Essa hashtag já existe');
        }
        else {
            let novoHashtag = document.createElement('option');
            novoHashtag.value = conteudoLimpo;
        novoHashtag.textContent = '#' + conteudoLimpo;
            hashtag.appendChild(novoHashtag);
            hashtagLista.push(select.value);
        }
    })
});

botaoHashtagsRem.addEventListener('click', function() {
    let conteudo = q('#inputHashtag').value;
    let conteudoLimpo = conteudo.trim();
    let hashtag = q('#Hashtags');
    let selects = qall('input',selectsContagem);
    selects.forEach(function(select) {
        if(conteudoLimpo == '') {
            mostrarErro('mensagemErro3','Não há conteúdo na hashtag informada para remoção');
        }
        let indice = hashtagLista.indexOf(conteudoLimpo);
        if(hashtagLista.length == 0){
            mostrarErro('mensagemErro3','Não existem hastags para remoção');
        }
        else if(indice == -1) {
            mostrarErro('mensagemErro3','A hashtag informada não está entre as hashtags em alta');
        }
        else {
            let hashtagRemover = hashtag.querySelector(`option[value="${conteudoLimpo}"]`);
            hashtag.removeChild(hashtagRemover);
            hashtagLista.splice(select.value);
        }
    })
});