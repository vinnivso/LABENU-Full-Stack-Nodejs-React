// ------------------- EXERCICÍOS DE INTERPRETAÇÃO DE CÓDIGO -------
// ----------------------->EXERCÍCIO 1<-----------------------------
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// //RESOLUÇÃO: Quer verificar se um número digitado pelo usuário é par, ou seja, quando seu restante for igual a ZERO. Caso o número seja par, será impresso no console a seguinte mensagem: "´Passou no teste". Caso contrário, ou seja, núermo ímpar, será impresso: "Não passou no teste".

// ----------------------->EXERCÍCIO 2<-----------------------------
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// //RESOLUÇÃO: O código serve para retornar o valor de uma fruta com base no que for digitado pelo usuário, se o usuário digitar "Maçã" será retornado seu respectivo valor expressado por 2.25. Caso retirarmos o "break" relacionado a "Pêra", vai retornar o valor para default, sendo assim Pêra, receberia o valor de 5.

// ----------------------->EXERCÍCIO 3<-----------------------------
// const numero = Number(prompt("Digite o primeiro número."))
// //RESOLUÇÃO: A primeira linha do exercício está convertendo os dados inseridos pelo usuário em "Number".
// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
// //RESOLUÇÃO: Não vai conseguir chamar "mensagem", porque mensagem está dentro do escopo do "if".

// ------------------- EXERCICÍOS DE ESCRITA DE CÓDIGO -------------
// ----------------------->EXERCÍCIO 1<-----------------------------
// const idadeUsuario = Number(prompt('Digite sua idade caboclo.'))
// const checkMaiorDeIdade = (userAge) => {
//     if(userAge > 18){
//         console.log('Você pode dirigir.')
//     }   else {
//         console.log('Você não pode dirigir.')
//     }
// }
// checkMaiorDeIdade(idadeUsuario)

// ----------------------->EXERCÍCIO 2<-----------------------------
// let turnoDoUsuario = prompt('Digite seu turno, seguindo o seguinte padrão: M (matutino) ou V (Vespertino) ou N (Noturno).').normalize('NFC').toUpperCase()
// const checkTurno = (userTurn) => {
//     if(userTurn === 'M'){
//         console.log('Bom dia!')
//     }   else if(userTurn=== 'V'){
//         console.log('Boa tarde!')
//     }   else if(userTurn === 'N'){
//         console.log('Boa noite!')
//     }   else {
//         console.log('Infelizmente não foi possível reconhecer seu turno de estudo, só para recapitular. Digite seu turno, seguindo o respectivo padrão: M (matutino) ou V (Vespertino) ou N (Noturno).')
//     }
// }
// checkTurno(turnoDoUsuario)

// ----------------------->EXERCÍCIO 3<-----------------------------
// let turnoDoUsuario = prompt('Digite seu turno, seguindo o seguinte padrão: M (matutino) ou V (Vespertino) ou N (Noturno).').normalize('NFC').toUpperCase()
// let mensagem
// switch (turnoDoUsuario) {
//   case 'M':
//     mensagem = 'Bom dia!'
//     break;
//   case 'V':
//     mensagem = 'Boa tarde!'
//     break;
//   case 'N':
//     mensagem = 'Boa noite!'
//     break;
//   default:
//     mensagem = 'Infelizmente não foi possível reconhecer seu turno de estudo, só para recapitular. Digite seu turno, seguindo o respectivo padrão: M (matutino) ou V (Vespertino) ou N (Noturno).'
//     break;
// }
// console.log(mensagem)

// ----------------------->EXERCÍCIO 4<-----------------------------
// let generoDoFilme = prompt('Qual o gênero do filme?').normalize('NFC').toUpperCase().includes('FANTASIA')
// let precoDoIngresso = Number(prompt('Digite o valor do ingresso do filme.')) < 15
// const checkVouOuNao = (filme, valorDoIngresso) => {
//     if(filme && valorDoIngresso){
//         console.log('Bom filme!')
//     }   else {
//         console.log('Escolha outro filme!')
//     }
// }
// checkVouOuNao(generoDoFilme, precoDoIngresso)

// ------------------- DESAFIOS ------------------------------------
// ----------------------->EXERCÍCIO 1<-----------------------------
// let generoDoFilme = prompt('Qual o gênero do filme?').normalize('NFC').toUpperCase().includes('FANTASIA')
// let precoDoIngresso = Number(prompt('Digite o valor do ingresso do filme.')) < 15
// const checkVouOuNao = (filme, valorDoIngresso) => {
//     if(filme && valorDoIngresso){
//         const lanchinho = prompt('Digite o lanche ideal para aproveitar sua sessão!')
//         console.log(`Tenha um bom filme!
//         Aproveite seu ${lanchinho}.`)
//     }   else {
//         console.log('Escolha outro filme!')
//     }
// }
// checkVouOuNao(generoDoFilme, precoDoIngresso)

// ----------------------->EXERCÍCIO 2<-----------------------------
