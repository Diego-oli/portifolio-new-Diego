import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";

export async function buscarCarotes() {
    try {
        const response = await fetch('https://backend-portifolio-kappa.vercel.app/cartoes');
        const data = await response.json();
        const cards = data.cartoes;
        return cards;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluircards(index) {
    try {
        const response = await fetch('https://backend-portifolio-kappa.vercel.app/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log('Ola ola' + e);
    }
}

export async function cadastrarCatao(nome, valor, link) {
    try {
        const response = await fetch('https://backend-portifolio-kappa.vercel.app/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                img: link,
            }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, valor, image) {
    try {
        const response = await fetch('https://backend-portifolio-kappa.vercel.app/cartoes', {
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