//o arquivo routes serve para gerenciar suas rotas do servidor
//dividir responsabilidade para não ficar tudo em 1 unico arquivo
const express = require('express')
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

//rotas da home
route.get('/',homeController.paginaInicial)
route.post('/',homeController.trataPost)

//Rotas de contato
route.get('/contato',contatoController.obterContato)

module.exports = route