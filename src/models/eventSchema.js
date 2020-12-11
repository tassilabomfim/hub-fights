const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //  tipo de dado de id, dentro do mongoose
        auto: true,
        required: true
    },
    eventName: {
        type: String,
        required: true,
        unique: true //nome não se repete
    },
    eventData: {
        type: Date,
        required: true
    },
    opportunityFight: {
        type: String,
        required: false
    },
    id_promoter: { // Verificar
        type: Schema.Types.ObjectId,
        ref: "idPromoter",
        required: true
    } 

})

const eventsCollections = mongoose.model('event', eventSchema)

module.exports = eventsCollections