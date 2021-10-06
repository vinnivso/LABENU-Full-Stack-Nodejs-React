# --------------------Exercício 1---------------------------------

## A.

- VARCHAR , utilizamos para caracteres que possam sofrar alterações, ou seja,variáveis.
- PRIMARY KEY, utilizado para chave de ID ÚNICA.
- NOT NULL, inserido para deixar claro que a informação é obrigatória.
- DATE, usado para data.

## B.

SHOW DATABASES/TABLES, podem trazer as informações de cada database ou tabela, desde que sejam existentes no schema.

## C

DESCRIBE Actor traz informações sobre a estruturação da tabela. Sendo assim, mais legível que o comando SQL usado para sua criação.

# --------------------Exercício 2---------------------------------

## A.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```

## B.

> Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

Automaticamente detecta e impede a criação de uma entrada com PRIMARY KEY existente.

## C.

> Error Code: 1136. Column count doesn't match value count at row 1

Apesar de todas as informações necessárias terem sido passadas, não foram passadas as respectivas colunas entre parênteses da primeira linha do comando.

## D.

> Error Code: 1364. Field 'name' doesn't have a default value

Era esperado mais um campo de dado name para que um novo item na tabela Actor fosse criado.

## E.

> Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

O dado do campo birth_date precisa ser uma string no formato "YYYY-MM-DD"
Y de year (ano), M de month (mês) e D de day (dia)

## F.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "John Doe",
  600000,
  "1955-10-02",
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Jane Doe",
  1000000,
  "1966-12-25",
  "female"
);
```

# --------------------Exercício 3---------------------------------

## A.

```sql
SELECT * FROM Actor WHERE gender = "female";
```

## B.

```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```

## C.

A pesquisa é válida, mas não é encontrado nenhum actor.

## D.

```sql
SELECT id, name, salary from Actor WHERE salary < 500000;
```

## E.

> Error Code: 1054. Unknown column 'nome' in 'field list'

O nome da coluna 'nome' não existe, porque na criação da tabela foi utilizado 'name'.

# --------------------Exercício 4---------------------------------

## A.

Selecione tudo da tabela Actor, onde o nome comece com A ou J, e tenha o salário maior que 300000.

## B.

```sql
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

## C.

```sql
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%");
```

## D.

```sql
SELECT * FROM Actor
WHERE (
	(name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%")
)
AND salary BETWEEN 350000 AND 900000;
```

# --------------------Exercício 5---------------------------------

## A.

```sql
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);
```

## B.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

## C.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

## D.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);
```

## E.

```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "Teste",
  "Sinopse de teste",
  "2021-05-24",
  5
);
```

# --------------------Exercício 6---------------------------------

## A.

```sql
SELECT id, name, synopsy FROM Movie
WHERE id = "001";
```

## B.

```sql
SELECT * FROM Movie
WHERE name = "Teste";
```

## C.

```sql
SELECT id, name, synopsy FROM Movie
WHERE rating > 7;
```

# --------------------Exercício 7---------------------------------

## A.

```sql
SELECT * FROM Movie
WHERE name like "%vida%";
```

## B.

```sql
SELECT * FROM Movie
WHERE name like "%vida%" OR synopsy like "%vida%";
```

## C.

```sql
SELECT * FROM Movie
WHERE release_date <= CURRENT_DATE();
```

## D.

```sql
SELECT * FROM Movie
WHERE (
  release_date <= CURRENT_DATE() AND
  (name like "%vida%" OR synopsy like "%vida%") AND
  rating > 7
);
```
