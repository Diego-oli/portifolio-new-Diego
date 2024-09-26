let menu = document.getElementById('menu');
let cima = document.getElementById('cima');
let meio = document.getElementById('meio');
let baixo = document.getElementById('baixo');

export function trocarMenu(){
    if(menu.style.left === '0vw'){
        menu.style.left = '-100vw';  
    
        cima.style.transform = 'rotate(0turn)';
        cima.style.top = '1.5vw';

        meio.style.width = '5vh';
        meio.style.height = '1vh';

        baixo.style.transform = 'rotate(0turn)';
        baixo.style.bottom = '1.5vw';
    }else{
        menu.style.left = '0vw';

        cima.style.transform = 'rotate(0.88turn)';
        cima.style.top = '2.23vw';

        meio.style.width = '0';
        meio.style.height = '0';

        baixo.style.transform = 'rotate(-0.88turn)';
        baixo.style.bottom = '2.23vw';
    }
}