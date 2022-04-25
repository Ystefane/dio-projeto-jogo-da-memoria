let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//  Torna a ordem das cores aleatorias
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// liga a cor seguinte
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selecionado");
    }, number - 500);
    setTimeout(() => {
        element.classList.remove("selecionado");
    }, number - 10);
}


//  checa se a ordem correta de cores foi clicada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// função para clicar
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selecionado");
    setTimeout(() => {
        createColorElement(color).classList.remove("selecionado");
        checkOrder();
    }, 150);
}

//  função para retornar a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

//  função para o proximo nivel do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função para game over

let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para tentar novamente!`);
    order = [];
    clickedOrder = [];
    playGame();
}

// função de inicio do game
let playGame = () => {
    alert("Bem vindo ao Gênesis! Iniciando novo jogo!");
    score = 0;

    nextLevel();
}

// eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// inicio do jogo
playGame();