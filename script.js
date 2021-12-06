const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');









function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols ='!?@#$%^&*(){}[]+<>?/;:,';
    return symbols.[Math.floor(Math.random() * symbols.length)];
}
