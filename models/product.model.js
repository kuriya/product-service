/*
 * @Author: Dilshan Niroda
 * @Date: 2021-06-13 15:33:07
 * @Last Modified by:   Dilshan Niroda
 * @Last Modified time: 2021-06-13 15:33:07
 */
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
