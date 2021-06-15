// ------------------ Exercícios de INTERPRETAÇÃO de Código ------------------------
// //01
// let a = 10
// let b = 10

// console.log(b)
// // RESOLUÇÃO: Será impresso o valor atual de b = 10.

// b = 5
// console.log(a, b)
// // RESOLUÇÃO: Será impresso o valor de a = 10, e o novo valor de b = 5.

// //02
// let a = 10
// let b = 20
// let c
// c = a
// // RESOLUÇÃO: De undefined para c = 10.
// b = c
// // RESOLUÇÃO: De b = 20 para b = 10.
// a = b
// // RESOLUÇÃO: De a = 10 para a = 10, (Foi definido b = 10, na etapa anterior).
// console.log(a, b, c)
// // RESOLUÇÃO: Será impresso o valor 10, 10, 10.

// //03
// let p = prompt("Quantas horas você trabalha por dia?")
// // RESOLUÇÃO: Sugestão de "p" para "workHours".
// let t = prompt("Quanto você recebe por dia?")
// // RESOLUÇÃO: Sugestão de "t" para "payDay".
// alert(`Voce recebe ${t/p} por hora`)
// // RESOLUÇÃO: Caso atender a sugestão, definir como ${payDay/workHours}.

// ------------------ Exercícios de ESCRITA de Código ------------------------
// //01
// let nome = prompt('Informe seu nome')
// let idade = Number(prompt('Informe sua idade'))
// // RESOLUÇÃO: Se não declarar a um valor para a const irá aparecer a seguinte mensagem: Uncaught SyntaxError, esssa mensagem de erro está associado pelo fato de não ser possível uma variável "const" possuir o valor undefined. Porém, se realizarmos somente com o let, ele vai retornar somente undefined.
// console.log('Tipo de nome: ', typeof nome)
// console.log('Tipo de idade: ', typeof idade)
// // RESOLUÇÃO: As variáveis são do tipo STRING, isso pelo falo de estar utilizando o prompt, que sempre vai retornar como STRING, caso eu não realize a conversão do tipo de dado.
// console.log('Olá', nome, 'você tem', idade, 'anos')

// //02
// const question1 = 'Você curte um Accept - Aiming High?'
// const question2 = 'E um Rainbow - Stargazer?'
// const question3 = 'Puts, já escutou um Judas Priest - Painkiller?'
// let answer1 = prompt(question1)
// let answer2 = prompt(question2)
// let answer3 = prompt(question3)
// console.log(question1, answer1)
// console.log(question2, answer2)
// console.log(question3, answer3)

// //03
// let a = Number(prompt('Insira o valor de a'))
// let b = Number(prompt('Insira o valor de b'))
// let c = null
// c = a
// a = b
// b = c
// console.log('O novo valor de a é: ', a)
// console.log('O novo valor de b é: ', b)