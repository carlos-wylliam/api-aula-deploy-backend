require('dotenv').config()
const express = require('express')
const knex = require('./conexao/conexao')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async ( req, res )=>{
    try {
        const teste = await knex('carros')
        return res.json(teste)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({mensagem: "Erro interno no servidor"})
    }
})

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Servidor em pé na porta ${port}`))