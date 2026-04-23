function getById(id: string): HTMLElement {
    return document.getElementById(id) as HTMLElement;
}

function getByTag(
    seletor: string,
    contexto: Document | HTMLElement = document
): NodeListOf<Element> {
    return contexto.querySelectorAll(seletor);
}

const multiplicar: HTMLElement = getById('multiplicar');
const resultadoMultiplicacao: HTMLElement = getById('resultadoMultiplicacao');

multiplicar.addEventListener('click', (): void => {
    const n1: string = (getById('n1') as HTMLInputElement).value;
    const n2: string = (getById('n2') as HTMLInputElement).value;
    const multiplicacao: number = parseFloat(n1) * parseFloat(n2);
    resultadoMultiplicacao.innerText = "Resultado: " + multiplicacao;
});

const rosa: string = "pink";
const botao: HTMLElement = getById('mudarCor');

botao.addEventListener('click', (): void => {
    getByTag("p").forEach((p: Element): void => {
        (p as HTMLElement).style.color = rosa;
    });
});

const paragrafos_contagem: HTMLElement = getById("paragrafosDeContagem");
const botao2: HTMLElement = getById('contagemParagrafos');
const resultadoContagem: HTMLElement = getById('resultadoContagem');

botao2.addEventListener('click', (): void => {
    const contador: number = getByTag("p", paragrafos_contagem).length;
    resultadoContagem.innerText = "Paragráfos: " + contador;
});

const botao3: HTMLElement = getById("alterar");

botao3.addEventListener('click', (): void => {
    const paragrafo: HTMLElement = getById("paragrafo");
    paragrafo.innerText = "O texto deste parágrafo foi alterado!";
});

const botao4: HTMLElement = getById("limpar");

botao4.addEventListener('click', (): void => {
    getById("paragrafo").innerText = "";
});

const exemplo: HTMLElement = getById("exemplo");
exemplo.style.position = "absolute";
exemplo.style.left = "-9999px";

const botao5: HTMLElement = getById("exemplo1");
botao5.addEventListener('click', (): void => {
    const resultado: HTMLElement = getById("resultadoExemplo1");
    resultado.innerText = exemplo.textContent ?? "";
});

const botao6: HTMLElement = getById("exemplo2");
botao6.addEventListener('click', (): void => {
    const resultado: HTMLElement = getById("resultadoExemplo2");
    resultado.innerText = exemplo.innerText;
});

const botao7: HTMLElement = getById("exemplo3");
botao7.addEventListener('click', (): void => {
    const resultado: HTMLElement = getById("resultadoExemplo3");
    resultado.innerText = exemplo.innerHTML;
});

const botao8: HTMLElement = getById("ocultar");

botao8.addEventListener('click', (): void => {
    getByTag("p").forEach((p: Element): void => {
        const el = p as HTMLElement;
        el.style.visibility = el.style.visibility === "hidden" ? "visible" : "hidden";
    });
});

const botao9: HTMLElement = getById("transferir");

botao9.addEventListener('click', (): void => {
    const origem: string = getById("caixaOriginal").innerText;
    getById("caixaDestino").innerText = origem.toUpperCase();
});

const preto: string = "black";
const branco: string = "white";

const botao10: HTMLElement = getById("estiloBlack");
botao10.addEventListener('click', (): void => {
    document.body.style.color = branco;
    document.body.style.background = preto;
});

const corTextoOriginal: string = document.body.style.color;
const corFundoOriginal: string = document.body.style.background;

const botao11: HTMLElement = getById("estiloPadrao");
botao11.addEventListener('click', (): void => {
    document.body.style.color = corTextoOriginal;
    document.body.style.background = corFundoOriginal;
});

const botao12: HTMLElement = getById("aumentarTexto");
botao12.addEventListener('click', (): void => {
    const tamanhoFonteAtual: number = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanhoFonteAtual + 1) + "px";
});

const botao13: HTMLElement = getById("diminuirTexto");
botao13.addEventListener('click', (): void => {
    const tamanhoFonteAtual: number = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanhoFonteAtual - 1) + "px";
});

const botao14: HTMLElement = getById("calcular");
const resultadoOperacao: HTMLElement = getById("resultadoOperacao");

botao14.addEventListener('click', (): void => {
    const n3: string = (getById("n3") as HTMLInputElement).value;
    const n4: string = (getById("n4") as HTMLInputElement).value;
    let operacao: number | string;

    if ((getById("soma") as HTMLInputElement).checked) {
        operacao = parseFloat(n3) + parseFloat(n4);
    } else if ((getById("subtracao") as HTMLInputElement).checked) {
        operacao = parseFloat(n3) - parseFloat(n4);
    } else if ((getById("multiplicacao") as HTMLInputElement).checked) {
        operacao = parseFloat(n3) * parseFloat(n4);
    } else if ((getById("divisao") as HTMLInputElement).checked) {
        operacao = parseFloat(n3) / parseFloat(n4);
    } else {
        operacao = 'Nenhuma operação foi selecionada';
    }
    resultadoOperacao.innerText = "resultado: " + operacao;
});

const botao15: HTMLElement = getById("adicionarLista");

botao15.addEventListener('click', (): void => {
    const texto: string = (getById("inputLista") as HTMLInputElement).value;
    const lista: HTMLElement = getById("Lista");
    const novoItem: HTMLLIElement = document.createElement("li");
    novoItem.textContent = texto;
    lista.appendChild(novoItem);
});

const botao16: HTMLElement = getById("adicionarSelect");

botao16.addEventListener('click', (): void => {
    const texto: string = (getById("inputSelect") as HTMLInputElement).value;
    const select: HTMLElement = getById("Opcoes");
    const novaOpcao: HTMLOptionElement = document.createElement("option");
    novaOpcao.value = texto;
    novaOpcao.textContent = texto;
    select.appendChild(novaOpcao);
});