// Aqui é um comentário

/* 
Aqui tb é um comentário 
Aqui tem mais linhas de comentário
*/

console.log("Escrevendo no console...");

// alert('Olá "Laercio" ');

// confirm("Você confirma isto?");

let nome;
//nome = window.prompt("Qual o seu nome?");

//alert("Olá " + nome + '!');

//let idade = prompt("Qual a sua idade?");

//alert(`${nome} a sua idade é ${idade}`);
function inicio() {
    
    let numero = prompt("Informe um número");
    //parseInt = inteiro
    numero = parseFloat(numero);
    console.log("Numero: " + numero);
    console.log(numero + 10);
    console.log(numero - 5);
    
    let numero2 = document.getElementById("numero").value;
    alert(numero2);
    
    // Poderia ser escrito assim tb:
    // alert(nome + ' a sua idade é ' + idade);
}







