import {app} from "./app"
import {connection} from "./data/connection"

//Criação simples dos endpoints no index.ts, sei que não é o indicado porém, até o momento toda aquela estrutura de camadas mais parece bagunça na minha mente do que qualqur outra coisa, kkk.

//Endpoint para mostrar os pokemons
app.get("/pokemons", async (req, res) => {
  try {
    const id = Number(req.query.id)
    const name = req.query.Name || '%'
    const type1 = req.query.Type1 || '%'

    let result
    if(id) {
      result = await connection('redfox_pokemonGo')
        .where({id})
    } else {
      result =  await connection('redfox_pokemonGo')
        .where('Name', 'LIKE', `%${name}%`)
        .andWhere('Type1', 'LIKE', `%${type1}%`)
    }
    res.send(result)
  } catch (error) {
    res.status(500)
      .send(`Algo deu errado com seu requisição, por favor consulte a documentação disponível em: `)
  }
})
