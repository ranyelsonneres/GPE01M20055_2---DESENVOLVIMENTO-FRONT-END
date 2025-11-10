console.log("Olá mundo!");
//alert("Bem-vindo a página");

//criar a função que recebe o clique
function mudarTexto() {
    console.log("clicou!");
    let texto = window.prompt("Digite uma frase: ");
    console.log(texto);
    //recuperar o elemento HTML
    document.getElementById("texto").innerText = texto;
}

//obter o botão do HTML
let botao = document.getElementById("verificarButton");
console.log(botao);

//adicionar um evento ao botão (clique)
botao.onclick = function(e){
    //alert("clicou - funcionou");
    console.log("clicou - funcionou!");
    e.preventDefault(); //evitar que os dados sejam recarregados

    //capturar o elemento de entrada do formulário (input)
    let idade = document.getElementById("idadeInput").value;
    console.log(idade);

    //pegar o elemento onde será exibida a mensagem final
    let resultado = document.getElementById("resultado");

    //verificação (não aceitar números negativos
    if (idade < 0){
        resultado.textContent = "Idade inválida";
    } else if (idade>=18){
        resultado.textContent = "Você é maior de idade";
    } else {
        resultado.textContent = "Você é menor de idade";
    }

}
