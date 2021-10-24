import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

//Setando que o servidor vai rodar em http, ao invés de app.
const serverHttp = http.createServer(app) //Rodando o servidor em http, ao invés de app.

export {serverHttp}