const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crowdfundingSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //  tipo de dado de id, dentro do mongoose
        auto: true,
        required: true
    },
    id_fighter: { // Verificar
        type: Schema.Types.ObjectId,
        ref: "idFighter",
        required: true
    },
    fighterName: {
        type: String,
        required: true,
        unique: true //nome não se repete
    },
    crowdfundingData: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    valueTotal: {
        type: Number,
        required: true
    }
})

const crowdfundingCollections = mongoose.model('crowdfunding', crowdfundingSchema)

module.exports = crowdfundingCollections