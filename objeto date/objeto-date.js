/*
const data = new Date();
console.log(data.toString())
*/


/*
como foi mostrado anteriormente, se puxarmos o marco 0 do new Date(), o objeto vai nos mostrar a data 01/01/1970 (timestamp unix ou época unix)
obs.: por conta do fuso horário, é apresentado para nós como 31/12/1969 às 21h (GMT -3H)
se quisermos mostrar o horário normal, podemos criar uma variável com 3 horas em milesimos de segundos
60 * 60 * 3 * 1000 = segundos * segundos * hora * milissegundos

const tresHoras = 60 * 60 * 3 * 1000
const data = new Date(0 + tresHoras)
console.log(data.toString()) 
*/

/*
podemos declarar uma data também utilizando apenas números, segundo de ANO, MÊS, DIA, HORA, MINUTO, SEGUNDO, MILISSEGUNDO, ficando assim:
obs.: o mês no JavaScript começa no 0 (Janeiro) e vai até 11 (Dezembro)

const data = new Date(2019, 3, 15, 12, 35, 51) // ano, mês, dia, hora, minuto, segundo, milissegundo
console.log(data.toString()) 
*/

/*
também podemos declamar uma data utilizando uma string da seguinte maneira:
const data = new Date('2019-04-20 20:20:59')

conseguimos também pegar o dia, mês, ano... dessa data específica da segunite maneira: 
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1); ---- mês começa do 0 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); ---- 0 é domingo, 6 é sábado
console.log(data.toString());
*/

/*
para obter o número de milissegundos do marco 0 até hoje:
console.log(Date.now())
*/


/*
quando tentamos mostrar a data numa string, ela não mostra os zeros à esquerda, portanto temos que criar uma função para poder adicionar um zero à esquerda caso esse número seja menor que 10, por exemplo:

CRIANDO A FUNÇÃO PARA MOSTRAR O ZERO À ESQUERDA
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}


ADICIONANDO A FUNÇÃO ZERO A ESQUERDA NA FUNÇÃO DE FORMATAR A DATA
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
*/

const d = new Date();
    document.getElementById("demo").innerHTML = d;

    const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);
    document.getElementById("demo1").innerHTML = d1;

    const d2 = new Date(2018, 11, 24, 10, 33, 30);
    document.getElementById("demo2").innerHTML = d2;

    const d3 = new Date(2018, 11, 24, 10, 33);
    document.getElementById("demo3").innerHTML = d3;

    const d4 = new Date(2018, 11, 24, 10);
    document.getElementById("demo4").innerHTML = d4;

    const d5 = new Date(2018, 11, 24);
    document.getElementById("demo5").innerHTML = d5;

    const d6 = new Date(2018, 11);
    document.getElementById("demo6").innerHTML = d6;

    const d7 = new Date(99, 11, 24);
    document.getElementById("demo7").innerHTML = d7;

    const d8 = new Date(9, 11, 24);
    document.getElementById("demo8").innerHTML = d8;

    const d9 = new Date("October 13, 2014 11:13:00");
    document.getElementById("demo9").innerHTML = d9;

    const d10 = new Date(100000000000);
    document.getElementById("demo10").innerHTML = d10;

    const d11 = new Date(-100000000000);
    document.getElementById("demo11").innerHTML = d11;

    const d12 = new Date(86400000);
    document.getElementById("demo12").innerHTML = d12;

    const d13 = new Date();
    document.getElementById("demo13").innerHTML = d13;

    const d14 = new Date();
    document.getElementById("demo14").innerHTML = d14.toString();

    const d15 = new Date();
    document.getElementById("demo15").innerHTML = d15.toUTCString();

    const d16 = new Date();
    document.getElementById("demo16").innerHTML = d16.toDateString();

    const d17 = new Date();
    document.getElementById("demo17").innerHTML = d17.toISOString();