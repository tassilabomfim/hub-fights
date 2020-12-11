const dotenv = require('dotenv')


const app = require('./src/app')
const PORT = process.env.PORT

dotenv.config();

app.listen(PORT, () => {
    console.log(`Servidor do Hub Fight's rodando em http://localhost:${PORT}`)
})