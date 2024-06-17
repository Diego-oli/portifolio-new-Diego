var contador = 0;

function trocaCorRosa() {
    contador++;
    var btn_home = document.getElementById("btn_home");

    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var sobre_mim = document.getElementById("sobre_mim");

    if(contador == 5){
        nome.style.color = "#f14598";
        sobrenome.style.color = "#f14598";
        sobre_mim.style.color = "#f14598";
    }
}