// ------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------
// ----------------------->EXERCÍCIO 1<-----------------------------
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// //RESOLUÇÃO: A cada loop, será incrementado 1 em i,realizando uma soma, onde valor = valor + i.Dessa forma ele guarda sempre o resultado da soma, onde o maior valor de "i" para o loop será 4, uma vez que foi estabelecido i < 5, como a condição e a cada loop será incrementando +1 no valor de i. Logo, essa expressão acaba quando valor = 10.

// ----------------------->EXERCÍCIO 2<-----------------------------
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
//     console.log(numero)
//     console.log(lista.indexOf(numero))
// 	}
// }
// //RESOLUÇÃO: O console vai imprimir na tela, somente os elementos que satisfazem a condição apresentada na expressão, ou seja, somente será impresso os elementos da lista > 18. Portanto, serão impressos os seguintes valores: 19, 21, 23, 25, 27, 30.
// //RESOLUÇÃO: Sim, o "For of" é suficiente, basta utilizarmos o método ".indexOf" para ele retornar a condição que buscamos, no caso: numero > 18, vai nos retornar somente as condições true para quando numero for maior que 18.

// ----------------------->EXERCÍCIO 3<-----------------------------
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0 //Start
// while(quantidadeAtual < quantidadeTotal){ //Condição
//   let linha = "" //Declaração da linha somente com a entrada
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){ //Início do for, incremento de asteriscos, enquanto satisfazer a condição.
//     linha += "*" //O que será incrementado na linha a cada loop
//   }
//   console.log(linha)
//   quantidadeAtual++ //Incremento da quantidade
// }
// //RESOLUÇÃO: Com base na função, será impresso o mesmo número de asteriscos por sua respectiva linha. Nesse trecho: (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++), poderia ser escrito como: (let asteriscos = 0; asteriscos <= quantidadeAtual; asteriscos++) que o resultado permaneceria o mesmo.

// ------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -------------
// ----------------------->EXERCÍCIO 1<-----------------------------
// let quantidadeDePets = Number(prompt('Quantos pets você possui?'))
// let arrayDePets = []

// if(quantidadeDePets === 0) {
//     console.log('Que pena! Você pode adotar um pet!')
// }   else if(quantidadeDePets > 0) {
//         for(let i = 0; i < quantidadeDePets; i++) {
//         let nomeDePets = prompt('Digite o nome de seus Pets.')
//         arrayDePets.push(nomeDePets)
//     }
//     console.log(arrayDePets)
// }

// ----------------------->EXERCÍCIO 2<-----------------------------
//A.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for(let elemento of array) {
//     console.log(elemento)
// }

// //B.
// for(let elemento of array) {
//     let dividePorDez = elemento / 10
//     console.log(dividePorDez)
// }

// //C.
// let novoArray = []
// for(let elemento of array) {
//     if(elemento % 2 === 0){
//         novoArray.push(elemento)
//     }
// }
// console.log(novoArray)

// //D.
// let novoArrayString = []
// for(elemento of array) {
//     novoArrayString.push(`O elemento do índex ${array.indexOf(elemento)} é: ${elemento}.`)
// }
// console.log(novoArrayString)

// //E.
// let maiorElemento = 0
// for(let i = 0; i < array.length; i++) {
//     const elementoAtual = array[i]
//     if(elementoAtual > maiorElemento) {
//         maiorElemento = elementoAtual
//     }
// }
// console.log(maiorElemento)

// let menorElemento = maiorElemento
// for(let i = 0; i < array.length; i++) {
//     const elementoAtual = array[i]
//     if(elementoAtual < menorElemento) {
//         menorElemento = elementoAtual
//     }
// }
// console.log(menorElemento)

// ------------------- DESAFIOS ------------------------------------
// ----------------------->EXERCÍCIO 1<-----------------------------
// console.log(`Lets go play boiiii!`)
// const numeroParaAdivinhar = +(prompt('Digite um número que seu amigo vai ter que acertar!'))
// let chuteDoNumero
// let acertou = false
// let tentativas = 0
// while(!acertou){
//     let chuteDoNumero = +(prompt('Digite um número cujo você acredito que foi seu amigo que digitou.'))
//     tentativas++
//     console.log(`O número que você chutou: ${chuteDoNumero}.`)
//     if(chuteDoNumero === numeroParaAdivinhar){
//         console.log(`Acertou!`)
//         console.log(`O número de tentativas foi: ${tentativas}.`)
//         acertou = true
//     } else if(chuteDoNumero > numeroParaAdivinhar){
//         console.log(`Errou! O número do chute é maior que o número escolhido pelo seu amigo!`)
//     } else {
//         console.log(`Errou! O número do chute é menor que o número escolhido pelo seu amigo!`)
//     }
// }

// ----------------------->EXERCÍCIO 2<-----------------------------
// console.log(`Lets go play boiiii!`)
// const numeroParaAdivinhar = Math.floor(Math.random() * 100) + 1
// console.log(numeroParaAdivinhar)
// let chuteDoNumero
// let acertou = false
// let tentativas = 0
// while(!acertou){
//     let chuteDoNumero = +(prompt('Digite um número cujo você acredito que foi seu amigo que digitou.'))
//     tentativas++
//     console.log(`O número que você chutou: ${chuteDoNumero}.`)
//     if(chuteDoNumero === numeroParaAdivinhar){
//         console.log(`Acertou!`)
//         console.log(`O número de tentativas foi: ${tentativas}.`)
//         acertou = true
//     } else if(chuteDoNumero > numeroParaAdivinhar){
//         console.log(`Errou! O número do chute é maior que o número escolhido pelo seu amigo!`)
//     } else {
//         console.log(`Errou! O número do chute é menor que o número escolhido pelo seu amigo!`)
//     }
// }