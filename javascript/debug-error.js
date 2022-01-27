/*Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

const letras = ["a", "b", "c", "d", "e"];

function teste(array, number){
    try {
        if (!array || !number) throw new ReferenceError("Envie todos os parâmetros");
        if (typeof array !== 'object') throw new TypeError("O primeiro parâmetro deve ser um objeto");
        if (typeof number !== 'number') throw new TypeError("O segundo parâmetro deve ser um número");
        if (array.length !== number) throw new RangeError(`O tamanho do array [${array}] deve ser igual a ${number}`);
    
        return "Deu certo!";
    }
    catch (error) {
        //console.log(error);
        if (error instanceof ReferenceError){
            console.log("Erro de parâmetro");
            console.log(error.message);
            console.log(error.name);
            console.log(error.stack);
        }
        else if (error instanceof TypeError){
            console.log("Erro de tipo");
            console.log(error.message);
            console.log(error.name);
            console.log(error.stack);
        }
        else if (error instanceof RangeError){
            console.log("Erro de tamanho");
            console.log(error.message);
            console.log(error.name);
            console.log(error.stack);
        }
        else {
            console.log(`Erro não esperado: ${error}`);
        }
    }
}

console.log(teste(letras, 5));