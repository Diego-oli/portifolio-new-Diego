let divs = [];
let titulos = ['MAÇÃ', 'BANANA', 'PERA', 'ABACAXI', 'MELANCIA', 'CEREJA', 'BANANA', 'PERA', 'ABACAXI', 'MELANCIA', 'CEREJA', 'BANANA', 'PERA', 'ABACAXI', 'MELANCIA', 'CEREJA', 'BANANA', 'PERA', 'ABACAXI', 'MELANCIA'];
let textos = ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 'ccccccccccccccccccccccccccccccc', 'ddddddddddddddddddddddddddddddddd', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'];
let imgs = ['logo.png', 'logo.png', 'img.png', 'logo.png', 'img.png', 'img.png', 'logo.png', 'img.png', 'logo.png', 'img.png', 'img.png', 'logo.png', 'img.png', 'logo.png', 'img.png', 'img.png', 'logo.png', 'img.png', 'logo.png', 'img.png'];

let cards_projetos = document.getElementById('cards_projetos');

export function criarCards() {

    for (var i = 0; i < titulos.length; i++) {
        var div = document.createElement('div');

        div.className = 'card';
        divs.push(div);
        cards_projetos.appendChild(div);
    }

    for (var i = 0; i < titulos.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var h3 = document.createElement('h3');
        var p = document.createElement('p');

        img.src = '../assets/img/img_base.svg';
        img.style.width = '5vw';

        h3.textContent = titulos[i];

        p.textContent ='Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..';

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);

        divs[i].appendChild(div);
    }
}