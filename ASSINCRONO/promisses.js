//Quando a gente trabalha na internet a gente usa recursos que não sabe muito bem
//quando essas respostas vão chegar. Então é usado promessas
//é utilizado para substituir funcoes callback
function rand(min,max){
    min*=1000
    max*=1000
    return Math.floor(Math.random()*(max-min)+min)
}
function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') reject('Bad Value !')
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })
}

esperaAi('Conexao com o BANCO DE DADOS', rand(1,3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando DADOS DO BANCOS', rand(1,3))
}).then(resposta=>{
    console.log(resposta)
    return esperaAi(2222, rand(1,3))
}).then((resposta) => {
    console.log(resposta)
}).catch(e=>{
    console.log('ERRO :',e)
})
// esperaAi('Frase2', rand(1,3))
// esperaAi('Frase3', rand(1,3))

console.log('Isso vai ser exibido antes de qualquer promisse ! ')