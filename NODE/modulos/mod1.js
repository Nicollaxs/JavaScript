const nome = 'Nicollas'
const sobrenome = 'Gabriel'

function falaNome(){
    return nome + ' '+sobrenome
}

const nomeCompleto = () => nome +' '+sobrenome

//Maneiras de exportar 
module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome
module.exports.nomeCompleto = nomeCompleto
console.log(module.exports)

