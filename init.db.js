/*
 * @Author: Dilshan Niroda
 * @Date: 2021-06-13 15:32:34
 * @Last Modified by:   Dilshan Niroda
 * @Last Modified time: 2021-06-13 15:32:34
 */
const mongoose = require("mongoose")

/**
 * Database configurations
 *
 */
module.exports = () => {
	mongoose
		.connect(process.env.DATABASE_URI, {
			user: process.env.DATABASE_USERNAME,
			pass: process.env.DATABASE_PASSWORD,
			dbName: process.env.DATABASE_NAME,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		})
		.then(() => {
			console.log("Database connected")
		})
		.catch(err => {
			console.log(err.message)
		})

	mongoose.connection.on("connected", () => {
		console.log("Mongoose connected to database")
	})

	mongoose.connection.on("error", err => {
		console.log(err.message)
	})

	mongoose.connection.on("disconnected", err => {
		console.log("Mongoose connection is disconnected")
	})

	process.on("SIGINT", () => {
		mongoose.connection.close(() => {
			console.log("Mongoose connection is disconnected due to app termination")
			process.exit(0)
		})
	})
}
