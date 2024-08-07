//Filter -> semrpe retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os numeros maiores que 10
const numeros = [3,45,7,23,8,5,2,4,6,11,15,18,90,43,67]

function callbackFilter(valor){
    return valor >10
}

//Parametros padrões do filter(valor,indice,array) não é nescessario usar, use somente se você quiser
//só lembre que o filter requer uma funcao de callback
const numerosFiltrados = numeros.filter(valor=> valor>10)
//console.log("🚀 ~ numerosFiltrados:", numerosFiltrados)

const pessoas = [
    { nome : 'Luiz',idade :18 },
    { nome : 'Maria',idade :41 },
    { nome : 'Fernando',idade :32 },
    { nome : 'Mateus',idade :6 },
    { nome : 'Gabriel',idade :23 },
    { nome : 'Rosana',idade :56 }
]

const pessoasComNomeGrande = pessoas.filter(value=> value.nome.length>5)

console.log("🚀 ~ pessoasComNomeGrande:", pessoasComNomeGrande)


