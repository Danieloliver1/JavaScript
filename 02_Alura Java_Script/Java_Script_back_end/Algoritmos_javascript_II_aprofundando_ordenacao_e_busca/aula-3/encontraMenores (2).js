
const listaLivros = require('./array')

function encontraMenores(pivo, array){

    let menores = 0;

    for(let atual = 0; atual < array.length; atual++){

        let produtoAtual = array[atual]
        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    trocaLugar(array,array.indexOf(pivo),menores)
    return array
}



function trocaLugar(array, de, para){

    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
    

}

// Esta fun��o tem como objetivo de pegar array e dividir ao meio para escolher uma posi��o que venha ser o piv�
function divideNoPivo(array){
    let pivo = array[Math.floor(array.length / 2)];
    console.log(pivo)
    encontraMenores(pivo,array);

    let valoresMenores = 0;


    // pegando pocis�o que � menor que o pivo e passando para antes dele instanciando a fun��o trocaLugar
    for(let analisando = 0; analisando < array.length; analisando++){

        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }


    return array;
}

//console.log(encontraMenores(listaLivros[2],listaLivros))

//console.log(divideNoPivo(listaLivros))

module.exports = trocaLugar;