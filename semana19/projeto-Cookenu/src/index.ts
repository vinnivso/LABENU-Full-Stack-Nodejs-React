import app from "./app"
import login from "./endpoints/login"
import signup from "./endpoints/signup"
import getProfile from "./endpoints/getProfile"
import getUserById from "./endpoints/getUserById"
import createRecipe from "./endpoints/createRecipe"
import getRecipeById from "./endpoints/getRecipeById"
// import generateAuthenticator from "./services/generateAuthenticator"
// import { compareHash, generateHash } from "./services/manageHash"
// import connection from "./connection"
// import manageHash from './services/manageHash'

// connection.raw("SHOW TABLES").then(console.log) //Criado somente para averiguar a conexão entre banco de dados e aplicação.

// const cypherText = generateHash("hello world") // Gerando um hash para o respectivo plainText.
// console.log(compareHash("bananinha", cypherText)) //Comparando um novo plainText x antigo plainText.
//  const cypherText = new manageHash().generateHash("hello world") //Utilizando a sintaxe de classe para gerar um novo hash, no caso brincando um pouco com POO
//  console.log(new manageHash().compareHash("mandioca frita", cypherText)) //Comparando na sintaxe de classe um plainText com outro.

// const token = new generateAuthenticator().generateToken({id: 'LKSLDJsleue123456hgfd'}) //Gerando um novo token, com base na id inserida.
// console.log(token)
// console.log(new generateAuthenticator().getTokenData(token)) //Verificando o o tokenData.

app.post('/users/signup', signup)
app.post('/users/login', login)
app.get('/users/profile',getProfile)
app.get('/users/:id/profile', getUserById)

app.post('/recipe',createRecipe)
app.get('/recipe/:id', getRecipeById)
