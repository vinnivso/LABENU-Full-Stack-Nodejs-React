export default class Pokemon {
  //Como estou definindo a id como opcional, logo ele precisa ser o último
  constructor(private name: string, private type1: string, private id?: string) {}
  //Função que retorna id.
  public getId = (): string | undefined => this.id;

  //Função que retorna name.
  public getName = (): string => this.name;

  //Função que retorna tags.
  public getType1 = (): string => this.type1;
}
