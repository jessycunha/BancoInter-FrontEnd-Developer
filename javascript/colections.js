/* MAP
    map: chave, valor
    const myMap = new Map()
    myMap.set('banana', 'fruta'); Map(1) {'banana' => 'fruta'}
    myMap.get(banana); 'fruta'
    myMao.delete('banana'); true
    myMap.get('banana'); undefined
*/
/*
    Atividade 1: Maps
        Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
            Crie uma função getAdmins que recebe um Map;
            Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
            Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.
*/

function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Paula', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('João', 'User');
usuarios.set('Ana', 'Admin');

console.log(getAdmins(usuarios));
/* SET
    const myArray = [1,1,2,2,3,4,5,6,7,8,2,1];
    const mySet = new Set(myArray); [1,2,3,4,5,6,7,8]
    .add(); adicionar
    .has(); ver
    .delete(); deletar
*/
/*
    Atividade 2: Sets
        Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/
const numeros = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const unicos = new Set(array);
    return [...unicos];
}

console.log(valoresUnicos(numeros)); 