// Saída
// Imprima os N primeiros caracteres da citação de Søren Kierkegaard definida pelas letras que foram sublinhadas no enunciado deste problema. Preste atenção, pois nenhum espaço foi sublinhado — você é que deve adivinhar o número e a localização dos espaços na frase. A única linha da saída deve consistir apenas de letras maiúsculas e espaços e ser finalizada por fim de linha.

const citacao = 'life is not a problem to be soved';

function caracteres(n, frase){
	var retorno = '';
	if (n < frase.length) {
		for (let i = 0; i < n; i++){
			retorno = retorno + `${frase[i]}`;
	
		}
	} else {
		retorno = frase;
	}
	return retorno.toUpperCase();
}

console.log(caracteres(34, citacao));
