const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de chocolate?"
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Toma cuidado não coma muito!"
            },
            {
                texto: "Não",
                afirmacao: "É bom não vai correr rico de diabetes!"
            }
        ]
    },
    {
        enunciado: "Você gosta de viajar?".
            {
                texto: "Sim",
                afirmacao: "É muito bom refresca a mente!"
            },
            {
                texto: "Não",
                afirmacao: "As vezes e bom vijar faz bem pra vida!"
            }
        ]
    },
    {
        enunciado: "você é timdo?"
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Um lugar bom e teatro, resolve a timides! "
            },
            {
                texto: "Não",
                afirmacao: "Parabens você não tem uma coisa que muito temem"
            }
        ]
    },
    {
        enunciado: "você tem medo de injeção?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "então você é froxo, o negocio e tranquilo"
            },
            {
                texto: "Não",
                afirmacao: "Aí sim, você é caba macho"
            }
        ]
    },
    {
        enunciado: "você desenha?"
        alternativas: [
            {
                texto: "sim",
                afirmacao: "É bom desenhar, e um talento que muitos quer ter!"
            },
            {
                texto: "Não",
                afirmacao: "Poderia tentar aprende, ajuda a melhorar sua mente "
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