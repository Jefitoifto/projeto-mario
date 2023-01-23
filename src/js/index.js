const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js
console.log('mostrar o document', document);
console.log(document.querySelector(".botao-trailer"));

//passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkVideo);

});

//OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
//passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
botaoFechar = document.querySelector(".fechar-modal");

//passo 2 - dar um jeito de identificar quando o usuário clicar no botão X
botaoFechar.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});