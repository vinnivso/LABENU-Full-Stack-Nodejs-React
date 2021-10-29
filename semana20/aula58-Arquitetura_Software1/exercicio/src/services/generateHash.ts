import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export default class generateHash {
  hash = (plainText: string): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = bcryptjs.genSaltSync(rounds) //Colocando o sync, ele já entende que é assíncrona assíncrona.
    return bcryptjs.hashSync(plainText, salt)
  }

  compare = (
    plainText: string,
    cipherText: string
  ): boolean => {
    return bcryptjs.compareSync(plainText, cipherText)
  }
}