// //01
//a
let minhaString: string = "caracteres";
//Caso coloque um valor númerico nessa minha variável, definida para receber valores string, será apresentado a seguinte mensagem de erro: "Type number is not assignable to type string."
//minhaString = 5

//b
let meuNumero: number | string = 1;
meuNumero = "batata";

//c
type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: string | number;
};

enum FavoriteColors {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  LIGHTBLUE = "lightblue",
  BLUE = "blue",
  PURPLE = "purple",
}

const primeiroIndividuo: Pessoa = {
  nome: "Fulano",
  idade: 666,
  corFavorita: FavoriteColors.RED,
};
const segundoIndividuo: Pessoa = {
  nome: "Ciclano",
  idade: 333,
  corFavorita: FavoriteColors.LIGHTBLUE,
};
const terceiroIndividuo: Pessoa = {
  nome: "Eclano",
  idade: 111,
  corFavorita: FavoriteColors.GREEN,
};

// //02
//a
function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados = numeros.sort((a, b) => a - b);
  let soma: number = 0;
  for (let num of numeros) {
    soma += num;
  }
  type rawData = {
    maior: number;
    menor: number;
    media: number;
  };
  const estatisticas: rawData = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };
  return estatisticas;
}
console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]));

//b - Está definido na demonstração anterior.

//c Não entendi o C, vai ser CTRL+C e CTRL+V do primeiro?

// //03
//a
type rawpost = {
  autor: string;
  texto: string;
};

const posts: rawpost[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

//b
function buscarPostsPorAutor(autor: rawpost[], autorID?: string) {
  if (autorID === undefined) {
    return autor;
  }
  return autor.filter((item) => {
    return item.autor === autorID;
  });
}
console.log(buscarPostsPorAutor(posts,"Dobby"))