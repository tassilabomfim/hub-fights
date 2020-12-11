const express = require('express') //importa o framework
const app = express() //criando instância do express
const bodyparser = require('body-parser') //importando conversão de corpo

const cors = require('cors') //importando o cors que é um desbloqueador de fornecimento dos dados

const database = require('./models/database')
database.connect()

const index = require('./routes/index')
const promoter = require('./routes/promoterRoute')
const fighter = require('./routes/fighterRoute')
const event = require('./routes/eventRoute')
const crowdfunding = require('./routes/crowdfundingRoute')

app.use(cors())
app.use(express.json())

app.use('/', index)
app.use('/user/promoter', promoter)
app.use('/user/fighter', fighter)
app.use('/event', event)
app.use('/crowdfunding', crowdfunding)

module.exports = app