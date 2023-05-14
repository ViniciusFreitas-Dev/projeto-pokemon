// Passo 1
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// passo 2
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
// passo 3
botaoAlterarTema.addEventListener("click", () => {
    // Passo 6
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    console.log(modoEscuroEstaAtivo);
    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
        
        // passo 8
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        
        // Passo 5
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});

