import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

export default class UserBusiness {
  async signup(input: SignupInputDTO) {

    try {
    //Nesse caso, vou reqalizar as validações conforme o que foi estabelecido no body (req.body.name, req.body.email, req.body.password). Demonstrado na linha 10.
    if (!input.name || !input.email || !input.password) {
      throw new Error(`"name", "email" and "password" must be provided'`);
    }

    const idGenerator = new IdGenerator()

    const id: string = new IdGenerator().generateId();

    const hashManager = new HashManager()
    const cypherPassword = await hashManager.hash(input.password);

    const user:user = {
      id,
      name: input.name,
      email: input.email,
      password: cypherPassword
    }
    await insertUser(user)

    const token: string = generateToken({ id });

    } catch (error) {

    }
  }
}
