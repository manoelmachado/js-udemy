/*
try {
console.log(esteErro); // tentando fazer um console.log de uma variável que não existe
} catch(err) { // capturando o erro da
    console.log('Variável não existe.') // alterando a mensagem de erro para esse console.log
    console.log(err) // caso queira mostrar o stack trace do erro, pode mostrar assim
}
*/


//usando uma funcção para capturar o erro

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}
try {
    console.log(soma(1, 2))
    console.log(soma('a', 2))
} catch(err) {
    console.log(err)
}