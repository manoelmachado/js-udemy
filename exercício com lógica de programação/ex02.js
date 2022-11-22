// escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem.
/*
function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    } return false;
}
console.log(ePaisagem(1000, 500))
*/

// convertendo para arrow function

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080))