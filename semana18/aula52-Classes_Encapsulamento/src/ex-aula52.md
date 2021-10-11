# --------------------Exercício 1---------------------------------
## A.Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
### Resp.: Determina que ações devem ser executadas quando da criação de um objeto. Podemos chamar as propriedades do constructor com o "this."seguido de sua respectiva propriedade associada. Quando ocorre a criação de um novo objeto que deverá receber as propriedades daquela classe associada ao constructor, podemos chamar da seguinte forma: export const "newObject" = new Object("firstConstructorProperty","secondConstructorProperty",thirdConstructorProperty).

## B.Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
### Resp.: Foi apresentado somente uma vez.

## C.Como conseguimos ter acesso às propriedades privadas de uma classe?
### Resp.: Conseguimos acesso às propriedades privadas de uma classe com "get" e "set".


# --------------------Exercício 2---------------------------------
```tsx
class UserAccount {
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
```

```tsx
class Transaction {
  private description: string;
  private value: number;
  private date: string;

  public getDescription = ():string => this.description;
  public getValue = ():number => this.value;
  public getDate = ():string => this.date;

  constructor(
    description: string,
    value: number,
    date: string) {
      this.description = description;
      this.value = value;
      this.date = date;
    }
}

export const transactionGarotoNey = new Transaction("Venda da chuteira da Topper",999666999,"2021-10-11")
```

# --------------------Exercício 3---------------------------------
