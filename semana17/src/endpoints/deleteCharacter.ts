import { Request, Response } from "express";
import connection from "../connection";

export default async function deleteCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {id} = req.params
    await connection("character_Rev4")
      .delete()
      .where({id})
    res.status(200).end; //Terminar com .end, porque o método DELETE, não possui body na resposta.
    
  } catch (error) {
    res.status(500).end();
  }
}
