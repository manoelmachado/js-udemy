// FOR IN COM OBJETOS
const pessoa = {
    nome: 'Manoel',
    sobrenome: 'Machado',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// ESSA VARIÁVEL CHAVE PODERIA IR DINAMICAMENTE DESSA MANEIRA:
// const chave = 'nome';
// console.log(pessoa[chave]);

// ISSO É UTIL QUANDO NÃO SABEMOS QUAL A PROPRIEDADE QUE IREMOS PEGAR
// console.log(pessoa.nome)
// console.log(pessoa['nome'])

// ACESSANDO A CHAVE NOME DO OBJETO PESSOA
//console.log(pessoa.nome)

// FOR IN LENDO AS CHAVES DO OBJETO
// for (let chave in pessoa) {
//     console.log(chave)
// }


// FOR IN COM ARRAYS
// const frutas = ['Uva', 'Pera', 'Maça'];
        
// USANDO FOR IN - LENDO OS ÍNDICES DA VARIÁVEL OU CHAVES DO OBJETO
// for (let i in frutas) {
//     console.log(frutas[i])
// }

// FORMA CLÁSSICA PARA CONTAR E ADICIONAR
// for (let i = 0; i < frutas.length; i++) {
// console.log(frutas[i])
// }