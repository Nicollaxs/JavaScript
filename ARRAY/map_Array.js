//Map -> sempre retorna o mesmo array. Ele utiliza os valores originais para alterar o array

// dobre os valores
const numeros = [3,45,7,23,8,5,2,4,6,11,15,18,90,43,67]

function numerosEmDobro(valor){
    return valor*2
}

//Parametros padrões do map(valor,indice,array) não é nescessario usar, use somente se você quiser
//só lembre que o map requer uma funcao de callback
const mapeados = numeros.map(valor=> valor*2)
//console.log("🚀 ~ mapeados:", mapeados)

const pessoas = [
    { nome : 'Luiz',idade :18 },
    { nome : 'Maria',idade :41 },
    { nome : 'Fernando',idade :32 },
    { nome : 'Mateus',idade :6 },
    { nome : 'Gabriel',idade :23 },
    { nome : 'Rosana',idade :56 }
]

//pega o nome
const nomes = copia.map(value=> value.nome)

//deleta idade
const idades = pessoas.map(obj=> {
   // delete obj.nome
   // return obj
    return {idade : obj.idade}
}
)
//adiciona ids
const comIds = pessoas.map((obj,indice)=>{
    const newObj = {...pessoas} // dessa maneira você não altera o array original
    newobj.id = indice; 
    obj.id = indice;
    return obj
})
console.log("🚀 ~ comIds ~ comIds:", comIds)
