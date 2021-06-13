/*
 * @Author: Dilshan Niroda
 * @Date: 2021-06-13 15:32:28
 * @Last Modified by: Dilshan Niroda
 * @Last Modified time: 2021-06-13 15:41:18
 */
const express = require("express")
const mongoose = require("mongoose")
const productRouter = require("./routes/product.route")
const appError = require("./erros/error.handler")
const dotenv = require("dotenv").config({
	path: `configs/.env.${process.env.NODE_ENV}`
})

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
