import express from 'express'
import connection from '../connection'
import generateAuthenticator from '../services/generateAuthenticator'
import generateIdentity from '../services/generateIdentity'
import { recipeTableName } from '../types'

export default async function createRecipe(req: express.Request, res: express.Response): Promise<void> {
  try {
    const {title, description} = req.body
    if(!title || !description) {
      res.statusCode = 422
      throw new Error(`'title' and 'description' are required.`)
    }
    
    const token = req.headers.authorization! //Coloquei o "!", para o typescript parar de implicar comigo, pq sim, eu sei o type. Evitando que ele solicite para arrumar o type em tokenData.
    const tokenData = new generateAuthenticator().getTokenData(token)
    if(!tokenData) {
      res.statusCode = 401 //Unauthorized
      throw new Error(`Confira se o token está válido ou se o mesmo foi repassado na chave authorization do headers / Unathorized.`)
    }

    const id = new generateIdentity().generateId()
    // const createdAt = new Date() //Desnecessário, pois já foi estabelecido que o sql já iria realizar isso automaticamente, ao subir a requisição no banco de dados.

    await connection(recipeTableName)
      .insert({id, title, description, author_id:tokenData!.id}) //Repare nesse trecho que sempre que for submeter na tabela do sql, é necessário passar os nomes como estão realizados na tabela, exemplo "author_id", porém seu respectivo valor nesse código será tokenData.
    res.send(`Recipe has been sucessfully created!`)

  } catch (error:any) {
    console.error(error.message)
    if(res.statusCode === 200) {
      res.status(500).send(`Internal server error`)
    } else {
      res.send(error.message)
    }
  }
}