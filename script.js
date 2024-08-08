const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você gosta de desenhar?",
        alternativas: [
            {
                texto: "sim!",
                afirmacao: "isso é bom, ajuda a refresca a mente. "
            },
            {
                texto: "não!",
                afirmacao: "poderia aprender isso é bom pra mente."
            }
        ]
    },
    {
        enunciado: "Você gsota de viajar?",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "É bom as vezes viajar."
            },
            {
                texto: "Não.",
                afirmacao: "Poderia tirar uns dia pra fazer isso, você vai melhora muito."
            }
        ]
    },
    {
        enunciado: "Você gosta de chocolate?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Come com bastante cuidado se não vai ter consequência."
            },
            {
                texto: "Não.",
                afirmacao: "Isso é bom não vai ter probrema com diabetes."
            }
        ]
    },
    {
        enunciado: "você é timido?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Isso é ruim, mais faz teatro que ajuda a melhora essa timidez."
            },
            {
                texto: "Não.",
                afirmacao: "Parabéns você não tem uma coisa que a maioria sofre!"
            }
        ]
    },
    {
        enunciado: "você tá namorando? ",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "Isso é bom, e ótimo quando tem alguem que ocê confia no seu lado."
            },
            {
                texto: "Não.",
                afirmacao: "Ai é triste, o trem é fica sofreno sozin ai memo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();