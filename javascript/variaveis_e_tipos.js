/* Variáveis e Tipos
Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/

var palavra = "raio";
var word = palavra.split('');
var inverso = palavra.split('').reverse();

if(inverso === palavra){
    console.log(`${inverso} é um palíndromo de ${word}`);
}else{
    console.log(`${inverso} não é um palíndromo de ${word}`);
}

/*Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]
Input -> []
Output -> -1 */

var array = [1, 3, 4, 6, 80, 33, 23, 90];

for (i = 0; i < array.length; i++){
    if ((array[i] % 2) === 0){
        array.splice(i, 1, 0);
    }
}
console.log(array);





