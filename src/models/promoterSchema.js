const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promoterSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //  tipo de dado de id, dentro do mongoose
        ref: "idPromoter",
        auto: true,
        required: true
    }, 
    promoterName: {
        type: String,
        required: true,
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
    }
})

const promotersCollections = mongoose.model('promoter', promoterSchema)

module.exports = promotersCollections