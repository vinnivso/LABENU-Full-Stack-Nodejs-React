// EXERCÍCIO 01
function inverteArray(array) {
  const inversao = []
  for(let i = array.length - 1; i >= 0; i--) {
    inversao.push(array[i])
  }
  return inversao
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const criarArrayParesElevadosAoQuadrado = array.filter((elemento) => {
    return elemento % 2 === 0
  }).map((elemento) => {
    return Math.pow(elemento, 2)
  })
  return criarArrayParesElevadosAoQuadrado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const criarArrayPares = array.filter((elemento) => {
    return elemento % 2 ===0
  })
  return criarArrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const resposta = [(booleano1 && booleano2 && !booleano4), ((booleano1 && booleano2) || !booleano3), (booleano2 || booleano3) && (booleano4 || booleano1), (!(booleano2 && booleano3) || !(booleano1 && booleano3)), (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))]
  return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let array = []
  for(let i = 0; i < n; i++) {
    array.push(2*i)
  }
  return array
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b && b !== c){
    return 'Escaleno'
  } else if(a === b && b === c) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  return {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
    diferenca: Math.max(num1, num2) - Math.min(num1, num2)
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  array.sort((a,b) => a - b)
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
 const pelicula = {
  nome: 'O Diabo Veste Prada',
  ano: 2006,
  diretor: 'David Frankel',
  atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
 return pelicula
}

// EXERCÍCIO 13
function imprimeChamada() {
  const pelicula = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   let atoresTexto = ''
   for(let i = 0; i < pelicula.atores.length; i++){
     if(i === pelicula.atores.length - 1){
       atoresTexto += pelicula.atores[i]
     } else {
       atoresTexto += pelicula.atores[i] + ', '
     }
   }
  return `Venha assistir ao filme ${pelicula.nome}, de ${pelicula.ano}, dirigido por ${pelicula.diretor} e estrelado por ${atoresTexto}.`
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * lado1) + (2 * lado2),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const soTemAdulto = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
  return soTemAdulto
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const soTemCrianca = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  })
  return soTemCrianca
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const elementoDobrado = array.map((elemento) => {
    return elemento * 2
  })
  return elementoDobrado
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const elementoDobradoString = array.map((elemento) => {
    return (elemento * 2).toString()
  })
  return elementoDobradoString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const ParOuImpar = array.map((elemento) => {
    if(elemento % 2 === 0){
      return `${elemento} é par`
    } else {
      return `${elemento} é ímpar`
    }
  })
  return ParOuImpar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const autorizacoes = pessoas.filter((elemento) => {
    return elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60
  })
  return autorizacoes
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizadas = pessoas.filter((elemento) => {
    return elemento.altura < 1.5 || elemento.idade <= 14 || elemento.idade >= 60
  })
  return naoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  for (let i = 0;i < consultasNome.length;i++) {
    for (let j = 0;j < consultasNome.length - i - 1;j++) {
      if (consultasNome[j].nome > consultasNome[j + 1].nome) {
        const temp = consultasNome[j]
        consultasNome[j] = consultasNome[j + 1]
        consultasNome[j + 1] = temp
      }
    }
  }
  return consultasNome
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  for (let i = 0;i < consultasData.length;i++) {
    for (let j = 0;j < consultasData.length - i - 1;j++) {

      const arrayData1 = consultasData[j].dataDaConsulta.split('/')
      const dia1 = Number(arrayData1[0])
      const mes1 = Number(arrayData1[1])
      const ano1 = Number(arrayData1[2])

      const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
      const dia2 = Number(arrayData2[0])
      const mes2 = Number(arrayData2[1])
      const ano2 = Number(arrayData2[2])

      const data1 = new Date(ano1, mes1 - 1, dia1).getTime()
      const data2 = new Date(ano2, mes2 - 1, dia2).getTime()

      if (data1 > data2) {
        const temp = consultasData[j]
        consultasData[j] = consultasData[j + 1]
        consultasData[j + 1] = temp
      }
    }
  }
  return consultasData
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  contas.forEach((conta) => {
    let totalDeCompras = 0
    conta.compras.forEach((valor) => {
      totalDeCompras += valor
    })
    conta.saldoTotal -= totalDeCompras
  })
  return contas
}
