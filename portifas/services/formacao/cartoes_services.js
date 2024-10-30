import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";

export async function buscarCarotes() {
    try {
        const response = await fetch('https://backend-portifolio-m5k4.vercel.app/cartoes');
        const data = await response.json();
        const cards = data;
        return cards;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluircards(index) {
    try {
        const response = await fetch('https://backend-portifolio-m5k4.vercel.app/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });
        criarcards();
    }
    catch (e) {
        console.log(e);
    }
}

export async function cadastrarCatao(nome, valor, link) {
    try {
        const response = await fetch('https://backend-portifolio-m5k4.vercel.app/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                image: link,
            }),
        });
        criarcards();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, valor, image) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                image: image,
                id: id,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}