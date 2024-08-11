//Na classe modelo você precisa ter basicamente
//Um schema e um model 

const mongoose = require('mongoose')

//Schema
const userSchema = new mongoose.Schema({
    nome : {
        type:  String,
        required : true
      } ,
    idade : {
        type : Number,
        required : true
    },
    criado : {
        type : Date,
        default : Date.now()
    }
})

//Model
const User = mongoose.model('User',userSchema)

module.exports = User