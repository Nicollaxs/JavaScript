const express = require('express')
const app = express()
const routes = require('./routes')
app.use(express.urlencoded({extended:true}))


//Para você acessar as rotas do server
app.use(routes)

app.listen(3000,()=>{
    console.log('servidor funcionando : http://localhost:3000/')
})