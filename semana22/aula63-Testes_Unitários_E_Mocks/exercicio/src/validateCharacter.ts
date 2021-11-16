import { Character } from "./entities/Character"

//Estou utilizando i = para abreviar input, padrão i/o
export default function validateCharacter(i:Character):boolean {
  if (!i.name || i.life === undefined || i.strength === undefined || i.defense === undefined) return false //Nesse caso, como estou trabalhando com boolean, se eu retirar o return na minha sentença, o código vai quebrar.
  if (i.life <= 0|| i.strength <= 0|| i.defense <= 0) return false //Nesse caso, como estou trabalhando com boolean, se eu retirar o return na minha sentença, o código vai quebrar.

  return true
}