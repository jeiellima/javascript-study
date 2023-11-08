//Condicional
// If - Else

const hora = 25;
 
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!')
} else {
    console.log('Hora inválida.')
}


console.log('')
console.log('')

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou pedir um iFood')
} else {
    console.log('Putz, to liso')
}

console.log('')
console.log('')

const aleatorio = Math.floor(Math.random() * 100);
console.log(aleatorio)

if (aleatorio >= 51) {
    console.log('Numero gerado acima de 50')
} else if (aleatorio <= 49) {
    console.log('Numero gerado abaixo de 50')
} else if (aleatorio == 50) {
    console.log('Uau, você acertou no 50!')
} else {
    console.log('Número inexistente.')
}