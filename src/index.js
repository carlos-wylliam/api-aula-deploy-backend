require('dotenv').config()
const express = require('express')
const knex = require('knex')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', async ( req, res )=>{
    try {
        const carros = await knex('carros')
        console.log(carros)
        return res.json(carros)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({mensagem: "Erro interno no servidor"})
    }
})

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Servidor em pé na porta ${port}`))