//Produto - > aumento, desconto
//Camisa = Cor  caneca =  material 
function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}

Produto.prototype.desconto = function(desconto){
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){
    Produto.call(this,nome,preco)
    this.cor = cor
}

//Crie um produto com Object.create e coloque o prototype pai no parametro
Camiseta.prototype = Object.create(Produto.prototype)
//Você tem que colocar um construtor
Camiseta.prototype.constructor = Camiseta

const camiseta = new Camiseta('regata', 7.5,'Preta')
// camiseta.aumento(10)
// console.log(camiseta)

function Caneca(nome,preco,material){
    Produto.call(this,nome,preco)
    this.material = material
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Personalizada', 20, 'vidro')
console.log(caneca)

