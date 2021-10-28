import React from 'react'
import { api } from '../services/api'

//Criando um ContextApi para que todos os trechos que necessitem de autenticação já puxem desse estado automaticamente, evitando a necessidade de setar o mesmo em cada página da aplicação.
export const AuthContext = React.createContext({} as AuthContextData) //Tipando o context no React, normalmente é realizado dessa forma. {} as "interface/type-name".

interface User {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

interface AuthContextData {
  user: User | null;
  signInUrl: string;
  signOut: () => void; //Signout é uma função e o retorno da mesma é void.
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

//ReactNode é tudo aquilo que é aceito pelo React.
interface AuthProvider {
  children:React.ReactNode
}

export function AuthProvider(props: AuthProvider) {

  const [user, setUser] = React.useState<User | null>(null) //Esse state vai armazenar ou User ou nulo. Se logado vai ter User, se não vai ser null. Os dados dos usuários vindos do backend da aplicação, serão armazenados nesse state.

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=3312d47abdffa1040174`

  async function signIn(githubCode: string) {
    // O retorno desta função/requisição foi tipada como <AuthResponse>
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })
    const {token,user} = response.data
    localStorage.setItem('@dowhile:token', token) //Salvando como dowhile e lá dentro vai existir o token.
    api.defaults.headers.common.authorization = `Bearer ${token}` //Com isso, o axios envia o cabeçalho automaticamente junto com a requisição.
    setUser(user)
  }

  //Função para realizar logout.
  function signOut() {
    setUser(null) //Set de user para Null, ou seja, sem usuário.
    localStorage.removeItem('@dowhile:token') //Removendo o token do localStorage.
  }

  React.useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')
    if(token) {
      api.defaults.headers.common.authorization = `Bearer ${token}` //Com isso, o axios envia o cabeçalho automaticamente junto com a requisição.
      api.get<User>('profile').then(response => {
        setUser(response.data)
      })
    }
  },[])


  React.useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=') //Verificar se a url inclui code.
    if(hasGithubCode) {
      const [urlWithoudCode, githubCode] = url.split('?code=') //Separando o valor de code do restante da url.
      window.history.pushState({}, '', urlWithoudCode) //Estou fazendo isso para remover o code da URL, evitando demonstrar para o client um dado sensível.
      signIn(githubCode) //Estou pegando o code para enviar ao backend, permitindo a autenticação.
    }
  }, [])

  return (
    <AuthContext.Provider value={{signInUrl, user, signOut}}>
      {/* Children é aquilo que colocamos tudo dentro do componente. */}
      {props.children}
    </AuthContext.Provider>
  )
}