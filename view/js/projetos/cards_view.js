import { Projetos } from "../../../controller/projects/cards_controller.js";

export class CriadorCards{
    constructor(){
        this.projetos = new Projetos();
        this.cards_projetos = document.getElementById('cards_projetos');
        this.divs = [];
        this.criar_card = document.getElementById('criar_card');
    }

    criarCards() {
        this.cards_projetos.innerHTML = '';
        this.divs = [];
    
        for (let i = 0; i < this.projetos.projetos.length; i++) {
            var div = document.createElement('div');
    
            div.className = 'card';
            this.divs.push(div);
            this.cards_projetos.appendChild(div);
        }
    
        for (let i = 0; i < this.projetos.projetos.length; i++) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            var btn = document.createElement('button');
    
            btn.style.width = '5vw';
            btn.style.height = '2vw';
            btn.addEventListener('click', ()=> {
                this.projetos.removerCard(i);
                this.criarCards();
            });
    
            img.src = '../assets/img/' + this.projetos.projetos[i].img;
            img.style.width = '5vw';
    
            h3.textContent = this.projetos.projetos[i].titulo;
    
            p.textContent = this.projetos.projetos[i].descricao;
    
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(btn);
            this.divs[i].appendChild(div);
        }
    
        let divAdd = document.createElement('div');
        divAdd.className = 'card cardAdd';
        divAdd.addEventListener('click', ()=> {
            this.criar_card.style.display = 'flex';
        });
    
        let icon = document.createElement('i');
        icon.className = "fa-solid fa-plus iconeMais";
    
        divAdd.appendChild(icon);
        this.cards_projetos.appendChild(divAdd);
    }
    addCard(){
        return ()=>{
            this.projetos.addCard();
            this.criarCards();
        }
    }
}