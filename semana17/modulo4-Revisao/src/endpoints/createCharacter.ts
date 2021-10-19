import { Request, Response } from "express";
import connection from "../connection";

//Request sempre tem que vir antes de Response
export default async function createCharacter(
  req: Request,
  res: Response
): Promise <void> {
  try {
    const {name, gender, description} = req.body

    await connection("character_Rev4")
      .insert({name,gender, description})
    res.status(201).end();

  } catch (error) {
    res.status(500).end();
  }
}
