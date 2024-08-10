//1° maneira de importar
const app = require('./mod1.js')

//2° maneira de importar
const {nome, sobrenome,falaNome,nomeCompleto} = require('./mod1.js')

//modulos do node não precisa do caminho
const path = require('path')

//modulo axios
const axios = require('axios')

const {Pessoa} = require('./pessoa.js')

const p1 = new Pessoa('Luiz','12')
console.log(p1)
console.log(app)
console.log(app.nomeCompleto())