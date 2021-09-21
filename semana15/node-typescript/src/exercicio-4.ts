// //4
//a - Consigo gerar o arquivo javascript para o exercícios com facilidade, uma vez que o script foi parametrizado para isso e o  tsconfig.json está configurado de maneira adequada.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
console.log(pokemon1, pokemon2, pokemon3)

//b - No caso, se estivesse dentro de uma pasta src, eu deveria reparemetriar os diretórios especificados tanto no package.json, assim como o tsconfig.json.

//c - Pode ser feito da seguinte maneira no arquivo package.json:
// {
//   "name": "node-typescript",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "start":"clear && tsc && node ./build/index.js && node ./build/exercicio-4.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }
