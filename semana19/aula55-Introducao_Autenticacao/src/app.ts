import express, {Express, Request, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net"
import generateId from "./services/GenerateId"
import createUser from "./endpoints/createUser"
import generateToken from "./services/GenerateToken"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3303, () => {
  if(server){
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://location:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

export default app