# --------------------Exercício 1---------------------------------

## A.Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
### Resp.: Acredito que sim, pois ID's não devem ser algo facilmente manipulável.

## B.A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
### Resp.: Pq não criarmos como uma classe?

```tsx
import {v4} from "uuid"

export class IdGenerator {
  generateId = (): string => v4()
}
```

```tsx
import {v4} from "uuid"

export function generateId():string {
  return v4()
}
```