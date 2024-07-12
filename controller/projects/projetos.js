import { trocaBanner } from "./banner.js";
import { startAutoSwap } from "./banner.js";
import { criarBanners } from "./banner.js";
import { startAutoSwapHabilits } from "./habilits.js";
import { criarHabilits } from "./habilits.js";
import { CriadorCards } from "./cards.js";

window.trocaBanner = trocaBanner;
let criadorCards = new CriadorCards();
window.addCard = criadorCards.addCard();

document.addEventListener("DOMContentLoaded", function() {
    criarBanners();
    criarHabilits();    
    criadorCards.criarCards();    
    trocaBanner(1); // Inicializa o banner
    startAutoSwap(); // Inicia a troca automática
    startAutoSwapHabilits();
});