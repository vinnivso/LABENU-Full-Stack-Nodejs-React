//Se tem req e res = Controller
import express from 'express'

export default class UserController {
  async signup(req: express.Request, res: express.Response) {
    try {
      let message = "Success!"
      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 406
         message = '"name", "email" and "password" must be provided'
         throw new Error(message)
      }

      const id: string = generateId()

      const cypherPassword = await hash(password);

      await connection('labook_users')
         .insert({
            id,
            name,
            email,
            password: cypherPassword
         })

      const token: string = generateToken({ id })

      res.status(201).send({ message, token })

   } catch (error:any) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
  }
}