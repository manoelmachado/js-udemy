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