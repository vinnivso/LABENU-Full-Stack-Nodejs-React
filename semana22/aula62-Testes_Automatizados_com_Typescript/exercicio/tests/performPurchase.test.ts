import performPurchase, { User } from '../src/performPurchase'

describe('Executing tests to performPurchase', () => {
  test('Verificando VALOR DA COMPRA MENOR que o SALDO',() => {
    const user: User = {
      name:'Manito',
      balance: 666
    }
    expect(performPurchase(user, 50)).toStrictEqual({user, balance:50})
    expect(performPurchase(user, 666)).toEqual({user, balance:0})
    expect(performPurchase(user, 110)).toBeUndefined()
  })

  test('Verify Ages', () => {

  })

})