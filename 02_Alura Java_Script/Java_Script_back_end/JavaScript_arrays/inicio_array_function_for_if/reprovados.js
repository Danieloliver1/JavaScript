const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];

const medias  = [7,4.5,8,7.5];


//usando filter

//retorna uma nova array 


// retorna booleano
// _ � um paramentro que n�o precisa ser utilizado ent�o � um paramentro anonimo. 
//porem ele � necessario para poder utilizar o segundo parametro que � o indice.
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);
