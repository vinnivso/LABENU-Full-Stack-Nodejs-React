// ------------------ Exercícios de INTERPRETAÇÃO de Código ------------------------
// //01
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 //true

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// // RESOLUÇÃO: O console vai imprimir "false".

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// //RESOLUÇÃO: "true && false --> false && true ---> O console vai imprimir "false".

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// //RESOLUÇÃO: true && (true || false) ---> O console vai imprimir "true".
// console.log("d. ", typeof resultado)
// //RESOLUÇÃO: typeof de "resultado" é boolean.

// //02
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = primeiroNumero + segundoNumero
// console.log(soma)
// // RESOLUÇÃO: Realizará uma soma entre textos (Soma entre caracteres, vai realizar uma junção entre os textos digitados pelo usuário), será necessário realizar uma conversão para Number.

// //03
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// const soma = primeiroNumero + segundoNumero
// console.log(soma)
// // RESOLUÇÃO: Foi inserido a conversão dos dados de texto para Number.

// ------------------ Exercícios de ESCRITA de Código ------------------------
// //01
// const idade1 = Number(prompt('Digite sua idade caboclo'))
// const idade2 = Number(prompt('Digite a idade do seu brother ou aquela paquera'))
// console.log('Sua idade é maior do que a do teu brother?', idade1 > idade2)
// console.log('Sua idade é maior do que a do teu brother?', idade1 - idade2)

// //02
// const numeroPar = Number(prompt('Por favor, insira um número par, lembre-se que qualquer número par pode ser feito através da seguinte premissa: 2n - 1'))
// let restoDaDivisao = numeroPar % 2
// console.log('O resto da divisao é:', restoDaDivisao)
// // RESOLUÇÃO: Se o usuário digitar um número par, como esperado o resto da divisão será 0.
// // RESOLUÇÃO: Se o usuário digitar um número ímpar, como esperado o resta da divisão será > 0.

// //03
// const usernameAge = Number(prompt('Digite sua idade caboclo'))
// console.log('Sua idade em meses:', usernameAge * 12)
// console.log('Sua idade em dias:', usernameAge * 365)
// console.log('Sua idade em horas:', usernameAge * 8760)

// //04
// let number1 = Number(prompt('Digite o valor do primeiro Numero'))
// let number2 = Number(prompt('Digite o valor do segundo Numero'))
// let numberDiv1 = number1 % number2
// let numberDiv2 = number2 % number1
// console.log('O primeiro número é maior que o segundo?', number1 > number2)
// console.log('O primeiro número é diferente do segundo?', number1 == number2)
// console.log('O primeiro número é divisível pelo segundo?', numberDiv1 == 0)
// console.log('O segundo número é divisível pelo primeiro?', numberDiv2 == 0)