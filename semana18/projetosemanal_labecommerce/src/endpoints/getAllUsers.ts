import { Request, Response} from "express";
import { UserDatabase } from "../data/UserDatabase";

export const getAllUsers = async(req:Request, res: Response) => {
  try {
    const database = new UserDatabase()
    const users = await database.getAllUsers()
    res.status(200).send(users)
  } catch (error:any) {
    res.status(500).send({message: error.message})
  }
}