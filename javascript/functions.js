/* Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */

const notas = [
    {
        aluno: "A",
        nota: 6},
    {
        aluno: "B",
        nota: 4},
    {
        aluno: "C",
        nota: 8},
    {
        aluno: "D",
        nota: 5},
    {
        aluno: "E",
        nota: 10},
];
const media = 6;

function array (a, b){
    let aprovados = [];

    // SEM OBJECT DESTRUCTURING
    // for(i = 0; i < a.length; i++){
    //     if(a[i].nota >= b){
    //         aprovados.push(a[i].aluno);
    //     }
    // }

    // COM OBJECT DESTRUCTURING
    for(i = 0; i < a.length; i++){
        const {nota, aluno} = a[i];
        if(nota >= b){
            aprovados.push(aluno);
        }
    }
    console.log(aprovados);
};

array(notas, media);


/* Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.
Crie seus próprios objetos para esta atividade! */

const pessoa = {
    nome: "Jessica",
    ano: 1989,
    calculaIdade: function(atual){
        console.log(atual - this.ano);
    }
}
pessoa.calculaIdade(2022);


function nascimento(){
    console.log(this.ano);
}
nascimento.call(pessoa);


function maisNova(anoAtual){
    console.log(anoAtual - 10 - this.ano);
}
maisNova.apply(pessoa, [2022]);
