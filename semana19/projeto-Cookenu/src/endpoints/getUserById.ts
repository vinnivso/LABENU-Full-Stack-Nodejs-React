import express from 'express'
import connection from '../connection'
import generateAuthenticator from '../services/generateAuthenticator'
import { userTableName } from '../types'

export default async function getUserById(req:express.Request, res: express.Response):Promise<void>{
  try {
    const token:string = req.headers.authorization!
    const tokenData = new generateAuthenticator().getTokenData(token) //Confirmando se o token está válido.
    if(!tokenData) {
      res.statusCode = 401 //Unauthorized
      throw new Error(`Confira se o token está válido ou se o mesmo foi repassado na chave authorization do headers / Unathorized.`)
    }
    
    const [user] = await connection(userTableName)
      .where({id:req.params.id}) //Repare que na minha requisição, demonstrada no index.ts, como: "app.get('/users/:id/profile')", estou acessando a "id" por path.params, logo, para acessar aqui, também devo passar o parâmetro de acesso. req.params.id.
    // const {id, name, email} = user //Nesse caso, utilizei a desestruturação somente pelo motivo do typescript no strict mode ficar impedir que eu utilize o user.id, user.name e user.email.
    // res.send({id, name, email}) //C/ desestruturação.
    if(!user) {
      res.statusCode = 404 //Unauthorized
      throw new Error(`User not found.`)
    }
    res.send({id: user.id, name: user.name, email: user.email}) //S/ desestruturação.

  } catch (error:any) {
    console.error(error.message)
    if(res.statusCode === 200) {
      res.status(500).send(`Internal server error.`)
    } else {
      res.send(error.message)
    }
  }
}