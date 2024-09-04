const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


//metodo reduce  soma dentro de uma lista

function calculaMedia(notaDaSala){
    somaDasNotas = notaDaSala.reduce((acumulador, nota) => acumulador + nota, 0);
    const media  = somaDasNotas / notaDaSala.length;
    return media;
}

// function calculaMedia(notaDaSala){
//     somaDasNotas = notaDaSala.reduce((acumulador, nota) => {return acumulador + nota;}, 0)
//     const media  = somaDasNotas / notaDaSala.length;
//     return media;
// }


console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));




// Durante a aula trabalhamos com o m�todo reduce() para �reduzir� uma lista de n�meros para um �nico valor.
// Este m�todo trabalha com par�metros um pouco diferentes dos outros que vimos durante o curso. Por isso,
// vamos destrinchar o exemplo da aula para entender melhor as partes do c�digo.
// Em seu editor, crie um arquivo index.js e execute o seguinte c�digo:

// const numeros = [43, 50, 65, 12]
// const soma = numeros.reduce((acc, atual) => atual + acc, 0)
// console.log(soma) //170

// O c�digo acima � muito parecido com o que foi feito durante a aula. � importante notar que:
//     O m�todo reduce() est� trabalhando com dois par�metros. 
//     O primeiro � a fun��o callback obrigat�ria para retornar o c�lculo e o segundo par�metro � um n�mero que representa o valor inicial do acumulador � no caso, 0.
//     A fun��o callback foi escrita diretamente dentro do reduce(), e esta fun��o tamb�m est� recebendo dois par�metros, ambos obrigat�rios: o valor acumulado e o valor atual.
//     A fun��o callback foi escrita na forma de arrow function; nesse caso, quando s� temos uma linha de instru��o dentro da fun��o (atual + acc) n�o precisamos usar chaves e nem da palavra-chave return.
//     Caso voc� tenha mais de uma linha de instru��o dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necess�rios.

// Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do c�digo:

// const soma = numeros.reduce(function (acc, atual) {
//  return atual + acc
// }, 0)

// Vendo o c�digo acima, percebe-se melhor onde come�am e terminam cada um dos par�metros do reduce():
//  o primeiro par�metro, uma fun��o e o segundo, um n�mero.
// Uma terceira forma de reescrever seria escrevendo a fun��o callback fora do reduce():

// function operacaoNumerica(acc, atual) {
//  return atual + acc
// }
// const soma = numeros.reduce(operacaoNumerica, 0)

// O reduce() roda o loop no array �por baixo dos panos�, executando para cada elemento a instru��o passada na fun��o operacaoNumerica.
// No dia a dia, a forma que utilizamos no v�deo � a mais usual. Por�m, durante seus estudos, voc� pode praticar da forma que achar mais clara.
// � importante lembrar que cada m�todo pode aceitar receber par�metros diferentes! Alguns s�o obrigat�rios, outros opcionais.
// Consulte sempre a documenta��o da linguagem.
