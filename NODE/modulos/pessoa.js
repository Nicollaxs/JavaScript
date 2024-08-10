class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

    const teste = 'Qualquer coisa'
    const nome = 'a'
const trabalho = 'b'

//Para exportar a classe
exports.Pessoa = Pessoa;

//Para exportar de maneira mais facil 
module.exports = {teste,nome,trabalho}
