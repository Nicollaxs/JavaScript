//Quando a gente trabalha na internet a gente usa recursos que não sabe muito bem
//quando essas respostas vão chegar. Então é usado promessas
//é utilizado para substituir funcoes callback
function rand(min=0,max=3){
    min*=1000
    max*=1000
    return Math.floor(Math.random()*(max-min)+min)
}
function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string') {
                reject('BAD VALUE !')
                return
            }
            resolve(msg.toUpperCase() + '- Passei na promisse')
            return
        },tempo)
    })
}

// esperaAi('Fase 1', rand()).then((valor)=>{
//     console.log(valor)
//     return esperaAi('Fase 2',rand())
// }).then(fase=>{
//     console.log(fase)
//     return esperaAi('Fase 3',rand())
// }).then((fase)=>{
//     console.log(fase)
// }).catch(e=>console.log(e))


//O async vai permitir que você use "await" dentro de uma função e assim você pode 
//permitir esperar que euma ação seja realizada
async function executa(){
    try{
        const fase1 = await esperaAi('Fase 1',rand())
        console.log(fase1)
        const fase2 = await esperaAi(2,rand())
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3',rand())
        console.log(fase3)
     
        console.log('Terminamos na fase:',fase3)
    }catch(e){
        console.log(e)
    }
}

executa()

//estados da promisse : 
//pending -> pendente (se você não utiliza o await ela vai ficar nesse estado)
//fullfilled -> resolvida(sucesso)
//rejected -> rejeitada 