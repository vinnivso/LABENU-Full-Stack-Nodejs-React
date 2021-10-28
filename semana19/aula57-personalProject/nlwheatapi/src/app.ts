import "dotenv/config"
import express from "express"
import http from "http"
import cors from "cors"
import {Server} from "socket.io"
import { router } from "./routes"

const app = express()
app.use(cors())

const serverHttp = http.createServer(app) //Rodando o servidor em http, ao invés de app.
const io = new Server(serverHttp, {
  cors: {
    origin:"*"
  }
}) //Permite que nossos clientes possam se conectar, tanto com http, quando via websocket.
io.on("connection", socket => {
  console.log(`Usuário conectado no socket ${socket.id}`)
})

app.use(express.json()) //Com isso já resolvo o problema de o express não conseguir interpretar o body, sendo assim. Evitando o problema de desestruturação de "undefined".
app.use(router)

//Simulação de rota, do que o FRONT e MOBILE vão fazer.
app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`) //.redirect(), faz com que a aplicação somente redirecione. Além de que toda autenticação vai precisar de um client_id. Lembrando que para utilizar o "process.env" é necessário instalar o "dotvenv" na aplicação.
})

app.get("/signin/callback", (request, response) => {
  const {code} = request.query
  return response.json(code)
}) //Estou utilizando o próprio code que o GITHUB disponibilizou.

export {serverHttp, io}