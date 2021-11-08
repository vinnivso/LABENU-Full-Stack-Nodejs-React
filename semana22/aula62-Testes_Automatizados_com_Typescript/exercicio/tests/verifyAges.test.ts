import verifyAges, { Casino, LOCATION, User } from "../src/verifyAges"


describe('Executing tests to verifyAges',() => {
  const casino1: Casino = {
    name:'Doce Mania',
    location:LOCATION.BRAZIL
  }
  const casino2: Casino = {
    name:'Sweet Home Alabama',
    location:LOCATION.EUA
  }

  test('', () => {
    // expect(verifyAges(casino1))
  })
})