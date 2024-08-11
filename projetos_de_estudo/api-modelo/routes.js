const express = require('express')
const route = express.Router();
const users = require('./controllers/usersControllers')


route.get('/',(req,res)=>{
    res.send('Server funcionando !')
})

route.get('/users',users.pegarUsuarios)

route.post('/users',users.novoUsuario)

route.delete('/users',users.deletarUsuario)

route.patch('/users',users.atualizarUsuario)

module.exports = route

