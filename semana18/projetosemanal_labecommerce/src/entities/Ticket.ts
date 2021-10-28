import { Product } from "./Product";

export class Ticket extends Product {
  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    readonly origin: string,
    readonly destination: string
  ) //Como estamos incluindo mais parâmetros para o constructor, será necessário repetir os parâmetros definidos anteriormente em Product.
  {
    super(id, name, description, price); //Parâmetros que serão necessários serem acessoados da classe Product.
    if (typeof origin !== "string")
      throw new Error("Type of 'origin' must be a string");
    if (typeof destination !== "string")
      throw new Error("Type of 'destination' must be a string");
  }
}
