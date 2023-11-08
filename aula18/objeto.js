const pessoa1 = {
    nome: 'Jeiel',
    sobrenome: 'Lima',
    idade: 26,

    fala() {
        console.log(`Minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome, 
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

//!!!    Uma forma de simplificar a função acima   !!!
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const person = criaPessoa('Jeiel', 'Lima', 26)
const person1 = criaPessoa('Ananda','Vilaine', 22)
const person2 = criaPessoa('Pipi','Lima', 2)
