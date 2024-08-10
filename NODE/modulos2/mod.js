// module.exports = function(x,y){
//     return x * y
// }


// é possivel importar classe
module.exports = class Cachorro{
    constructor(nome){
    this.nome=nome
    }

    latir(){
        console.log('Auauau')
    }
}

const path = require('path')

//dessa maneira me retorna o diretorio atual e manipular 
console.log(path.resolve(__dirname))