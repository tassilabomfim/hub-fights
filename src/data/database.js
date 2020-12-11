const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
//const DB_URL = process.env.DB_URL

// const DB_URL = "mongodb://localhost:27017/hub-fights" // verificar
const connect = () => {
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(process.env.DB_URL, { 
        useNewUrlParser: true, 
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro de conexão com o banco de dados.'))
    connection.once('open', () => console.log('Conexão realizada com sucesso com o banco de dados - MongoDB!'))
}

module.exports = { connect }

//arquivo Repository(database) cria a conexão com nosso banco de dados, nesse caso o MongoDB