import express from "express";
import connection from "../connection";
import generateAuthenticator from "../services/generateAuthenticator";
import { recipeTableName } from "../types";

export default async function getRecipeById(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const token = req.headers.authorization! //Coloquei o "!", para o typescript parar de implicar comigo, pq sim, eu sei o type. Evitando que ele solicite para arrumar o type em tokenData.
    const tokenData = new generateAuthenticator().getTokenData(token)
    if(!tokenData) {
      res.statusCode = 401 //Unauthorized
      throw new Error(`Confira se o token está válido ou se o mesmo foi repassado na chave authorization do headers / Unathorized.`)
    }

    const [recipe] = await connection(recipeTableName)
      .where({id: req.params.id,});
    if(!recipe){
      res.statusCode= 404
      throw new Error(`Recipe not found.`)
    }
    res.send({
      //Lembrando que no banco de dados está como recipe.created_at, DB sempre utiliza o padrão snake case ao invés do padrão camel case.
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      createdAt: recipe.created_at,
    });
  } catch (error: any) {
    console.error(error.message);
    if (res.statusCode === 200) {
      res.status(500).send(`Internal server error`);
    } else {
      res.send(error.message);
    }
  }
}
