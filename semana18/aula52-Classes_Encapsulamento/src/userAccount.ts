import { Transaction } from "./transaction";

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  public getCpf = ():string => this.cpf
  public getName = ():string => this.name
  public getAge = ():number => this.age
  public getBalance = ():number => this.balance
  public getTransactions = ():Transaction[] => this.transactions

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

export const garotoNey = new UserAccount("12345678901","Neymar",666)