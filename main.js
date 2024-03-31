import express from "express"
import cors from "cors"

const PORT = 3000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send("Oin linda")
})

app.listen(PORT, "0.0.0.0", () => {
    console.log("Rodando em 3000");
})
