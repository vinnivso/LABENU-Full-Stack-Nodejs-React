// Acessamos os parâmetros através de sintaxes de posições em uma array.

// // 1.
// const frase = () => {
//   if(process.argv[2] !== undefined && process.argv[3] !== undefined){
//     return `Olá, ${process.argv[2]}! Você tem ${+(process.argv[3])} anos.
//     Olá, ${process.argv[2]}! Você tem ${+(process.argv[3])} anos. Em sete anos você terá ${+(process.argv[3]) + 7}`
//   }
//   else {
//     return `Era esperado o retorno de dois parâmetros.`
//   }
// }
// console.log (frase())

// // 2
// const funcoesMatematicas = () => {
//   if (
//     process.argv[2] !== undefined &&
//     process.argv[3] !== undefined &&
//     process.argv[4] !== undefined
//   ) {
//     switch (process.argv[2]) {
//       case "add":
//         return +process.argv[3] + +process.argv[4];
//       case "sub":
//         return +process.argv[3] - +process.argv[4];
//       case "mult":
//         return +process.argv[3] * +process.argv[4];
//       case "div":
//         return +process.argv[3] / +process.argv[4];
//     }
//   } else {
//     return `Por favor, insira os quatro parâmetros necessários para execução dessa função.`;
//   }
// };
// console.log(funcoesMatematicas());

// // 3;
// const funcoesListaDeTarefas = () => {
//   return [process.argv[2], process.argv[3], process.argv[4]]
// }
// console.log("Lista de Tarefas: ", funcoesListaDeTarefas())