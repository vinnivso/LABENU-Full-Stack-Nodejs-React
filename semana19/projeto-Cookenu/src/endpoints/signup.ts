import express from 'express'
import connection from '../connection'
import generateAuthenticator from '../services/generateAuthenticator'
import generateIdentity from '../services/generateIdentity'
import manageHash from '../services/manageHash'
import { userTableName } from '../types'

export default async function signup(req:express.Request, res: express.Response) :Promise<void> {
  try {
    const {name, email, password} = req.body //Estou dizendo que name,email e password virão do body da requisição, logicamente é uma desestruturação: req.body.name, req.body.email, req.body.password.
    if(!name || !email || !password) {
      res.statusCode = 422
      throw new Error(`'name', 'email' and 'password' are required.`)
    }
    if(password.length < 0) {
      res.statusCode = 422
      throw new Error(`'password' must be at least 6 chars. long.`)
    }

    const [user] = await connection(userTableName) //O user estará dentro de um array, por isso desestruturamos dessa respectiva forma.
      .where({email})
    if(user) {
      res.statusCode = 409
      throw new Error(`Email already in use.`)
    }

    const id:string = new generateIdentity().generateId() //Chamando a classe responsável por geração de ID.
    const cypherPassword: string = new manageHash().generateHash(password) //Chamando a classe que tem por função fazer o hash da password que o usuário inserir, lembrando que essa password irá vir de nosso req.body.password.
    const token:string = new generateAuthenticator().generateToken({id}) //Estou criando um token para o user, lembrando que p/ geração do token será necessário um objeto {id}.

    await connection(userTableName) //Estou enviando para o banco de dados os dados do usuário, repare que será enviado para a tabela de user, seu id,name, email e password com hash aplicado.
      .insert({id, name, email, password:cypherPassword})
    res.send({token}) //Enviando um token da requisição.

  } catch (error:any) {
    console.error(error.message)
    if(res.statusCode === 200) {
      res.status(500).send(`Internal server error`)
    } else {
      res.send(error.message)
    }
  }
}