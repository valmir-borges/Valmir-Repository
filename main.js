document.addEventListener("click" , showcolor)

document.getElementById("botao").addEventListener("click", exibenome)

function showcolor ()
{
    document.body.style.backgroundColor = "red";
}

function exibenome ()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é: " + usuario;
    document.getElementById("nome").value = "";
}

document.getElementById("botao-de-soma").addEventListener("click", somar)

function somar ()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = num1 + num2
    document.getElementById("resultado").innerHTML = "Resultado: " + num3

}