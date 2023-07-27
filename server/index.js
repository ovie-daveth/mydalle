const express = require('express');
const dotenv = require("dotenv")
const cors = require("cors")
const router = require("./routing/openAiAPI.js")

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/v1/dalle", router);


app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from Dalle.E" })
})

app.listen(8000, () => console.log("server has started on 8000"))
