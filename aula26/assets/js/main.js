//Capturar submit do form

const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso && !altura) {
        setResult('Peso e Altura inválidos', false);
        return;
    }

    if (!peso) {
        setResult('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResult('Altura inválida', false);
        return;
    }

    console.log('Cheguei aqui...')
});


function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    
}