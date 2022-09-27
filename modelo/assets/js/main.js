const form = document.querySelector('#form'); // selecionando o formulário e criando uma constante para ele

form.addEventListener('submit', function (e) { //adicionando um uma espera de evento (nesse caso, o botão de submit)
    e.preventDefault(); // definindo a função dessa espera de evento para default (para que não recarregue os dados e eles se percam)
    const inputPeso = e.target.querySelector('#id-peso') // adicionando uma constante para conseguir o peso no input, usando querySelector por #id
    const inputAltura = e.target.querySelector('#id-altura') // adicionando uma constante para conseguir a altura no input, usando querySelector por #id
    const peso = Number(inputPeso.value) // transformando o número do peso obtido no input acima para um tipo Number
    const altura = Number(inputAltura.value) // transformando o número da altura obtido no input acima para um tipo Number
    
    if (!peso) { // se o peso NÃO for Number, retornar false
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) { // se a altura NÃO for Number, retornar false
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura) // criando uma constante para pegar o imc
    const nivelImc = getNivelImc(imc) // criando uma constante para pegar o "nível" do imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // montagem da mensagem a ser apresentada no final da página

    setResultado(msg, true); // verificação do valor como TRUE
});

function getNivelImc(imc) { // criando uma função para pegar o imc utilizando os dados de peso e altura
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // criando um array para todas as informações necessárias que temos

    // abaixo criamos um if para identificar qual o nível do imc da pessoa
    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

function getImc (peso, altura) { // criando a função de cálculo do IMC e colocando .toFixed(2) com duas casas decimais
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP () { // criando uma função para criar um parágrafo
    const p = document.createElement('p');
    return p
}

function setResultado (msg, isValid) { // criando uma função de texto para ser exibido no resultado e adicionando o parâmetro isValid para conferir se o resultado é verdadeiro ou falso
    const resultado = document.querySelector('#resultado'); // capturando o #id resultado da div criada
    resultado.innerHTML = ''; // setando o HTML da página para ficar em branco todas as vezes que chamarmos o resultado
    const p = criaP(); // criando um parágrafo usando a função acima

    if (isValid) { // verificação de true ou false do tipo do dado
    p.classList.add('parafrago-resultado'); // adicionando class no paragrafo caso o dado for true
    } else {
    p.classList.add('bad'); // adicionando class no paragrafo caso o dado for false
    }

    p.innerHTML = msg; // adicionando um HTML no parágrafo
    resultado.appendChild(p); // adicionando o paragrafo criado na div selecionada pelo #id resultado

}