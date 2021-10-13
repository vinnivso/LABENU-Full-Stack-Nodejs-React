import app from "./app"
import { User } from "./classes/user"
import { Customer } from "./classes/customer"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


const primeiroUser = new User("primeiroUserId", "primeiroUser@mail.com", "DibraldinhoUser", "123456dibraldinhouser")
console.log(primeiroUser)

const primeiroCustomer = new Customer("primeiroCustomerId", "primeiroCustomer@mail.com", "DibraldinhoCustomer", "123456dibraldinhocustomer","1111-2222-3333-4444")
primeiroCustomer.introduceYourself()
console.log(primeiroCustomer)
console.log(primeiroCustomer.introduceYourself())