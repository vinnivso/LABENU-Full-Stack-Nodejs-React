import cors from "cors"
import express from "express"

export const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3306 // Acredito que fazer a chamada direta no listen, poderia ser mais simples, porém vou implementar do jeito que  foi demonstrado na sugestão da Lbn_Lua.
app.listen(port, ()=>console.log(`Server is running on port ${port}`))