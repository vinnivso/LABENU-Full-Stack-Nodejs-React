const knex = require('knex')
const dotenv = require('dotenv')
const path = require('path')
const XLSX = require('xlsx');

dotenv.config()

const connection = knex ({
  client:'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306,
    multipleStatements: true
  }
})

const filename = __dirname + path.sep + 'PokemonGo.xlsx'
const workbook = XLSX.readFile(filename);
const sheetName = (workbook.SheetNames)[0];
let pokemons = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {defval: ""});

pokemons = [pokemons[0], pokemons[1]];

const main = async() => {
  try {
    await connection.raw(`
      CREATE TABLE IF NOT EXISTS pokemon_goDefinitive (
        ROW INT PRIMARY KEY NOT NULL,
        Name VARCHAR(255) NOT NULL,
        PokedexNumber INT,
        ImgName VARCHAR(255),
        Generation INT,
        EvolutionStage VARCHAR(255),
        Evolved INT NOT NULL,
        FamilyID INT,
        CrossGen INT NOT NULL,
        Type1 VARCHAR(255) NOT NULL,
        Type2 VARCHAR(255),
        Weather1 VARCHAR(255) NOT NULL,
        Weather2 VARCHAR(255),
        STATTOTAL INT NOT NULL,
        ATK INT NOT NULL,
        DEF INT NOT NULL,
        STA INT NOT NULL,
        Legendary INT NOT NULL,
        Aquireable INT NOT NULL,
        Spawns INT NOT NULL,
        Regional INT NOT NULL,
        Raidable INT NOT NULL,
        Hatchable INT NOT NULL,
        Shiny INT NOT NULL,
        Nest INT NOT NULL,
        New INT NOT NULL,
        NotGettable INT NOT NULL,
        FutureEvolve INT NOT NULL,
      )
    `)
    console.log(`Tabela criada!`)

    for (const pokemon of pokemons) {
      await connection('pokemon_goDefinitive')
        .insert({
          ROW: pokemon.row,
          Name: pokemon.name,
          PokedexNumber: pokemon.pokedexNumber,
          ImgName: pokemon.imageName,
          Generation: pokemon.generation,
          EvolutionStage: pokemon.evolutionStage,
          Evolved: pokemon.evolved,
          FamilyID: pokemon.familyId,
          CrossGen: pokemon.crossGen,
          Type1: pokemon.type1,
          Type2: pokemon.type2,
          Weather1: pokemon.weather1,
          Weather2: pokemon.weather2,
          STATTOTAL: pokemon.stattotal,
          ATK: pokemon.atk,
          DEF: pokemon.def,
          STA: pokemon.sta,
          Legendary: pokemon.legendary,
          Aquireable: pokemon.aquireable,
          Spawns: pokemon.spawns,
          Regional:pokemon.regional,
          Raidable: pokemon.raidable,
          Hatchable: pokemon.hatchable,
          Shiny: pokemon.shiny,
          Nest: pokemon.nest,
          New: pokemon.new,
          NotGettable:pokemon.notGettable,
          FutureEvolve: pokemon.futureEvolve,
        })
    }
  } catch (error) {
    console.log(error)
  } finally {
    connection.destroy()
  }
}
main();
