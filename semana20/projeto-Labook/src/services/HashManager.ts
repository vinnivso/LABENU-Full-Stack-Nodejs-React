import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export default class HashManager {
  hash = async (
    plainText: string
 ): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcryptjs.genSaltSync(rounds);
    return bcryptjs.hashSync(plainText, salt)
 }

  compare = async (
    plainText: string, cypherText: string
 ): Promise<boolean> => {
    return bcryptjs.compareSync(plainText, cypherText)
 }
}