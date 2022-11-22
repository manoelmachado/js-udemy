// escreva uma função que recebe 2 números e retorne o maior deles

let num1 = 6
let num2 = 7
let res1 = `O número maior é ${num1}.`
let res2 = `O número maior é ${num2}.`
let erro = 'Os números são iguais.'

function retornoMaior(num1, num2) {
    if (num1 > num2) {
        return res1;
    } else if (num2 > num1) {
        return res2;
    } else {
        return erro;
    }
}

console.log(retornoMaior(num1, num2))