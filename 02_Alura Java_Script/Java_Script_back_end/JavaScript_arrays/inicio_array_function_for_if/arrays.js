

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

const notas = [10, 6.5, 8, 7.5]

//.length conta a quantidade da lista

//const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media)
 

//adicionando dados dentro da array fun��o push()

notas.push(7);

// console.log(notas);

// deletando dados dentro da array fun��o pop() deletando por ultimo dado

notas.pop()


// console.log(notas);

// Junta dois arrays concat()

array = [3,6]


const novoarray = notas.concat(array)

// console.log(novoarray)

//filter() Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma fun��o escrita por n�s.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// alterand com splice()
// const alunos = [
//     'Jo�o', 
//     'Juliana', 
//     'Ana',
//     'Caio',
//     'Lara',
//     'Marjorie', 
//     'Guilherme', 
//     'Aline', 
//     'Fabiana', 
//     'Andre', 
//     'Carlos', 
//     'Paulo', 
//     'Bia', 
//     'Vivian', 
//     'Isabela', 
//     'Vin�cius', 
//     'Renan', 
//     'Renata', 
//     'Daisy', 
//     'Camilo'
// ]

// //especificando os dados inicio e fim pela posi��o
// const sala1 = alunos.slice(0,10);
// const sala2 = alunos.slice(10);

// console.log(sala1);
// console.log(sala2);

//especificando os dados inicio e fim pela posi��o
// const sala3 = alunos.slice(0,alunos.length / 2);
// const sala4 = alunos.slice(alunos.lengt / 2);
// console.log(sala3);
// console.log(sala4);

const nomes = [
    "Jo�o",
     "Ana",
      "Caio",
       "Lara",
        "Marjorie",
         "Leo"];

//remove dados a partir da posi��o escolhida ou altera array original
//O splice � usado para adicionar e remover elementos de uma lista
nomes.splice(1, 2, "Rodrigo")

// console.log(nomes);

// juntando dados
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];


const salasUnificadas = salaJS.concat(salaPython);

//console.log(salasUnificadas)


const alunos = ["Jo�o", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listadealunosmedias = [alunos, medias];

//lista de duas dimes�es
// console.log(`A aluna da posi��o 1 da lista de alunos �: ${listadealunosmedias[0][1]}A nota dessa aluna �: ${listadealunosmedias[1][1]}`)

function exibeNomenota(aluno){
    if(listadealunosmedias[0].includes(aluno)){
        console.log(`${aluno} est� cadastrado!`)
    }else{
        console.log("Aluno n�o encontrado!")
    }
}

exibeNomenota("Jo�o")

