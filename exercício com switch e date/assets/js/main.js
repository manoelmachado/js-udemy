const data = new Date();
let mes = data.getMonth();
let mesTexto;
let diaSemana = data.getDay();
let diaSemanaTexto;
let diaMes = data.getDate();
let ano = data.getFullYear();
let horas = data.getHours();
let minutos = data.getMinutes();

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
    break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
    break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
    break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
    break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
    break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
    break;
    case 6:
        diaSemanaTexto = 'Sábado';
    break;
}

switch (mes) {
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 1:
        mesTexto = 'Fevereiro';
        break;
    case 2:
        mesTexto = 'Março';
        break;
    case 3:
        mesTexto = 'Abril';
        break;
    case 4:
        mesTexto = 'Maio';
        break;
    case 5:
        mesTexto = 'Junho';
        break;
    case 6:
        mesTexto = 'Julho';
        break;
    case 7:
        mesTexto = 'Agosto';
        break;
    case 8:
        mesTexto = 'Setembro';
        break;
    case 9:
        mesTexto = 'Outubro';
        break;
    case 10:
        mesTexto = 'Novembro';
        break;
    case 11:
        mesTexto = 'Dezembro';
        break;
}

document.getElementById("fullDate").innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano} às ${horas}:${minutos}`;