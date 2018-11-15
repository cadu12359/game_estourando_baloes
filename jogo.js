//variavel que armazena a chamada da função time out
var timerId = null;

function iniciaJogo(){

	var url = window.location.search;
	var nivel_jogo = url.replace("?", "");

	var tempo_segundos = 0;

	if (nivel_jogo == 1) {
		tempo_segundos = 120;
	}

	if (nivel_jogo == 2) {
		tempo_segundos = 60;
	}

	if (nivel_jogo == 3) {
		tempo_segundos = 30;
	}

	//inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidade de baloes
	var qtde_baloes = 15;
	cria_baloes(qtde_baloes);

	//imprimir qdte baloes inteiros 
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	document.getElementById('baloes_estourador').innerHTML = 0;

	contagem_tempo(5);
	
}

function contagem_tempo(segundos){

	segundos = segundos - 1;

	if (segundos == -1){
		clearTimeout(timerId);
		return false;
	}

	document.getElementById('cronometro').innerHTML = segundos;

	timerId = setTimeout("contagem_tempo("+segundos+")", 1000);
}

function cria_baloes(qtde_baloes){

	for (var i = 1; i <= qtde_baloes; i++) {

		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';

		document.getElementById('cenario').appendChild(balao);
	}

}