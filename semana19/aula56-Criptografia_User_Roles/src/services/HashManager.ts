import * as bcryptjs from "bcryptjs"

export class HashManager {

  public generateHash = (plainText: string) => {
    const cost = 12
    const salt = bcryptjs.genSaltSync(cost) //Colocando o sync, ele já entende que é assíncrona.
    const cipherText = bcryptjs.hashSync(plainText, salt)
    return cipherText
  }

  public compareHash = (
    plainText: string,
    cipherText: string
  ) => {
    const result = bcryptjs.compareSync(plainText, cipherText)
    return result
  }
}
