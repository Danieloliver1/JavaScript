const listaLivros = require('./arrayOrdenado.js')



function busca(array, de, ate, valorBuscado){
    console.log('de, ate', de, ate)
    const meio = Math.floor((de + ate) /2);
    const atual = array[meio];

    if(de > ate){
        return -1;
    }

    if (valorBuscado === atual.preco){
        return meio;
    }
    if (valorBuscado < atual.preco){
        return busca(array, de, meio - 1, valorBuscado);

    }

    if (valorBuscado > atual.preco){
        return busca(array,  meio + 1, ate, valorBuscado);

    }

}

console.log(busca(listaLivros, 0, listaLivros.length - 1,60))





// A pilha de chamadas

// Em programa��o, uma pilha � uma estrutura de dados onde o �ltimo item adicionado � o primeiro a ser removido - como uma pilha de livros no mundo real, por exemplo. Tamb�m nos referimos como pilha (ou stack) a estrutura onde est�o �empilhados� os processos que est�o sendo executados em um programa.

// Nem todo interpretador ou linguagem de programa��o lida da mesma forma com os processos que devem ser executados por um programa. O NodeJS trabalha com o paradigma de programa��o orientada a eventos (event driven programming), e o gerenciamento dos processos ocorre atrav�s do que chamamos de loop de eventos.

// N�o vamos entrar em detalhes aqui sobre como ocorrem a entrada e a sa�da de processos deste loop e a forma como o Node trabalha com threads e programa��o ass�ncrona - s�o assuntos complexos o suficiente para terem seus pr�prios cursos. Por�m, vale mencionar aqui que, assim como em outras linguagens de programa��o, o JavaScript tamb�m trabalha com pilhas de chamadas. No NodeJS, esta pilha faz parte da estrutura do loop de eventos; quando uma fun��o � chamada por um programa ela entra na stack, ou seja, na pilha de execu��o, onde apenas um processo � executado por vez e o pr�ximo processo s� � executado ap�s a finaliza��o do processo atual.

// Esta pilha tem uma quantidade limitada de processos que podem ser empilhados (o que depende de muitos fatores, como mem�ria dispon�vel, arquitetura, etc); caso o interpretador n�o consiga limpar a pilha, ou seja, executar e finalizar os processos/fun��es que est�o empilhados, ao atingir o limite o programa cai no chamado erro de estouro de pilha, tamb�m chamado de stack overflow (da� o nome do famoso f�rum de programa��o).

// Um dos motivos mais comuns para o estouro de pilha s�o justamente as chamadas recursivas onde o caso base (como vimos na atividade �Para Saber Mais� da aula 2) n�o existe ou n�o foi definido da forma correta. Sem o caso base, as fun��es recursivas n�o param de ser chamadas e v�o se empilhando na pilha de chamadas, at� que n�o haja mais recursos para processar o programa.

// No caso do exemplo visto durante a aula, o NodeJS retorna o erro RangeError: Maximum call stack size exceeded, ou �tamanho m�ximo da pilha de chamadas excedido� e encerra a execu��o.

// Por isso, � muito importante sempre testar as fun��es recursivas e definir quando interromper a recursividade.