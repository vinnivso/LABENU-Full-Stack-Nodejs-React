import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../types";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> {
  try {
    //Sem o querybuilder, eu poderia escrever da seguinte forma:
    // const result:character[] = await connection.raw("SELECT * FROM character_REV4")
    // res.send(result)
    const { name, orderBy, orderType, page } = req.query;
    const resultsPerPage = 5;
    //Se ele pedir página 1 --> 0 5*(N-1) = 5*0, para n = 1
    //Se for página 2 --> 5 5*(N-1) = 5*1, para n = 2
    //Se for página 3 --> 10 5*(N-1) = 5*2, para n = 3
    const offset = resultsPerPage * (Number(page) - 1);

    debugger

    const characters: character[] = await connection("character_Rev4")
      .where("name", "LIKE", `%${name}%`) //Começa com qualquer coisa %, ter o termo procurado "name" e terminar com qualquer coisa %, `%${name}%`.
      .orderBy((orderBy as string) || "name", orderType as string)
      .offset(offset);
    res.send(characters);

  } catch (error) {
    res.status(500).send("Unexpected server error");
  }
}
