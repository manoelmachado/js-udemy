/*
Utilizando switch ao invés de usar if else
quando temos somente uma variável para avaliar, é mais fácil de usar o switch para conferir
*/

const data = new Date('2020-10-19');
const diaSemana = data.getDay();
/*
if (diaSemana === 0) {
    console.log('Domingo')
} else if (diaSemana === 1) {
    console.log('Segunda')
} else if (diaSemana === 2) {
    console.log('Terça')
} else if (diaSemana === 3) {
    console.log('Quarta')
} else if (diaSemana === 4) {
    console.log('Quinta')
} else if (diaSemana === 5) {
    console.log('Sexta')
} else if (diaSemana === 6)
    console.log('Sábado')
*/

// com o SWITCH, o código ficaria assim:

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('erro')
    }