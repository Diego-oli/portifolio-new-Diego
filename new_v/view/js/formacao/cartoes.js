let cartoes = [
    {
        nome: 'CARTAO 1',
        valor: 'R$59.70',
        img: "https://th.bing.com/th/id/R.720c0e20b9a11f1849c7c7c87b373437?rik=gcjvH6x1SapnLw&pid=ImgRaw&r=0"
    },
    {
        nome: 'CARTAO 2',
        valor: 'R$90.23',
        img: "https://th.bing.com/th/id/OIP.zZcHBkUfwUmtek-sWpnjaAHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
    },
    {
        nome: 'CARTAO 3',
        valor: 'R$27.79',
        img: "https://th.bing.com/th/id/OIP.9kvRZ7zLIEE2umY0x-g9QwHaHa?w=544&h=544&rs=1&pid=ImgDetMain"
    },
    {
        nome: 'CARTAO 4',
        valor: 'R$86.49',
        img: "https://cdnv2.moovin.com.br/sandycalcados/imagens/produtos/original/tenis-nike-flyknit-max-85e744676043564192c692461cdb747f.jpg"
    },
    {
        nome: 'CARTAO 5',
        valor: 'R$11.55',
        img: "https://th.bing.com/th/id/OIP.Oe1oRos3_P7NZW5k8A6VqAAAAA?w=474&h=474&rs=1&pid=ImgDetMain"
    },
    {
        nome: 'CARTAO 6',
        valor: 'R$33.77',
        img: "https://th.bing.com/th/id/OIP.X7wo2DnEcRJdI9oMPh2RMQHaHa?w=650&h=650&rs=1&pid=ImgDetMain0"
    },
    {
        nome: 'CARTAO 7',
        valor: 'R$12.36',
        img: "https://th.bing.com/th/id/OIP.oru-V2rGQt6PTXXuh2qFDgHaIq?w=850&h=995&rs=1&pid=ImgDetMain"
    },
    {
        nome: 'CARTAO 8',
        valor: 'R$38.80',
        img: "https://th.bing.com/th/id/OIP.mODcPB1d4wGyUkxwD63-yQHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain"
    },
    {
        nome: 'CARTAO 9',
        valor: 'R$14.87',
        img: "https://th.bing.com/th/id/OIP.O5S1ytIVLkSa8ZuqsNOongHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: 'CARTAO 10',
        valor: 'R$53.40',
        img: "https://th.bing.com/th/id/OIP.O5S1ytIVLkSa8ZuqsNOongHaHa?rs=1&pid=ImgDetMain"
    }
];

export function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao';
        let h1 = document.createElement('h1');
        h1.textContent = cartoes[i].nome;
        let h3 = document.createElement('h3');
        h3.textContent = cartoes[i].valor;
        let p = document.createElement('p');
        p.textContent = 'sobre...';
        let imgTag = document.createElement('img');
        imgTag.src = cartoes[i].img;

        cartao.appendChild(h1);
        cartao.appendChild(imgTag);
        cartao.appendChild(h3);
        cartao.appendChild(p);

        sectionCartoes.appendChild(cartao);
    }

}