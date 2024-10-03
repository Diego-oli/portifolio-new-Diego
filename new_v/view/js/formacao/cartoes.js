let nomes = ['CARTAO 1','CARTAO 2','CARTAO 3','CARTAO 4','CARTAO 5','CARTAO 6','CARTAO 7','CARTAO 8','CARTAO 9','CARTAO 10','CARTAO 11','CARTAO 12','CARTAO 13','CARTAO 14','CARTAO 15','CARTAO 16'];
let valores = ['R$59.70', 'R$90.23', 'R$27.79', 'R$86.49', 'R$11.55', 'R$33.77', 'R$12.36', 'R$38.80',  'R$14.87', 'R$62.17', 'R$36.05', 'R$66.00', 'R$17.32', 'R$76.11', 'R$91.26', 'R$59.67'];


export function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');

    for (let i = 0; i < nomes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao';
        let h1 = document.createElement('h1');
        h1.textContent = nomes[i];
        let h3 = document.createElement('h3');
        h3.textContent = valores[i];
        let p = document.createElement('p');
        p.textContent = 'sobre...';

        cartao.appendChild(h1);
        cartao.appendChild(h3);
        cartao.appendChild(p);

        sectionCartoes.appendChild(cartao);
    }

}