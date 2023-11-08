function myScope() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault(); 

        const nome = form.querySelector('#iname')
        const sobrenome = form.querySelector('#ilast')
        const idade = form.querySelector('#iage')
        const peso = form.querySelector('#ipeso')
        const altura = form.querySelector('#ialtura')
        
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            idade: idade.value, 
            peso: peso.value, 
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `
        <p>
        Nome: ${nome.value}<br>
        Sobrenome: ${sobrenome.value}<br>
        Idade: ${idade.value} anos<br>
        Peso: ${peso.value}kg<br>
        Altura: ${altura.value}m<br>
        </p>`
    }

    form.addEventListener('submit', recebeEventoForm)
}

myScope();