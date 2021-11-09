import { Character } from "./entities/Character"

//Estou utilizando i = para abreviar input, padrão i/o
export default function performAttack(attacker: Character, defender: Character, validator:(i:Character) => boolean) {
  if (!validator(attacker) || !validator(defender))
    throw new Error(`Invalid character`)

  if (attacker.strength > defender.defense)
    defender.life -= attacker.strength - defender.defense
}