
// // let x = "";
// // console.log(x);
// // x="oi";

// //1-declara fun��o
// function imprimeTexto(texto){
//     console.log(texto)

// }

// // 2-imprime fun��o
// var valor = 'Ola mundo'
// imprimeTexto(valor)


// function soma(){
//     const resultado = 2+2;
//     return resultado;
// };


// console.log(soma())

// uma fun��o dentro de outra fun��o

// imprimeTexto(soma())

//Parametros x argumentos
// function nomeidade(nome,idade){
//     return `meu nome � ${nome} e minha idade � ${idade}`;
// }

// console.log(nomeidade(40,'Juliana'))

// function soma(num1, num2){
//     const resultado = num1 + num2;
//     return resultado;
// };

// function multiplica(num1, num2){
//     return num1 * num2;
// }



// console.log(multiplica(soma(2,6),soma(7,5)))

// function comParametro(param) {
//     console.log(param)
// }
// comParametro()


// express�es de fun��es 

// const soma = function(num1, num2){return num1 + num2}

// console.log(soma(5,2))

//direfen�a principal

// da para execultar a fun��o antes de declara mais n�o da para fazer isso na express�es de fun��es
//a express�es de fun��es se comporta como variaveis.
// console.log(apresentar())

// function apresentar(){
//     return 'ola';
// }

// console.log(soma(5,2))
// const soma = function(num1, num2){return num1 + num2}


// terceira forma de criar fun��o, Arrow-function 

// const apresentarArrow = nome => `meu nome � ${nome}`;

// const soma = (num1, num2) => num1 + num2;

// console.log(soma(2,3))
// console.log(apresentarArrow('daniel'))

// //Arrow function com + de 1 linha de instru��o

// const somanumerospequenos = (num1, num2) => {
//   if(num1 >10 || num2){
//     return "somente n�meros de 1 a 9"
//   }else{
//     return num1 + num2;
//   }
// }




const soma = (num1,num2,num3) => num1+ num2+num3;

var n1 = 3;
var n2 = 6;
var n3 = 8;

// function media(){
//  return soma(n1,n2,n3)/3
// }

const media = () => soma(n1,n2,n3)/3;

console.log(media())