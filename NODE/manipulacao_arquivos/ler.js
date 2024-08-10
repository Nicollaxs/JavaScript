const path = require('path')
const fs = require('fs').promises

const caminhoArquivo = path.resolve(__dirname,'..','teste.json')

//------------Para ler arquivos

// fs.readFile(caminhoArquivo,'utf8').then((valor)=>{
//     console.log(valor)
// }
// ).catch()

//------------ Para ler arquivos sem promise

// fs.readFile(caminhoArquivo,(err,data)=>{
//     if(err)
//         throw err
//     console.log(data)
// })

module.exports = (caminho)=>fs.readFile(caminho,'utf8')