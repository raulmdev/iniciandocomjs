/*1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
//alert("Hello World")*/

/*2- Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let n1 = Number(prompt("Digite o primeiro numero:"))
let n2 = Number(prompt("Digite o segundo numero:"))
let soma = n1 + n2
alert(`${soma}`)*/

/*3- Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let n = prompt("Digite algo")
function verificarNumero(n){
    return !isNaN(n);
}
if(verificarNumero(n)){
    alert("é um número!")
}else{
    alert("Não é um número!")
}*/

/*4- Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let valor = prompt("Digite um valor:")
function eString(valor){
    return isNaN(valor) && typeof valor === 'string'
}
if(eString(valor)){
    alert("É uma string!")
}else{
    alert("Não é uma string!")
}
*/
/*5- Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let valor = prompt("Digite um valor (true/false):")

function eBoolean(valor){
    return valor === 'true' || valor === 'false'
}
if(eBoolean(valor)){
    alert("É um booleano")
}else{
    alert("Não é um booleano")
}*/

/*6- Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let number1 = Number(prompt("Digite um número:"))
let number2 = Number(prompt("Digite o segundo número:"))
let res = number1 - number2
alert(`O resultado da subtração entre ${number1} - ${number2} resulta em ${res}`)*/

/*7- Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
/*let number1 = Number(prompt("Digite um número:"))
let number2 = Number(prompt("Digite o segundo número:"))
let res = number1 * number2
alert(`O resultado da multiplicação entre ${number1} * ${number2} resulta em ${res}`)*/

/*8- Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let number1 = Number(prompt("Digite um número:"))
let number2 = Number(prompt("Digite o segundo número:"))
let res = number1 / number2
alert(`O resultado da divisão entre ${number1} / ${number2} resulta em ${res}`)*/

/*9- Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let valor = prompt("Digite um valor:")
function eNumeroPar(valor) {
    let numero = Number(valor)
    return !isNaN(numero) && numero % 2 === 0
}
if (eNumeroPar(valor)) {
    alert("É um número par");
} else {
    alert("Não é um número par");
}
*/
/*10- Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let valor = prompt("Digite um valor:")
function eNumeroImpar(valor) {
    let numero = Number(valor)
    return !isNaN(numero) && numero % 2 != 0
}
if (eNumeroImpar(valor)) {
    alert("É um número impar");
} else {
    alert("Não é um número impar");
}*/

    
