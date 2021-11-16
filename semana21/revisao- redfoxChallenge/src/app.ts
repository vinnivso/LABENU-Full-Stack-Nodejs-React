import express from "express"
import cors from "cors"
import net from "net"

export const app: express.Express = express()
app.use(express.json()) //Lembrando que esse comando é um middleware, transformando os códigos que vem json em um objeto.
app.use(cors()) //Fazemos com que qualquer frontend, possa acessar nosso backend.

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as net.AddressInfo;
    console.log(`Server is running on http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server`)
  }
})