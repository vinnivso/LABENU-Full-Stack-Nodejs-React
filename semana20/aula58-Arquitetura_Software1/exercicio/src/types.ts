//Nome de tabelas
export const userTableName = "User_Arq";

//Definição das Interfaces
export interface AuthenticationData {
  id: string
}

export interface user {
  id:string
  name:string
  email:string
  password:string
}

export interface recipe {
  id:string
  title:string
  description:string
  createdAt:string
  authorId:string
}
