// // const chalk = require('chalk'); // Sintaxe utilizada sem o typescript para realizar import de uma Library.
// import chalk from "chalk" // Sintaxe utilizada com o typescript

// console.log(`${chalk.red("Hello, world!")}`)

import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.put("/character", createCharacter) //O método PUT não devolve Body na resposta.
app.delete("/character/:id", deleteCharacter)

// app.get("/movie/:id/characters") //Poderia ser um endpoint para relacionar todos os personagens de um filme X.

// app.get("/movies")
// app.delete("/movies")