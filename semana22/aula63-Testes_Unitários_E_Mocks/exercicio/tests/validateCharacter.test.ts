import validateCharacter from '../src/validateCharacter'

describe('Teste Unitário da f(x) validateCharacter', () => {
  test('Name: String Vazia', () => {
    expect(validateCharacter({name:'', life: 1500, strength: 1000, defense: 1000})).toBe(false)
  })
  test('Life: ZERO', () => {
    expect(validateCharacter({name:'Manito', life: 0, strength: 1000, defense: 1000})).toBe(false)
  })
  test('Strength: ZERO', () => {
    expect(validateCharacter({name:'Manito', life: 1500, strength: 0, defense: 1000})).toBe(false)
  })
  test('Defense: ZERO', () => {
    expect(validateCharacter({name:'Manito', life: 1500, strength: 1000, defense: 0})).toBe(false)
  })
  test('Life: NEGATIVE, Strength: NEGATIVE, Defense: NEGATIVE', () => {
    expect(validateCharacter({name:'Manito', life: -1500, strength: 1000, defense: 1000})).toBe(false)
    expect(validateCharacter({name:'Manito', life: 1500, strength: -1000, defense: 1000})).toBe(false)
    expect(validateCharacter({name:'Manito', life: 1500, strength: 1000, defense: -1000})).toBe(false)
  })
  test('Character Validated', () => {
    expect(validateCharacter({name:'Manito', life: 1500, strength: 1000, defense: 1000})).toBe(true)
  })
})