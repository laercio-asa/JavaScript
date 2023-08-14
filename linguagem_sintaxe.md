# ![JS logo](./images/JavaScript-logo48.png) Javascript - Linguagem e Sintaxe

## Tipos de variáveis em JavaScript
Os tipos de variáveis em JS são classificados em:

1. Strings — Uma String nada mais é que texto puro.
1. Numbers — São os números, seja eles integer, float, double etc.
1. Booleans — São os operadores booleanos (true ou false)
1. Arrays — É uma estrutura de dado para armazenar uma coleção de valores, sendo eles de qualquer tipo.
1. Objects — Conjunto de atributos aninhados a uma variável denomina-se um objeto.
1. Functions — Em JavaScript é possível declarar uma variável como uma função, podendo fazer operações e retornando o valor para a variável de declaração. Obs: muito utilizado no paradigma de programação funcional.


### Caracteristicas das variáveis em Javascript

- Tipagem dinâmico - o tipo de dados não é declarado e pode ser alterado sempre automaticamente
```
variavel = 1; // Número
variavel = "Senac"; // String
```
- Tipagem fraca (A conversão dos dados é feito automáticamente quando necessário)
```
idade = 48;
nome = 'Laercio';
console.log(nome + ', idade: ' + idade);
// Laercio, idade: 48
```
- Outra maneira é usar a crase `
```
idade = 48;
nome = 'Laercio';
console.log(`${nome} , idade: ${idade}`);
// Laercio, idade: 48
```
- Case Sensitive (Diferencia maiuscula e minuscula)

Saiba mais em [hcode](https://hcode.com.br/blog/template-strings-em-javascript)

Saiba mais em [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)


### Escopo e declaração das variáveis
| Declaração | Escopo | Atualizável | Nova Declaração | Observação |
| ---------- | ------ | ----------- | --------------- | ---------- |
| ```let```| Bloco | Sim | Não | Preferida |
| ```const```| Bloco | Não | Não | Tem que ser declarada |
| ```var```| Global | Sim | Sim | Evitar usar |

Saiba mais em [Alura](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)

## Operadores

- Atribuição (=) 
- Comparação (==)
- Igualdade (===)
- desigualdade (!=)
- Destructuring 
- Aritméticos
  -  adição (+), subtração (-), divisão (/), multiplicação (*), operações de módulo (%), exponenciação (**) 
- Relacionais
  - maior (>); maior ou igual (>=); menor (<); e menor ou igual (<=)
- Lógicos
  - && (“e” lógico), || (“ou” lógico) e o ! (negação lógica)
- Unários
  - incremento (++), decremento (--)

Saiba mais em [cod3r](https://blog.cod3r.com.br/entenda-operadores-javascript-na-pratica/)

## Estruturas de controle de fluxo
- Estrutura de decisão
  - A Estrura 
- Controle de 

Saiba mais em [Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
Saiba mais em [Dev](https://dev.to/acaverna/lacos-de-repeticao-em-javascript-50hj)

## Funções

- Functions declaration (Função de declaração)
```
function ola() {
    console.log('Olá')
}
ola()

```
- Functions expression (Função de expressão)
```
const ola = function() {
    console.log('Olá')
}
ola()
```
- Arrow Functions (Função de flecha)
```
const ola = (nome) => `Olá ${nome}`
```

Saiba mais em [Blog Matheus Castigioni](https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript/
)

## Propriedades e Métodos


Saiba mais em [Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript-pt)

## Classes e Objetos

Saiba mais em [freeCodeCamp](https://www.freecodecamp.org/portuguese/news/programacao-orientada-a-objetos-em-javascript-explicada-com-exemplos/)