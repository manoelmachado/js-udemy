// let nome = 'Manoel';
// var nome2 = 'Manoel';

// let nome = 'Lucas';     não funciona já tendo uma variável declarada com let
// var nome2 = 'Lucas';    funciona normalmente declarando uma variável com var

// diferença sobre escopo:
/*
const verdadeiro = true;
let nome = 'Manoel'; // variável foi criada
var nome2 = 'Manoel';

if (verdadeiro) {
    let nome = 'Lucas'; // variável foi criada
   // console.log(nome, nome2);
    if (verdadeiro) {
        let nome = 'Thiago';
        console.log(nome, nome2);
    }
*/


/*
console.log(greeter);
var greeter = "say hello"

var greeter;
console.log(greeter);
greeter = "say hello"
*/


/*
var greeter = "hey hi";
var times = 4;
if (times > 3) {
    var greeter = "say hello instead";
}
console.log(greeter)
*/


/*
let greeting = "say hi";
let times = 4
if (times > 3) {
    let hello = "say Hello instead"; 
    console.log(hello); // dirá "say hello instead"
}
console.log(hello) // hello não está definido
*/


/*
let greeting = "say Hi"; 
    greeting = "say Hello instead"; // funciona
*/

/*
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // não funciona
*/

/*
let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // retornará "say Hello instead"
    }
    console.log(greeting); // retornará "say Hi"
*/

