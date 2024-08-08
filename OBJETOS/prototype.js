function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    //this.nomeComleto = () => this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.estouAqui = 'Teste'

// exemplo
//é um objeto que já vem na funcao é mais interessante usar isso ao inves de funcao dentro do objeto
//Observe o metodo que está comentado dentro da funcao. Isso aqui substitui 
//Isso vai melhorar a performace
Pessoa.prototype.nomecompleto = ()=> this.nome + ' ' + this.sobrenome

//Manipulando Prototype -----------------------------------------

//Para obter um prototype de um Obj
//Object.getPrototypeOf(objA)

//Coloquei o objA para ser prototypo do objB
const objA = {
    nome : 'A'
    //__proto__:Object.prototype
}

const objB = {
    nome : 'b'
    //__proto__: ObjA
}

Object.setPrototypeOf(objB,objA)

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camiseta', 50)
p1.desconto(5)
//p1.aumento(5)
console.log(p1)

//Você pode criar um objeto dessa maneira e copiar o prototype do de cima
const p2 = {
    nome : 'Caneca',
    preco : 10
}

Object.setPrototypeOf(p2,Produto.prototype)


