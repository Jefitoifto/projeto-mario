const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFechar = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function alterarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    //abrir a modal na tela
    alterarModal();
    video.setAttribute("src", linkVideo);
});
//OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
botaoFechar.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", "");
});