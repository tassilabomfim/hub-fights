const express = require('express')
const router = express.Router() //instanciando as rotas

router.get('/', function (req, res){
    console.log("Acessando o HUB FIGHT's - version: '1.0.0'")
    res.status(200).send({
        titulo: "Hub Fight's",
        descrição: "Primeira plataforma marketplace voltada para o esporte de Artes Marciais- Conectando a nível global, Promotores de Eventos, Atletas de MMA e Apoiadores de Financiamento Colaborativo.",
        version: '1.0.0'
    })
}) //criando a rota principal

module.exports = router