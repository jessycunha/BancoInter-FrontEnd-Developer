/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20. */

var compare = function (a, b){
    if (a == b){
        console.log(`Os números ${a} e ${b} são iguais`);
    } else {
        console.log(`Os números ${a} e ${b} não são iguais`);
    }
    var soma = a + b;
    var dez;
    var vinte;
    soma > 10 ? dez = "maior" : dez = "menor";
    soma > 20 ? vinte = "maior" : vinte = "menor";
    console.log(`Sua soma é ${soma}, que é ${dez} que 10 e ${vinte} que 20".`);
} 

compare(5, 9);