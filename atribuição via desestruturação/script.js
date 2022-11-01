/*let a = 'A';
let b = 'B';
let c = 'C';
const numeros = [b, c, a];
[a, b, c] = numeros; 
console.log(a, b, c);
*/




//               0   1   2   3   4   5   6   7   8...
//const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const primeiroNumero = numeros[0] --- definindo uma variável para o índice selecionado
// const [primeiroNumero, segundoNumero] = numeros; --- definindo mais de uma variável para os índices selecionados
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; -- definindo uma variável para retornar o resto dos índices que não foram selecionados anteriormente
// const [um, , tres, , cinco, , sete, , nove] = numeros; --- atribuimos valores às variáveis e ignorando alguns valores, colocando um espaço em branco neles





//arrays dentro de arrays
const numeros = [
//indice da lista               0           1           2
//indice dentro da lista     0  1  2     0  1  2     0  1  2
                            [1, 2, 3],  [4, 5, 6],  [7, 8, 9]
];

// mostrando o número 6 (indice [1] e [2])
//console.log(numeros[1][2]);

//const [,[, ,seis]] = numeros ---- uma das maneiras de conseguir o índice desejado e adicionar uma variável para ele
//console.log(seis)

//const [lista1, lista2, lista3] = numeros; --- também é uma maneira de conseguir o indice desejado, mas de uma maneira mais fácil listando os arrays
//console.log(lista3[2]);