const express = require('express')
const app = express()


    //params = /vemAqui
    //query = /?vemAqui=valor1
    //body = quando tem um post na requisição

    
//Você precisa disso para poder pegar os corpos das req
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send(`
        <form action="/" method="POST">
        Nome : <input type="text" name="nome">
        <button>Enviar o form</button>
        </form>
        `)
})

//Quando você coloca o ? o parametro vira opcional
app.get('/teste/:idUsuarios?',(req,res)=>{

    // console.log(req.params)
    // console.log(req.query)
    res.send(req.params)
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(`Você me enviou o nome ${req.body.nome}`)
})

app.listen(3000,()=>{
    console.log('servidor funcionando : http://localhost:3000/')
})