import { Projeto } from "../../model/projeto.js";

export class Projetos {
    constructor() {
        this.projetos = [
            new Projeto('MAÇÃ', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('PERA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('ABACAXI', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('MELÂNCIA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('COCÔ', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('KIWI', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('MANGA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('AMEIXA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
            new Projeto('ABACATE', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', '../../../assets/img/img_base.svg'),
        ];
        this.input_titulo = document.getElementById('input_titulo');
        this.input_descricao = document.getElementById('input_descricao');
        this.input_img = document.getElementById('input_img');
        this.criar_card = document.getElementById('criar_card');
    }
    addCard() {
        this.projetos.push(new Projeto(
            this.input_titulo.value,
            this.input_descricao.value,
            this.input_img.value,
        ));
        this.criar_card.style.display = 'none';
    } 
    removerCard(index) {
        this.projetos.splice(index, 1);
    }
}




