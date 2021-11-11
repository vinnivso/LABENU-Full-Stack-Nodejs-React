//Configuração/Setup do Servidor
import { serverHttp } from './app'
import net from 'net'

serverHttp.listen(process.env.PORT || 3003, () => {
  if(serverHttp) {
    const address = serverHttp.address() as net.AddressInfo
    console.log(`Server is running on port ${address.port}`)
  } else {
    console.error(`Failure upon starting server`)
  }
})