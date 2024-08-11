const mongoose = require('mongoose')
const User = require('../models/Users')
module.exports.getUsuarios = (req, res) => {
    res.json(users)
}

//Usei promises com async
module.exports.pegarUsuarios = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}

// usei promises com then
module.exports.novoUsuario = (req, res) => {
    const user = req.body

    User.create(user).then(() => {
        res.status(201).json({
            message: 'usuario criado com sucesso',
            user: user
        })
    }).catch((err) => {
        res.status(500).json({
            error: err.message
        })
    })
}

module.exports.deletarUsuario = (req, res) => {
    const nome = req.body.nome


    User.findOne({ nome: nome }).then((user) => {
        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' })}

        return User.deleteOne({nome:nome}).then((result)=>{
            res.status(200).json({
                message : 'Usuario deletado com sucesso',
                user : user
            })
        }).catch((err)=>{
            res.status(500).json({
                erro : err.message
            })
        })
        })
}

module.exports.atualizarUsuario = (req,res)=>{
    const nome = req.body.nome
    const novosDados = req.body.novosDados

    if(!nome || !novosDados){
        res.status(404).json({
            error : 'Envie os um json com o nome do usuario e os novos dados (nome,idade)'
        })
    }
    User.findOneAndUpdate({nome:nome},{$set:novosDados},{new:true})
    .then((user)=>{
        if(!user)
            res.status(400).json({error:'Usuário não foi encontrado'})

        res.status(200).json({
            message : 'Usuário atualizado',
            user : user
        })

    }).catch( err=> res.json({error : err.message}))
        
}