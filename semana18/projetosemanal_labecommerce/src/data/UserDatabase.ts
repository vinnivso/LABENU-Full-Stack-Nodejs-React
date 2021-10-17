import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static tableName = "labecommerce_users" //Armazenar o nome do nome da tabela em uma variável para evitar de arrumar o trecho de código no futuro, quando a mesma for renomeada.

  //Ttatando os resultados vindos do DB
  private toUser = (input:User) => new User(input.id, input.name, input.email, input.age)

  createUser = (user: User) => BaseDatabase
    .connection(UserDatabase.tableName)
    .insert(user);

  getUserByEmail = async(email:string) => {
    const [result] = await BaseDatabase
      .connection(UserDatabase.tableName)
      .where({email})
    if(result) return this.toUser(result)
  }

  getAllUsers = async() => {
    const result = await BaseDatabase
      .connection(UserDatabase.tableName)
    return result.map(this.toUser)
  }
}
