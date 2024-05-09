require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

//crate an express application
const server = express()

//use cors in express server
server.use(cors())
server.use(express.json())
server.use(router)

const PORT = 3000 || process.env

server.listen(PORT,()=>{
    console.log(`server started at PORT : ${PORT}`);
})

server.get('/',(req,res)=>{
    res.status(200).send('<h1 style="color:red"> Server Started and waiting for client request!!!<h1/>')
})
