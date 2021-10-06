import express from 'express'
import cors from 'cors'

const app = express()//Armazenando o retorno de express na variável app.

app.use (express.json())//Permite que recebemos um body de nossa requisição em .json.

app.use(cors())//Permite a utilização do cors para evitar o famoso erro de CORS.

app.listen(3003, () => {
  console.log(`Sucesso Lovelace! O servidor está disponível em http://localhost:3003`)
})//Permite criarmos um servidor na porta 3003, poderia ser qualquer outra porta, mas fica a recomendação da 3003.

app.get('/test', (req: express.Request, res: express.Response) => {
  res.send("Teste bem sucedido")
})
app.get('/countries', (red: express.Request, res: express.Response) => {
  res.status(200).send(countries)
})