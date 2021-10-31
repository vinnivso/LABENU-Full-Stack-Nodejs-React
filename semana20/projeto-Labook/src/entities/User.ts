export interface authenticationData {
  id: string
}

export interface user {
  id: string,
  name: string,
  email: string,
  password: string
}

export interface SignupInputDTO {
  name:string,
  email:string,
  password:string
}