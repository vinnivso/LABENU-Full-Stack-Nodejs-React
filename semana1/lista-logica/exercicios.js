// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite o valor da altura'))
  const largura = Number(prompt('Digite o valor da largura'))
  const area = altura * largura
  console.log(area)
  return area
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite o seu ano de nascimento'))
  const idade = anoAtual - anoNascimento
  console.log(idade)
  return idade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso / Math.pow(altura, 2)).toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const userName = prompt('Dear user, insert your name.')
  const userAge = Number(prompt('Dear user, insert your age.'))
  const userEmail = prompt('Dear user, insert your email adress')
  const phrase = `Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`
  console.log(phrase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const userColor1 = prompt('Dear user, insert your favorite color.')
  const userColor2 = prompt('Dear user, insert your favorite color.')
  const userColor3 = prompt('Dear user, insert your favorite color.')
  const userColors = [userColor1, userColor2, userColor3]
  console.log(userColors)
  return userColors
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //Analogo ao exercicio de Operações
  const userArray = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = userArray
  console.log(array)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual com quatro digitos'))
  const anoNascimento = Number(prompt('Digite seu ano de nascimento'))
  const anoCarteira = Number(prompt('Digite o ano de emissão da carteira de identidade'))
  const idade = anoAtual - anoNascimento
  const idadeCarteira = anoAtual - anoCarteira
  const menorIgualVinte = idade <= 20 && idadeCarteira >= 5
  const entreVinteECinqueta = idade > 20 && idade <= 50 && idadeCarteira >= 10
  const maiorCinquenta = idade > 50 && idadeCarteira >= 15
  console.log(menorIgualVinte || entreVinteECinqueta || maiorCinquenta)
  // Não é possível executar o return, sendo que essa função possui mais de uma saída
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const userName = prompt('Você tem mais de 18 anos? Responda com "sim" ou "nao".')
  const userScholarity = prompt('Você possui ensino médio completo? Responda com "sim" ou "nao".')
  const userAvailability = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Responda com "sim" ou "nao".')
  console.log(userName.includes('sim') && userScholarity.includes('sim') && userAvailability.includes('sim'))
  return checaValidadeInscricaoLabenu 
}