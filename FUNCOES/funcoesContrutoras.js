//Mais ou menos igual uma classe no java
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const p1 = new Pessoa('Nicollas','21')
console.log("🚀 ~ p1:", p1.nome)
console.log("🚀 ~ p1:", p1.idade)

//para travar um objeto e não permitir alterar os atributos dele
Object.freeze(p1)
