let order = [];
let clickedOrder = [];
let score = 0;

//verde = 0
//vermelho = 1
//amarelo = 2
//azul = 3

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// cria ordem aleatoria de cores
let suffleOrder = () => {
    let colorOrder = Math.floor(Math.random()* 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acender a próxima cor 
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 300);
}

//checar se os botões estão na mesma ordem gerada no jogo
let checkOrder = () => {
    for( let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n \nVocê Acertou!!\n\n Iniciando próximo nível`);
        nextLevel();
    }
}

//função para  clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();        
    }, 250);
}

// Funçao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    } 
}

//função para o próximo nível
let nextLevel = () => {
    score++;
    suffleOrder();
}

//Função para geme over
let gameOver = () => {
    alert(`Pontuação: ${score}\n\nVocê Perdeu o Jogo!!\n\nClique Em OK Para Iniciar Um Novo Jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função para o inicio do jogo
let playGame = () => {
    alert('Bem Vindo ao Jogo Da Memória Genius!\n \nClique em Ok Para Iniciar Um Novo Jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();