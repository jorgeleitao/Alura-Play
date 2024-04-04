import { conectaAPI } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function pesquisaVideo(evento){
    evento.preventDefault();
    const termoDeBusca = document.querySelector("[data-busca]").value;
    const busca = await conectaAPI.buscarVideo(termoDeBusca);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento =>lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length == 0){
        lista.innerHTML = `<h2 class = "mensagem__titulo">NÃO EXISTEM VIDEOS COM ESSE TERMO</h2>`
    }
        
    // console.log(busca);
}

const botaoDePesquisa = document.querySelector(" [data-botao-pesquisa] ")

botaoDePesquisa.addEventListener("click", evento => pesquisaVideo(evento))