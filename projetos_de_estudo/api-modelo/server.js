require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./routes')
const bodyParser = require('body-parser');

// app.use(express.json())
// app.use(route)

// app.listen(3000,()=>{
//     console.log('Server rodando : http://localhost:3000/')
// })

// Configuração para parsing de JSON
app.use(bodyParser.json());
// Configuração para parsing de dados URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    app.emit('#'),
    console.log('Conexão com o banco de dados realizada !')
}).catch(e=>console.log(e))

app.use(route)

app.on('#',()=>{
    app.listen(3000,()=>{
        console.log('Server rodando : http://localhost:3000/')
    })
})