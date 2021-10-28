# --------------------Exercício 1---------------------------------

## A.O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
### Resp.: round, equivale a cost, possuindo valores de {1-14}, porém o recomendado seria 12. O salt seria trecho do hash resultante do bcrypt.

## B. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.
```tsx
  public generateHash = (plainText: string) => {
    const cost = 12
    const salt = bcryptjs.genSaltSync(cost)
    const cipherText = bcryptjs.hashSync(plainText, salt)
    return cipherText
  }
```

## C. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs.
```tsx
  public compareHash = (
    plainText: string,
    cipherText: string
  ) => {
    const result = bcryptjs.compareSync(plainText, cipherText)
    return result
  }
```

# --------------------Exercício 2---------------------------------

## A. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
### Resp.: Primeiramente devo modificar o cadastro e posteriormente o login, já que por uma questão de fluxo, é necessário que todo login, tenha um cadastro.

## B. Faça a alteração do primeiro endpoint.
```tsx
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };

    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```