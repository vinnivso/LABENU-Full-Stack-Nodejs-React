import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv'
import { AuthenticationData } from "../types";

dotenv.config()

export default class generateAuthenticator {
  generateToken = (payload: AuthenticationData): string => {
    return jsonwebtoken.sign(payload, process.env.JWT_KEY!, {expiresIn: '1h'}) //Se eu colocar o "!" no final, eu mostro para o typescript de que eu sei muito bem o que estou fazendo, evitando aquele errinho bobo por falta de tipagem.
  }

  getTokenData = (token: string): AuthenticationData | null => {
    try {
      const {id} = jsonwebtoken.verify(token, process.env.JWT_KEY!) as AuthenticationData;
      return {id};
    } catch (error) {
      return null
    }
  }
}
