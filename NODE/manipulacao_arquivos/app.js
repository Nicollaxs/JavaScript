const fs = require('fs').promises
const path = require('path')
const caminhoDoArquivo = path.resolve(__dirname,'teste.json')
console.log("🚀 ~ caminhoDoArquivo:", caminhoDoArquivo)
const escrever = require('./escrever')
const ler = require('./ler')


async function escreveArquivo(caminho) {
    const write = await escrever(caminho)
}
async function leArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados) 
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    console.log(typeof dados)
    dados.forEach(element => {
        console.log(element)
    });
}
escreveArquivo(caminhoDoArquivo)
leArquivo(caminhoDoArquivo)