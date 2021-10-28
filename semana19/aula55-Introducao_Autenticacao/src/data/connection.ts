import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

const connection = knex({
  client:"mysql",
  connection: {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_SCHEMA,
    password:process.env.DB_PASSWORD,
    port:Number(process.env.DB_PORT || 3306),
    multipleStatements: true
  }
})
export default connection