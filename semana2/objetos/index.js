// ------------------> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <------
// -----------------------> EXERCÍCIO 1 <--------------------------
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// //RESOLUÇÃO: Console vai imprimir o que está no primeiro elemento da Array = Matheus Nachtergaele.
// console.log(filme.elenco[filme.elenco.length - 1])
// //RESOLUÇÃO: Console vai imprimir o que está no último elemento da Array = Virginia Cavendish.
// console.log(filme.transmissoesHoje[2])
// //RESOLUÇÃO: Console vai imprimir o que encontra-se no índice 2 da respectiva array de objetos, sendo assim o Console vai imprimir o que encontra-se a última linha, logo: "canal: Globo, horario: 14h".

// -----------------------> EXERCÍCIO 2 <--------------------------
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// //RESOLUÇÃO: Console vai imprimir o que compoem o objeto cachorro, sendo assim. Seu nome, idade e raca.
// console.log(gato)
// //RESOLUÇÃO: Convole vai imprimir o que compoem o objeto gato, porém objeto gato é uma cópia de cachorro com alteração de seu nome, de Juca para Juba.
// console.log(tartaruga)
// //RESOLUÇÃO: Console vai imprimir o que compoem o objeto tartaruga, porém objeto tartaruga é uma cópia de gato, onde no objeto tartaruga é trocado o "a", pelo "o" em nome. Sendo assim, de Juba para Jubo.
// //RESOLUÇÃO: Os "...", copia um objeto ou array de objetos.

// -----------------------> EXERCÍCIO 3 <--------------------------
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// //RESOLUÇÃO: Console vai imprimir o valor atribuído para backender.
// console.log(minhaFuncao(pessoa, "altura"))
// //RESOLUÇÃO: Console não vai retornar como undefined ou synthax error, uma vez que não existe a chave altura em pessoa.

// ------------------> EXERCÍCIOS DE ESCRITA DE CÓDIGO <------
// -----------------------> EXERCÍCIO 1 <--------------------------
// const userInput = {
//     userName: prompt('Please insert your name.'),
//     userNickNames: prompt('Please insert your nicknames, separeted by ",".').split(',', 3),
// }
// function userPhrase(userObject) {
//     console.log(`Eu sou ${userObject.userName}, mas podem me chamar de: ${userObject.userNickNames[0]}, ${userObject.userNickNames[1]} ou ${userObject.userNickNames[2]}.`)
//     return userPhrase
// }
// userPhrase(userInput)
// const userInput2 = {
//     ...userInput,
//     userNickNames: prompt('Please insert your nicknames, separed by ",".').split(',', 3)
// }
// userPhrase(userInput2)

// -----------------------> EXERCÍCIO 2 <--------------------------
// const userInputOne  = {
//     userName: prompt('Please insert your name.'),
//     userAge: Number(prompt('Please insert your age.')),
//     userOccupation: prompt('Please insert your occupation')
// }
// const userInputTwo = {
//     userName: prompt('Please insert your name'),
//     userAge: Number(prompt('Please insert your age.')),
//     userOccupation: prompt('Please insert your occupation')
// }
// function userPhrase(userObject) {
//     console.log([userObject.userName, userObject.userName.length, userObject.userAge, userObject.userOccupation, userObject.userOccupation.length])
// }
// userPhrase(userInputOne)
// userPhrase(userInputTwo)

// -----------------------> EXERCÍCIO 3 <--------------------------
// let carrinho = []
// const objectFruitOne = {
//     userFruit: prompt('Please insert your most favorite fruit.'),
//     disponobility: prompt('Do you have this fruit? (Answer only with "yes" or "no".)').includes('yes')
// }
// const objectFruitTwo = {
//     userFruit: prompt('Please insert your second favorite fruit.'),
//     disponobility: prompt('Do you have this fruit? (Answer only with "yes" or "no".)').includes('yes')
// }
// const objectFruitThree = {
//     userFruit: prompt('Please insert your less favorite fruit.'),
//     disponobility: prompt('Do you have this fruit? (Answer only with "yes" or "no".)').includes('yes')
// }
// function completandandoCarrinho(objectOne, objectFruitTwo, objectFruitThree) {
//     return carrinho.push(objectOne, objectFruitTwo, objectFruitThree)
// }
// completandandoCarrinho(objectFruitOne, objectFruitTwo, objectFruitThree)
// console.log(carrinho)