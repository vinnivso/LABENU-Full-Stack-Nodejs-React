# --------------------Exercício 1---------------------------------

## A.Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
### Resp.: Acredito que sim, pois ID's não devem ser algo facilmente manipulável.

## B.A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
### Resp.: Pq não criarmos como uma classe?

```tsx
import {v4} from "uuid"

export class IdGenerator {
  generateId = (): string => v4()
}
```

```tsx
import {v4} from "uuid"

export function generateId():string {
  return v4()
}
```

# --------------------Exercício 2---------------------------------
```tsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

## A. Explique o código acima com as suas palavras.
- Linha 27: Definição e atribuição de valor para a variável userTableName, no caso seu valor corresponde com o nome de uma tabela no SQL.

- Linha 29-38: Definição da variável connection, com chamada de execução do knext, passando como propriedades do coonection o mysql, além de outra propriedade denominada connection que será responsável por fazer a conexão com nosso BD.

- Linha 40 - 48: Criação de variável para execução de função assíncrona, recebendo como parâmetros da função id, email, password, tipados como string. Atribuindo id, email, password dentro da tabela definida na linha 27.

## B. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
```sql
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

## C. Pela mesma justificativa do exercício anterior, crie uma função responsável por salvar usuários no banco.

```tsx
import connection from "../data/connection";

const userTableName = "User";

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
export default createUser;
```

# --------------------Exercício 3---------------------------------

## A. O que a linha as string faz? Por que precisamos usar ela ali?
### Resp.: Setando o retorno da execução como STRING.

## B. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
```tsx
import * as jwt from "jsonwebtoken"

interface AuthenticationData {
  id:string
}

const expiresIn = "1min"
export default function generateToken(input:AuthenticationData):string{
  const token = jwt.sign({id:input.id},process.env.JWT_KEY as string,{expiresIn})
  return token
}
```