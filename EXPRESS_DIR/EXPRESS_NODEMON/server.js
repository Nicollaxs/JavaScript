const express = require('express')
const app = express()


//O Nodemon serve para atulaizar o projeto. Para baixar : npm install nodemon --save-dev
//atualize o packafe.json e coloque nodemon server.js no "start", e rode o projeto
//com npm start
app.get('/',(req,res)=>{
    res.send('Meu primeiro servidor')
})

app.listen(3000,()=>{
    console.log('servidor funcionando : http://localhost:3000/')
})