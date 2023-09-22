require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRouter = require('./routes/todoRoutes')

const app = express()

app.use(cors())
app.use(cors({
    origin: [],
    methods: ["GET", "POST", "PATCH", "DELETE"]
}))


app.use(express.json())
app.use(express.json({limit: '50mb'}));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/test', (req, res) => {
    res.send("okay!")
})
app.use('/api/todo', todoRouter)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })