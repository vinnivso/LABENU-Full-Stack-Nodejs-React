//2
const chalk = require('chalk');
const funcoesMatematicas = () => {
  if (
    process.argv[2] !== undefined &&
    process.argv[3] !== undefined &&
    process.argv[4] !== undefined
  ) {
    switch (process.argv[2]) {
      case "add":
        return chalk.green(+process.argv[3] + +process.argv[4]);
      case "sub":
        return chalk.green(+process.argv[3] - +process.argv[4]);
      case "mult":
        return chalk.green(+process.argv[3] * +process.argv[4]);
      case "div":
        return chalk.green(+process.argv[3] / +process.argv[4]);
    }
  } else {
    return chalk.red(`Por favor, insira os quatro parâmetros necessários para execução dessa função.`)
  }
};
console.log(funcoesMatematicas());