import { calculoPercentual } from "./scripts_calculos";




function mensagem() {
    console.log('Uma mensagem');
}

mensagem();

function mensagemLinda(txt) {
    console.log(txt);
}

mensagemLinda('Brasil vai dar um pau no Haiti');

function somaNumeros(num1, num2) {
    return num1 + num2;
}

console.log('A soma dos números:', somaNumeros(10, 58));

const multiplicacao = function (num1, num2) {
    return num1 * num2;
};

console.log(multiplicacao(64, 5));

console.log('-------> ARROW FUNCTION <-----');

const msgArrow = () => {
    console.log('Outra mensagem na arrow function');
};

msgArrow();

const divisaoNum = (valor1, valor2) => {
    if (valor2 !== 0) {
        return valor1 / valor2;
    } else {
        return 'NÃO É POSSÍVEL DIVISÃO POR ZERO';
    }
};

console.log(divisaoNum(10, 8000));

console.log(Math.random());

console.log(
    'O número sorteado =====> ',
    Math.floor(Math.random() * 100)
);

setTimeout(() => {
    console.log('Executou após 5s');
    msgArrow();
}, 5000);

// Elemento da página
const divNumSorteio = document.querySelector('#div-num-sorteio');

let contVolta = 0;
let numSorteado = 0;
let contPar = 0;
let contImpar = 0;

const sorteio = setInterval(() => {
    contVolta++;

    numSorteado = Math.floor(Math.random() * 60);

    console.log(`${contVolta}º número sorteado ${numSorteado}`);

    if (numSorteado % 2 === 0) {
        contPar++;
    } else {
        contImpar++;
    }

    divNumSorteio.innerHTML += `
        ${contVolta}º número gerado ${numSorteado} - 
        ${numSorteado % 2 === 0 ? 'PAR' : 'ÍMPAR'}<br>
    `;

    if (numSorteado === 6) {
        console.log('------> SORTEIO ENCERRADO <------');

        divNumSorteio.innerHTML += `
            ------> SORTEIO ENCERRADO <------<br>
            TOTAL DE NÚMEROS GERADOS: ${contVolta}<br>
            TOTAL DE NÚMEROS PAR: ${contPar}<br>
            TOTAL DE NÚMEROS ÍMPAR: ${contImpar}
        `;

        clearInterval(sorteio);

        contVolta = 0;
        numSorteado = 0;
    }
}, 2000);



//CHAMANDO A FUNÇÃO DE OUTRO ARQUIVO
console.log('CALCULO DA FUNÇÃO calculoPercentual DO ARQUIVO scripts_calculos.js --->',calculoPercentual(750))