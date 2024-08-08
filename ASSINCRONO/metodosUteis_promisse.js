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
        setTimeout(()=>{
            if(typeof msg !== 'string') {
                reject('Bad Value !')
                return
            }
            resolve(msg.toUpperCase() + '- Passei na promisse')
            return
        },tempo)
    })
}

const promises = [
    esperaAi('Promise 1',3000),
    esperaAi('Promise 2',500),
    esperaAi('Promise 3',1000)]

//Promise.all -> executa todas as promesssas

Promise.all(promises).then(function(valor){
    console.log(valor)
}).catch(function(erro){
    console.log(erro)
})

//Promise.race -> executa e retorna a primeira promessa resolvida ou reijerada

Promise.race(promises).then(function(valor){
    console.log(valor)
}).catch(function(error){
    console.log(error)
})

//Promise.resolve  só substituir // Promise.reject
function baixaPagina(){
    const emCache = true

    if(emCache){
        return Promise.reject('Pagina em cache')
        //return Promise.resolve('Pagina em cache')
    }else{
        return esperaAi('Baixei pagina',3000)
    }
}

baixaPagina().then(dadosPagina=>{
    console.log(dadosPagina)
}).catch(e=>console.log(e))
// Promise.reject