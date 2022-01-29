// Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.
// Saída
// Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.
// Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a precisão adequadamente para que isso não ocorra.

var N = parseInt(6);
for ( let i = 1; i <= N; i++ ) {
	if ( i%2 == 0) console.log(`${i}^2 = ${i**2}`);
}