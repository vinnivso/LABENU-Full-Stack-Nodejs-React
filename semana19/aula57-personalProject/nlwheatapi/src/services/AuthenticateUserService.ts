import axios from "axios" //Instalado o axios na aplicação, pois será necessário utilizar uma chamada externa.
import prismaClient from "../prisma"
import {sign} from "jsonwebtoken" //Função "sign", de fato é feita somente para criarmos um token na autenticação.

//1.Recer code(string)
//2.Recuperar o access_token no GITHUB
//Recuperar infos do user no GITHUB
//3.Verificar se o usuário existe no DB --- SIM, gera um token ---NÃO, cria no DB e gera um token.
//4.Retornar o token com as infos do usuário logado.

interface IAccessTokenResponse {
  access_token: string
}
interface IUserResponse {
  avatar_url:string,
  login:string,
  id:number,
  name:string
}

class AuthenticateUserService {
  async execute(code:string) {
    const url = "https://github.com/login/oauth/access_token"
    //Na linha seguinte, quando for acessar data, quero que ele acesse com esse nome "accessTokenResponse".
    const {data: accessTokenResponse} = await axios.post<IAccessTokenResponse>(url, null, {
      params:{
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers:{
        "Accept":"application/json"
      }
    })

    //Na linha seguinte, passo o tipo do retorno de get, como :"IUserResponse".
    const response = await axios.get<IUserResponse>("https://api.github.com/user", {
      headers: {
        authorization:`Bearer ${accessTokenResponse.access_token}`
      }
    })

    const {login, id, avatar_url, name} = response.data
    let user = await prismaClient.user.findFirst({
      where: {
        github_id:id
      }
    })
    if(!user) {
      user = await prismaClient.user.create({
        data:{
          github_id:id,
          login,
          avatar_url,
          name
        }
      })
    }

    const token = sign({
      user:{
        name:user.name,
        avatar_url:user.avatar_url,
        id:user.id
      }
    },
      process.env.JWT_SECRET,
      {
        subject:user.id,
        expiresIn:"1d"
      }
    )

    return {token, user} //Quando utilizamos o axios, toda a informação que é retornada é inserida dentro de data, por isso: "response.data"
  }
}
export {AuthenticateUserService}