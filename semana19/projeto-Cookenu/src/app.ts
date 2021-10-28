//Importação do Express e setup do mesmo, para que o server responda as Requisições
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log(`Server is running on port 3003`)
})

export default app