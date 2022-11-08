const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];


/*
const parag = document.createElement("p");
parag.innerText = elementos[0]['texto'];
document.body.querySelector('.container').appendChild(parag)

const d = document.createElement("div");
d.innerText = elementos[1]['texto'];
document.body.querySelector('.container').appendChild(d)

const f = document.createElement("footer");
f.innerText = elementos[2]['texto'];
document.body.querySelector('.container').appendChild(f);

const s = document.createElement('section');
s.innerText = elementos[3]['texto'];
document.body.querySelector('.container').appendChild(s);
*/


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);    
};

container.appendChild(div);