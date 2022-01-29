// Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.
// Saída
// Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

var N = parseInt(13);
for ( let i = 1; i <= 10000; i++ ) {
	if ( i % N === 2) console.log(i);
}