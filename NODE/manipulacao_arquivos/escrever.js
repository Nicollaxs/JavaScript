const fs = require('fs').promises
const path = require ('path')

const caminhoArquivo = path.resolve(__dirname,'teste.json')

const pessoas = [
    {nome :'Joao'},
    {nome :'Gabriel'},
    {nome :'Nicollas'},
    {nome :'Pedro'},
    {nome :'Ana'}
]
const json = JSON.stringify(pessoas,'',2)

                //caminho     //frase   //apagar tudo que tiver dentro do arquivo
 //fs.writeFile(caminhoArquivo,pessoa.nome + '\n',{flag:'a'})


module.exports = (caminhoArquivo)=>{
    fs.writeFile(caminhoArquivo,json,{flag:'w'})
}

