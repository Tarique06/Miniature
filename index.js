require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.status(200).send('Welcome to BackEnd Application.')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})