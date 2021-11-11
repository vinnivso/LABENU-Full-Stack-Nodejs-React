
import connection from '../connection'
import {userTableName} from "../types";

connection.raw(`
  CREATE TABLE IF NOT EXISTS ${userTableName} (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT "NORMAL"
  );
`).then(() => console.log(`MySQL tables were sucessfully created`))
  .catch(error => console.log(error.message))
  .finally(() => connection.destroy())
