const express = require('express')
const app = express()

//CRUD -: CREATE, READ, UPLOAD, DELETE
//         POST    GET   PUT    DELETE

//o que são rotas ?
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get('/',(req,res)=>{
    res.send('Server funcionando!')
})

app.listen(3000,()=>{
    console.log('Server funcionando : http://localhost:3000/')
})