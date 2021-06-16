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
// console.log('O primeiro número é igual o segundo?', number1 == number2)
// console.log('O primeiro número é divisível pelo segundo?', numberDiv1 == 0)
// console.log('O segundo número é divisível pelo primeiro?', numberDiv2 == 0)

// ------------------ DESAFIOS ------------------------
// //01
// const graus_kelvin = Number(prompt('Insira um valor em °K')) 
// const convKelvinCelsius = graus_kelvin - 273.15
// const convKelvinFahrenheit = (graus_kelvin - 273.15) * (9 / 5) + 32
// console.log('Seu valor atribuído de', graus_kelvin,'°K, foi convertido para', Number(convKelvinCelsius.toFixed(2)), '°C e para', Number(convKelvinFahrenheit.toFixed(2)), '°F.')

// const graus_fahrenheit = Number(prompt('Insira um valor em °F')) 
// const convFahrenheitKelvin = (graus_fahrenheit - 32) * (5 / 9) + 273.15
// const convFahrenheitCelsius = (graus_fahrenheit - 32) * (5 / 9)
// console.log('Seu valor atribuído de', graus_fahrenheit,'°F, foi convertido para', Number(convFahrenheitKelvin.toFixed(2)), '°K e para', Number(convFahrenheitCelsius.toFixed(2)), '°C.')

// const graus_celsius = Number(prompt('Insira um valor em °C')) 
// const convCelsiusKelvin = graus_celsius + 273.15
// const convCelsiusFahrenheit = (graus_celsius) * (9 / 5) + 32
// console.log('Seu valor atribuído de', graus_celsius,'°C, foi convertido para', Number(convCelsiusKelvin.toFixed(2)), '°K e para', Number(convCelsiusFahrenheit.toFixed(2)), '°F.')
// // RESOLUÇÃO: Ao invés de ter realizado o desafio como está proposto, achei interessante complementar um pouco mais o código.

// //02
// const quilowattHora = Number(prompt('Por favor, insira somente o valor do consumo da residência'))
// console.log('O valor a ser pago pela residência apresentando o consumo de: ', quilowattHora,'quilowatt-hora será de R$',Number((quilowattHora * .05).toFixed(2)))
// console.log('O valor a ser pago pela residência apresentando o consumo de: ', quilowattHora,'quilowatt-hora com 15% de desconto, será de R$',Number(((quilowattHora * .05) * .75).toFixed(2)))
// // RESOLUÇÃO: Continuo aplicando o "to.Fixed(2)" para evitar que os valores ultrapassem duas casas decimais.

// //03
// const pound = Number(prompt('Insira um valor de massa em lb'))
// console.log('O valor de massa em', pound,'lb equivalem a',Number((pound * .453592).toFixed(2)),'kg')

// const onca = Number(prompt('Insira um valor de massa em oz'))
// console.log('O valor de massa em', onca,'oz equivalem a',Number((onca * .0283495).toFixed(2)),'kg')

// const mile = Number(prompt('Insira um valor de distância em mi'))
// console.log('O valor da distância em', mile,'mi equivalem a',Number((mile * 1609.34).toFixed(2)),'m')

// const feet = Number(prompt('Insira um valor de distância em ft'))
// console.log('O valor da distância em', feet,'ft equivalem a',Number((feet * .3048).toFixed(2)),'m')

// const gallon = Number(prompt('Insira um valor de volume em gal'))
// console.log('O valor do volume em', gallon,'gal equivalem a',Number((gallon * 3.78541).toFixed(2)),'l')

// const xicara = Number(prompt('Insira um valor de volume em xic'))
// console.log('O valor do volume em', xicara,'xic equivalem a',Number((xicara * .24).toFixed(2)),'l')
