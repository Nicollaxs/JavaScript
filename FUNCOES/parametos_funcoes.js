// arguments que sustenta todos os argumentos enviados
function funcao([valor1,valor2,valor3]){
    
    console.log(valor1,valor2,valor3)
}

funcao(['Nicollas','Gabriel',21])

//objeto de parametro

function funcao({nome, sobrenome, idade}){
    
    console.log(nome,sobrenome,idade)
}

funcao({nome : 'Nicollas', sobrenome :'Teste', idade:20})

//Arguments
function funcao(){
    let total = 0;

for(let argumento of arguments)
    total += argumento
}

//dessa maneira você pode colocar quantos quiser
function teste(...varios){
    console.log(varios)
}

