//duas maneiras de criar
const pessoa = {
    nome : 'Nicollas', //nome é uma chave -- 'Nicollas' é um valor
    idade : 21
}

const pessoa1 = new Object()
pessoa1.nome = 'Gabriel'
pessoa1.idade = 20
pessoa1.falarNome = function(){
    return `${this.nome} está falando seu nome`
}
pessoa1.getDataNascimento= function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}


//console.log("Data Nascimento:", pessoa1.getDataNascimento())

//duas maneiras de acessar
//---console.log(pessoa.nome)
//---console.log(pessoa['nome'])


//para deletar 
delete pessoa.nome

//para ver todas as chaves do objeto 
for(let chave in pessoa1)
    console.log(chave)
