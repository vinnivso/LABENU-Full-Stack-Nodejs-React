import express, {Express} from "express"
import cors from "cors"

const app: Express = express() //Tipagem do app para Express

app.use(express.json()) //Essa linha faz com que o Express interprete um body, caso contrário ele não irá reconhecer, dando como undefined.
app.use(cors()) //Linha adicionada para evitar erro de requisição, entre banco de dados e front.
app.listen(3003, () => {console.log("Server ready!")}) //Linha para adiiconar a execução na porta 3003, lembrando que o React.js roda na porta 3000.

export default app