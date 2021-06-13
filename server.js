const express = require("express")
const mongoose = require("mongoose")
const productRouter = require("./routes/product.route")
const appError = require("./erros/error.handler")
const dotenv = require("dotenv").config()

const app = express()

app.use(express.json())

//initial DB
require("./init.db")()

/**
 * Routes
 */
app.use("/api/products", productRouter)

/**
 * Error handling middlewares
 */
app.use(appError.routeError)
app.use(appError.errorHandler)

console.log(dotenv.parsed)

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
