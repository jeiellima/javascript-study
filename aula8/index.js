// Jeiel Souza Lima, tem 26 anos, pesa 101 kg, tem 1.73m de altura, seu IMC é 33.75.
// Jeiel nasceu em 1997.

const nome = 'Jeiel';
const sobrenome = 'Souza Lima';
const idade = 26;
let peso = 101;
let altura = 1.73;
let imc;
let anoNasc;

anoNasc = 2023 - idade;
imc = peso / (altura * altura)

console.log(nome, sobrenome,'tem', idade, 'anos, pesa', peso,'kg, tem', altura,'de altura','e seu IMC é', imc.toFixed(2));
 

console.log(`${nome} nasceu ${anoNasc}.`)