import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  async insertUser(user:User) {
    try {
      await this.connection("labook_users")
      .insert({
        id,
        name,
        email,
        password: cypherPassword,
      });
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.Message);
    }
  }
}