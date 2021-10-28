import express from "express"
import connection from "../connection"
import generateAuthenticator from "../services/generateAuthenticator"
import manageHash from "../services/manageHash"
import { userTableName } from "../types"

export default async function login(req:express.Request, res: express.Response):Promise<void> {
  try {
    const {email, password} = req.body //Email e password serão recebidos do body da requisição.
    if(!email || !password) {
      res.statusCode = 422
      throw new Error(`'email' and 'password' are required.`)
    }

    const [user] = await connection(userTableName)
      .where({email}) //Pegando em user, o e-mail correspondente.
    const passwordIsCorrect:boolean = new manageHash().compareHash(password, user?.password || '') //Verificando se a senha inserida, corresponde a senha cadastrada. Comparando a senha de req.body.password com a senha no banco,  user.password. Utilizando como: user?.password, se retornar como undefined ou string vazia, nem tenta que não vai dar certo. A requisição acaba aqui e já retorna erro.
    if(!passwordIsCorrect) {
      res.statusCode = 401
      throw new Error(`Invalid credentials have been submitted`)
    }
    const token = new generateAuthenticator().generateToken({id:user.id}) //Dessa vez, não posso passar o {id} simplesmente, porque se eu tiver uma resposta, dentro do id, vai ter o respectivo user.id que será o correspondente correto.
    res.send({token})

  } catch (error:any) {
    console.error(error.message)
    if(res.statusCode === 200) {
      res.status(500).send(`Internal server error`)
    } else {
      res.send(error.message)
    }
  }
}