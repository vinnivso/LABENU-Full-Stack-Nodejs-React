// 1.
const chalk = require('chalk')
const frase = () => {
  if(process.argv[2] !== undefined && process.argv[3] !== undefined){
    return chalk.green(`Olá, ${process.argv[2]}! Você tem ${+(process.argv[3])} anos.
    Olá, ${process.argv[2]}! Você tem ${+(process.argv[3])} anos. Em sete anos você terá ${+(process.argv[3]) + 7}`)
  }
  else {
    return chalk.red(`Era esperado o retorno de dois parâmetros.`)
  }
}
console.log (frase())