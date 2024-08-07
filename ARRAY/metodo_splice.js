//                -5      -4     -3       -2        -1   
//                 0      1       2        3         4
const nomes = ['Maria','Joao','Eduardo','Gabriel','Julia']

//nomes.splice(indice atual, Quantidade para deletar apartir do indice atual, adicionar antes do indice)


//Apaga o numero maximo
//nomes.splice(1,Number.MAX_VALUE)
//console.log(nomes)

//Simulando o shift
//nomes.splice(0,1)
console.log(nomes)

//simulando o pop
//nomes.splice(4,1)
console.log(nomes)

//simulando o push / elemento adicionando no final do array
nomes.splice(nomes.length,0,'Nicollas')
console.log(nomes)

console.log(nomes[5])