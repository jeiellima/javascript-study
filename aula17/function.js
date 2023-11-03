function calc(a, b) {
    let result = a + b;
    return `${a} + ${b} = ${result}`;
}

console.log(calc(6, 2));

function hello(nome = String) {
    console.log(`Bom dia ${nome}!`);
}
hello('Jeiel')

//Método normal
function raiz(n) {
    return n ** 0.5;
}

console.log(raiz(9))

// Arrow Function
//const raiz = n => n ** 0.5;

