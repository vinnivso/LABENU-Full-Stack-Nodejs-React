// ------------------ Exercícios de INTERPRETAÇÃO de Código ------------------------
// //01
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// console.log(minhaFuncao(2))
// // RESOLUÇÃO: Vai imprimir no console o resultado expresso = 10
// console.log(minhaFuncao(10))
// // RESOLUÇÃO: Vai imprimir no console o resultado expresso = 50
// // RESOLUÇÃO: Se retirarmos o "console.log" e chamarmos a função, não irá iremos visualizar o resultado da expressão.

// //02
// let textoDoUsuario = prompt("Insira um texto");
// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }
// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// // RESOLUÇÃO: A função vai receber um texto que terá todo seu texto refeito para letras minúsculas e após isso vai verificar se a palavra 'cenoura' está contida naquele texto.
// /* RESOLUÇÃO: i. - true
//               ii. - true
//               iii. true */

// ------------------ Exercícios de ESCRITA de Código ------------------------------
// //01
// function sobreEu(){
//     console.log(`Eu sou Vinicius, tenho 27 anos, moro em Mogi das Cruzes e sou estudante da Labenu.`)
// }
// sobreEu()

// function userInformaton(nome, idade, endereco, profissao) {
//     const phrase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
//     return phrase
// }
// const userName = prompt('Please, insert your name')
// const userAge = Number(prompt('Please, insert your age'))
// const userAdress = prompt('Please, insert your adress')
// const userJob = prompt('Please, insert your job')
// const macroPhrase = userInformaton(userName, userAge, userAdress, userJob)
// console.log(macroPhrase)

// //02
// function somaDoisNumeros(primeiroNumero, segundoNumero) {
//     const soma = primeiroNumero + segundoNumero
//     return soma
// }
// const userFirstNumber = Number(prompt('Please insert your first number'))
// const userSecondNumber = Number(prompt('Please insert your second number'))
// let macroNumber = somaDoisNumeros(userFirstNumber, userSecondNumber)
// console.log(`A soma dos dois numeros equivalem: ${macroNumber}`)

// function comparativoMaiorOuIgual(primeiroNumero, segundoNumero) {
//     const maiorOuIgual = primeiroNumero >= segundoNumero
//     return maiorOuIgual
// }
// const userFirstNumber = Number(prompt('Please insert your first number'))
// const userSecondNumber = Number(prompt('Please insert your second number'))
// let macroNumber = comparativoMaiorOuIgual(userFirstNumber, userSecondNumber)
// console.log(`O primeiro número é maior ou igual ao segundo? ${macroNumber}`)

// function parOuImpar(primeiroNumero) {
//     const divisivelPor2 = primeiroNumero % 2
//     const checkPar = divisivelPor2 == 0
//     return checkPar
// }
// const userFirstNumber = Number(prompt('Please insert your first number'))
// let macroNumber = parOuImpar(userFirstNumber)
// console.log(`O primeiro número é par? ${macroNumber}`)

// function mensagemMaiusculaTamanho(mensagem) {
//     const textoFormatacao = ` A frase digitada pelo usuário é: ${mensagem.toUpperCase()} e possui ${mensagem.length} caracteres.`
//     return textoFormatacao
// }
// const userPhrase = prompt('Please insert your message')
// let macroNumber = mensagemMaiusculaTamanho(userPhrase)
// console.log(macroNumber)

// //03
// function operacaoSoma(firstNumber, secondNumber) {
//     const soma = firstNumber + secondNumber
//     return soma
// }
// function operacaoSubtracao(firstNumber, secondNumber) {
//     const subtracao = firstNumber - secondNumber
//     return subtracao
// }
// function operacaoMultiplicacao(firstNumber, secondNumber) {
//     const multiplicacao = firstNumber * secondNumber
//     return multiplicacao
// }
// function operacaoDivisao(firstNumber, secondNumber) {
//     const divisao = firstNumber / secondNumber
//     return divisao
// }
// const userInputFirstNumber = Number(prompt('Please insert your first number'))
// const userInputSecondNumber = Number(prompt('Please insert your second number'))
// const macroSoma = operacaoSoma(userInputFirstNumber, userInputSecondNumber)
// const macroSubtracao = operacaoSubtracao(userInputFirstNumber, userInputSecondNumber)
// const macroMultiplicacao = operacaoMultiplicacao(userInputFirstNumber, userInputSecondNumber)
// const macroDivisao = operacaoDivisao(userInputFirstNumber, userInputSecondNumber)
// console.log(`Números Inseridos: ${userInputFirstNumber} e ${userInputSecondNumber}
// Soma: ${macroSoma}
// Diferença: ${macroSubtracao}
// Multiplicação: ${macroMultiplicacao}
// Divisão: ${macroDivisao}`)


// ------------------ Exercícios do DESAFIO ----------------------------------------
//01
// const arrowFunction1 = (parametro) => {
//     const nothingToDo = parametro
//     return nothingToDo
// }
// //const userInputFirstNumberParametro = Number(prompt('Please insert your first number'))
// //const userParametro = arrowFunction1(userInputFirstNumberParametro)
// //console.log(userParametro)

// const arrowFunction2 = (firstNumber, secondNumber) => {
//     const soma = firstNumber + secondNumber
// }
// const userInputFirstNumber = Number(prompt('Please insert your first number'))
// const userInputSecondNumber = Number(prompt('Please insert your second number'))
// let macroSoma = arrowFunction2(userInputFirstNumber, userInputSecondNumber)
// let somaTransfer = arrowFunction1(macroSoma)
// console.log(somaTransfer)

//02
// function teoremaDePitagoras(catetoOposto, catetoAdjacente) {
//     const hipotenusa = Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2)
//     return Math.sqrt(hipotenusa)
// }
// const userInputFirstNumber = Number(prompt('Please insert your first number'))
// const userInputSecondNumber = Number(prompt('Please insert your second number'))
// const values = teoremaDePitagoras(userInputFirstNumber, userInputSecondNumber)
// console.log(values)