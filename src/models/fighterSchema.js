const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fighterSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //  tipo de dado de id, dentro do mongoose
        ref: "idFighter",
        auto: true,
        required: true
        }, 
    fighterName: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true
    },
    sherdogLink: {
        type: String,
        required: true,
        unique: true //nome não se repete
    },
    emailAddress: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    passoword: {
        type: String,
        required: true,
        select: false
    },
    phoneNumber: {
        type: Number,
        required: true
    }
})

const fightersCollection = mongoose.model('fighter', fighterSchema)

module.exports = fightersCollection


  // genero: {
    //     type: String, enum: ["Feminino", "Masculino", "Não binário", "Gênero fluido"],
    //     require: true
    // },
    // peso:{
    //     type: Number, enum: [50,60,70], 
    //     require: true
    // }  
    