// while num <= 100

/*
function fizzBuzz() {
    var num = 0
    while (num <= 100) {
        if (num % 15 === 0) {
            console.log('FizzBuzz')
        } else if (num % 5 === 0) {
            console.log('Buzz')
        } else if (num % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(num)
        }
        num++;
    }
}

console.log(fizzBuzz())
*/

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 15 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}