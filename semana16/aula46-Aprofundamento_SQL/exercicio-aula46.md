# --------------------Exercício 1---------------------------------
## A.
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
- Alteração a tabela para ser retirado a coluna de salary.

## B.
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
- Entendo que seria atribuído um número máximo de 6 caracteres variáveis para o sex, sendo assim o máximo que poderia ser descrito seria "female". Além de sex estar substituindo gender.