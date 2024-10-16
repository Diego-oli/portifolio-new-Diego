import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";

export async function buscarCarotes() {
    try {
        const response = await fetch('http://localhost:3000/cards');
        const data = await response.json();
        const cards = data.cards;
        return cards;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluircards(index) {
    try {
        const response = await fetch('http://localhost:3000/cards', {
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
        const response = await fetch('http://localhost:3000/cards', {
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
        criarcards();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, valor, img) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                img: img,
                id: id,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}