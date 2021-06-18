// ------------------ Exercícios de INTERPRETAÇÃO de Código ------------------------
//01
// let array
// console.log('a. ', array)
// //RESOLUÇÃO: Somente declarei uma variável e não é dessa maneira que faço uma array, "[]".

// array = null
// console.log('b. ', array)
// //RESOLUÇÃO: Estou somente inserindo um valor "null" para a variável declarada como "array".

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //RESOLUÇÃO: Dessa vez, estou declarando fazendo com que a variável "array" se torne uma lista com "n" elementos. Utilizando o ".length" estou solicitando que o console imprima o comprimento dessa lista.

// let i = 0
// console.log('d. ', array[i])
// //RESOLUÇÃO: Confuso, mas acredito que, como estamos mencionando a variável array, definida como = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], uma vez que dizemos let i = 0 (Declarando um valor 0 para a variável "i"), porém no console.log definimos "array[i]", ele vai puxar a posição 0 da variável array.

// array[i+1] = 19
// console.log('e. ', array)
// //RESOLUÇÃO: Ao realizarmos "array[i+1]=19", estamos dizendo o mesmo que "array[0+1]=19", portando, estamos passando a instrução para o javascript de que, na seguinte lista [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], atrelado a variável array. No índice [1], assuma um novo valor de 19, trocando seu antigo valor, que era 4.

// const valor = array[i+6]
// console.log('f. ', valor)
// //RESOLUÇÃO: Bem parecido com o anterior, só que nesse caso, estamos chamando uma posição em array. Estamos definindo que valor = índice de um elemento em array. Portanto, estamos afirmando que valor = array[0+6] --> valor = array[6], logo valor = 9.

//02
// const frase = prompt("Digite uma frase") //Subi num ônibus em Marrocos
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// // RESOLUÇÃO: "frase.toUpperCase()", a frase digitada pelo usuário será retornado em caixa alta, logo: "SUBI NUM ÔNIBUS EM MARROCOS". .replaceAll("A", "I")" atrelado ao frase.toUpperCase(), faz com que substitua todos os "A" por "I". frase.length vai me retornar o comprimento daquela frase, lembrando que os espaçamentos também são constados. Sendo assim, a frase vai ficar: "SUBI NUM ÔNIBUS EM MIRROCOS". 

// ------------------ Exercícios de ESCRITA de Código ------------------------------
// //01
// const nome = prompt('Digite seu nome')
// const email = prompt('Digite seu e-mail')
// const frase = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}.`
// console.log(frase)

// //02
// let comidasPreferidas = ['pizza', 'panettone salgado', 'esfiha', 'cajuzinho', 'uva']
// console.log(comidasPreferidas)
// let fraseComidasPreferidas = `Essas são minhas comidas preferidas: 
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}`
// console.log(fraseComidasPreferidas)
// const userQuestion = prompt('Por favor, inserir apenas um alimento de sua preferência')
// comidasPreferidas[1] = userQuestion
// console.log(comidasPreferidas)

// //03
// let listaDeTarefas = []
// const userQuestion1 = prompt('Please insert a (1) primary task, which you have to do')
// const userQuestion2 = prompt('Please insert a (2) secondary task, which you have to do')
// const userQuestion3 = prompt('Please insert the (3) last task, which you have to do')
// listaDeTarefas = [userQuestion1, userQuestion2, userQuestion3]
// console.log(listaDeTarefas)
// let taskDone = Number(prompt('Dear user, please insert the index of a previously mentioned task that has already been done (1 - 3)'))
// listaDeTarefas.splice((taskDone - 1), 1)
// console.log(listaDeTarefas)

// ------------------ DESAFIOS -----------------------------------------------------
// //01
//.split() Separa o "input da array" para cada elemento, seguindo um determinado argumento. No caso abaixo, foi estabelecido a criação de uma array por espaço que o usuário realizar entre as palavras.
// const userPhrase = prompt('Dear user, insert a phrase')
// arrayUserPhrase = userPhrase.split(' ')
// console.log(arrayUserPhrase)

// //02
// const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// const checkArray = array.indexOf("Abacaxi",0)
// console.log(checkArray, array.length)