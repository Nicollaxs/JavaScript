const fs = require('fs').promises //dependencia importante para manipulação de arquivos
const path = require('path')

// fs.readdir(path.resolve(__dirname))
// .then(files=>console.log(files)).catch(e=>console.log(e))
readdir('/home/nicollas/projetos_de_estudo/Estudo-JavaScript/NODE')
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const file = await fs.readdir(path.resolve(rootDir))
    walk(file,rootDir)
}

async function walk(files,rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir,file)
        const stats = await fs.stat(fileFullPath)
        if(stats.isDirectory())
            readdir(fileFullPath)
        console.log(file,stats.isDirectory())
    }
}