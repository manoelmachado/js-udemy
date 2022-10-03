/*
sintaxe
condicao ? true : false
*/

/*
usamos a operação ternária geralmente para substituir um if else, por exemplo
imaginamos que temos um site onde existe uma pontuação e baseado na pontuação desse usuário, daremos um flag para ele mostrando se é VIP ou não
*/

// const pontuacaoUsuario = 1000;
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP')
// } else {
//     console.log('Usuário normal')
// }


/*
para fazer utilizando a operação ternária, faremos o seguinte:
colocamos a expressão numa variável e já calculamos na sequência, logo após isso colocamos a condição verdadeira e falsa
*/

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario)

/*
podemos acrescentar outras operações também, como o OU
*/
const corUsuario = 'Rosa';
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao)