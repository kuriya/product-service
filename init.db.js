const mongoose = require("mongoose")

/**
 * Database configurations
 *
 */
module.exports = () => {
	mongoose
		.connect("mongodb+srv://cluster0.zcf6l.mongodb.net", {
			user: "dilshann",
			pass: "Nima@1989",
			dbName: "productService",
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
