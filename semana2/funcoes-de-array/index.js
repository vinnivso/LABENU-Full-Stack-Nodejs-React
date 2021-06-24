// ----------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------
// ----------------------->EXERCÍCIO 1<-----------------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
// //RESOLUÇÃO: Será impresso um novo array com o respectivo valor de um elemento em seu índice. No caso vai somente imprimir o que existe em cada posíção, indo de 0 até 2.

// ----------------------->EXERCÍCIO 2<-----------------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)
// //RESOLUÇÃO: Será impresso um novo array somente com as informações presentes no objeto, chave nome.

// ----------------------->EXERCÍCIO 3<-----------------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)
// //RESOLUÇÃO: Será impresso um novo array retornando somente os elementos que são diferentes de 'Chijo', portando, retornando os "dados" da Amanda e da Laís.

// ----------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------
// ----------------------->EXERCÍCIO 1<-----------------------------
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// const nomeDosPets = pets.map((pet) => {
//     return pet.nome
// })
// console.log(nomeDosPets)

// const retornaSalsicha = pets.filter((pet) => {
//     return pet.raca === 'Salsicha'
// })
// console.log(retornaSalsicha)

// const filtrarPoodle = pets.filter((pet) => {
//     return pet.raca === 'Poodle'
// })
// console.log(filtrarPoodle)

// const mensagemPoodle =
// (pets.filter((pet) => {return pet.raca === 'Poodle'})).map((pet) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}.`
// })
// console.log(mensagemPoodle)

// ----------------------->EXERCÍCIO 2<-----------------------------
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// const nomeDosItens = produtos.map((produto) => {
//     return produto.nome
// })
// console.log(nomeDosItens)

// const itensComDesconto = produtos.map((produto) => {
//     return {
//         nome: produto.nome,
//         preco: (produto.preco * .95).toFixed(2)
//     }
// })
// console.log(itensComDesconto)

// //OU FAZENDO A 2B DA SEGUINTE FORMA!
// const itensComDesconto = produtos.map(({nome,preco}) => {
//     return {
//         nome: nome,
//         preco: (preco * .95).toFixed(2)
//     }
// })
// console.log(itensComDesconto)

// const itensCategoriaBebidas = produtos.filter((produto) => {
//     return produto.categoria === 'Bebidas'
// })
// console.log(itensCategoriaBebidas)

// const itensYpe = produtos.filter((produto) => {
//     return produto.nome.includes('Ypê')
// })
// console.log(itensYpe)

// const mensagemProdutoPreco =
// (produtos.filter((produto) => {return produto.nome.includes('Ypê')})).map((produto) => {
//     return `Compre ${produto.nome} por ${produto.preco}.`
// })
// console.log(mensagemProdutoPreco)

// ----------------------->DESAFIOS<--------------------------------
// ----------------------->EXERCÍCIO 1<-----------------------------
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]
// const nomeDePokemonsOrdenados = pokemons.map((elemento)=> {
//     return elemento.nome
// }).sort()
// console.log(nomeDePokemonsOrdenados)

// const semRepeticoes =
// (pokemons.map((elemento) => {return elemento.tipo})).filter((elemento, index, array) => {
//     return array.indexOf(elemento) === index
// })
// console.log(semRepeticoes)

//OU PODE SER REALIZADO DA SEGUINTE FORMA:
// const tipoDosPokemon = pokemons.map((elemento) => {return elemento.tipo})
// const novaArraySemRepeticoes = [...new Set(tipoDosPokemon)]
// console.log(novaArraySemRepeticoes)