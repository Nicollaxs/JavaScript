//para proteger variaveis de ir para o git
require('dotenv').config();
const express = require('express')
const app = express()

const mongoose = require('mongoose')

//Conexão com o banco de dados
mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    app.emit('pronto')
}).catch((e)=>{
    console.log(e)
})

// IMPORTANTE : importando middlwares
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middlewares.js')


//Não precisa saber disso
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname,'public')))

//acesso a dados dentro do tamplete
app.set('views',path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')

//nossos proprios middlewares
app.use(meuMiddleware)
app.use(routes)

app.on('pronto',()=>{
    app.listen(3000,()=>{
        console.log('servidor funcionando : http://localhost:3000/')
    })
})
