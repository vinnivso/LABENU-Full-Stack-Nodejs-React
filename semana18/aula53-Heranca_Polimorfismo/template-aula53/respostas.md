# --------------------Exercício 1 - HERANÇA--------------------------------

## A.Seria possível imprimir a senha (password) atrelada a essa instância?

### Resp.: É possível, caso eu mande executar um console.log referente ao user criado, porém não é possível demonstrar somente a senha.

## B. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

### Resp.: É apresentada somente uma vez.

# --------------------Exercício 2 - HERANÇA--------------------------------

## A.Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?

### Resp.: É apresentada somente uma vez.

## B. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

### Resp.: É apresentada somente uma vez. Isso ocorre porque ele utiliza o User, e no User é abordado o console.log para falar "Chamando o constructor da classe User".

# --------------------Exercício 3 - HERANÇA--------------------------------

## A. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

### Resp.: Sim, pq ela está somente como "private", não sendo possível uma alteração aberta para ela, porém ao criar uma instância e passar os parâmetros necessários e abordados ao constructor, quando eu executar o console.log para a respectiva instância, será demonstrado os seus respectivos valores.

# --------------------Exercício 4 - HERANÇA--------------------------------

```tsx
const primeiroCustomer = new Customer(
  "primeiroCustomerId",
  "primeiroCustomer@mail.com",
  "DibraldinhoCustomer",
  "123456dibraldinhocustomer",
  "1111-2222-3333-4444"
);
primeiroCustomer.introduceYourself();
console.log(primeiroCustomer);
console.log(primeiroCustomer.introduceYourself());
```

# --------------------Exercício 5 - HERANÇA--------------------------------

```tsx
public introduceYourself(): string {
  return `Olá, sou ${this.name}. Bom dia!`
}
```
