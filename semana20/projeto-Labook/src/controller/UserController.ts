//Se tem req e res = Controller
import express from 'express'
import { SignupInputDTO } from '../entities/User'

export default class UserController {
  async signup(req: express.Request, res: express.Response) {
    try {
      let message = "Success!"
      const { name, email, password } = req.body
      const input :SignupInputDTO = {
         name: req.body.name,
         email: req.body.Email,
         password: req.body.password
      }
      res.status(201).send({ message, token })

   } catch (error:any) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
  }
}