function trocaBanner(numero){
    document.getElementById("banner").style.left = "-" + numero + "00vw";
    
    resetarBtnBunner();

    document.getElementById("btn_banner" + (Number(numero) + 1)).style.width = '2vw';
    document.getElementById("btn_banner" + (Number(numero) + 1)).style.height = '2vw';
}

function resetarBtnBunner(){
    document.getElementById("btn_banner1").style.width = '1.5vw';
    document.getElementById("btn_banner1").style.height = '1.5vw';

    document.getElementById("btn_banner2").style.width = '1.5vw';
    document.getElementById("btn_banner2").style.height = '1.5vw';

    document.getElementById("btn_banner3").style.width = '1.5vw';
    document.getElementById("btn_banner3").style.height = '1.5vw';

    document.getElementById("btn_banner4").style.width = '1.5vw';
    document.getElementById("btn_banner4").style.height = '1.5vw';

    document.getElementById("btn_banner5").style.width = '1.5vw';
    document.getElementById("btn_banner5").style.height = '1.5vw';
}