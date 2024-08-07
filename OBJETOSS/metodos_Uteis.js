//Metodos uteis para objetos

//Object.values
//Objetc.entries
//Object.assign(des,any)
//Object.getOwnPropertyDecriptor(o,'prop)

//Uma maneira de copiar objetos
//Dessa maneira não apontara pro mesmo endereço de memoria igual o caneca = produto
const produto = {nome : 'Caneca',preco:1.8}
const caneca = {...produto}

//Esse metodo Keys te mostra as chaves do produto 
//produto.keys()

//Se você quer que o seu objeto não seja alterado
Object.freeze(produto)

//ObjectOwnPropertyDescriptor(produto,'nome')
//isso vai retornar as propriedades da chave

//Se você quiser ler somente os valores e retorna em array
console.log(Object.entries(produto))





