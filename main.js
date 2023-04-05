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
    let num3 = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + num3;

}

document.getElementById("botao-de-sub").addEventListener("click", sub)

function sub ()
{
    let num4 = document.getElementById("num3").value;
    let num5 = document.getElementById("num4").value;
    let num6 = parseFloat(num4) - parseFloat(num5);
    document.getElementById("resultado1").innerHTML = "Resultado: " + num6;

}

document.getElementById("botao-de-mult").addEventListener("click", mult)

function mult ()
{
    let num7 = document.getElementById("num5").value;
    let num8 = document.getElementById("num6").value;
    let num9 = parseFloat(num7) * parseFloat(num8);
    document.getElementById("resultado2").innerHTML = "Resultado: " + num9;

}

document.getElementById("botao-de-div").addEventListener("click", div)

function div ()
{
    let num10 = document.getElementById("num7").value;
    let num11 = document.getElementById("num8").value;
    let num12 = parseFloat(num10) / parseFloat(num11);
    document.getElementById("resultado3").innerHTML = "Resultado: " + num12;

}