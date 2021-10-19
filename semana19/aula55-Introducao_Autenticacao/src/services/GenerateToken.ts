import * as jwt from "jsonwebtoken"

interface AuthenticationData {
  id:string
}

const expiresIn = "1min"
export default function generateToken(input:AuthenticationData):string{
  const token = jwt.sign({id:input.id},process.env.JWT_KEY as string,{expiresIn})
  return token
}