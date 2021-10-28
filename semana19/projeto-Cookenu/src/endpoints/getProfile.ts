import express from 'express'
import connection from '../connection'
import generateAuthenticator from '../services/generateAuthenticator'
import { userTableName } from '../types'

export default async function getProfile(req:express.Request, res:express.Response):Promise<void> {
  try {
    const token: string = req.headers.authorization!
    const tokenData = new generateAuthenticator().getTokenData(token)
    if(!tokenData) {
      res.statusCode = 401 //Unauthorized
      throw new Error(`Confira se o token está válido ou se o mesmo foi repassado na chave authorization do headers / Unathorized.`)
    }

    const [user] = await connection(userTableName) //Criando requisição para que as informações do profile sejam exibidas, com base no que foi armazenado no banco de dados. Para isso, será averiguado se existe ou não um token. (Ou seja, se a pessoa está ou não logada, podemos dizer assim.)
      .where({id:tokenData?.id}) //Coloquei o "?", para evitar aquele erro de "cannot find undefined from ...". Se existir tokenData.id, vai prosseguir.
    if(!user) {
      res.statusCode = 404 //Unauthorized
      throw new Error(`User not found.`)
    }
    res.send({id:user.id, name:user.name, email:user.email})

  } catch (error:any) {
    console.error(error.message)
    if(res.statusCode === 200) {
      res.status(500).send(`Internal server error`)
    } else {
      res.send(error.message)
    }
  }
}