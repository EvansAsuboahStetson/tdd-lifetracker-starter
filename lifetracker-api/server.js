//initialize express
const express = require("express")
//setting up cors
const cors = require("cors")
//initialize morgan for console logs
const morgan = require("morgan")

const { PORT } = require("./config")

const authRoutes = require("./routes/auth")
const nutritionRoutes = require("./routes/nutrition")


//Setting up Not Found Error
const {BadRequestError,NotFoundError} = require("./utils/errors")

// set up my app with express
const app = express()

app.use(cors())
//pass incoming request bodies with JSON
app.use(express.json())

app.use(morgan("tiny"))

app.use("/auth", authRoutes)
app.use("/nutrition", nutritionRoutes)


app.use((req, res, next) => {
    return next(new NotFoundError)
})
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message,status}
    })
})


app.listen(PORT, () => {
    console.log(`Server running https://localhost:${PORT}`)
})