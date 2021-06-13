const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

const product = mongoose.model("products", productSchema)

module.exports = product
