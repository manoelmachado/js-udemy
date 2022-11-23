// while num <= 100

/*
função fizzBuzz(numero) {
    let numero = 0
    enquanto numero <= 100{

    }
}

console.log(fizzBuzz(numero))

*/

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
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; 1 <= 100; i++) {
    console.log(i, fizzBuzz(i))
}