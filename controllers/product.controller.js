/*
 * @Author: Dilshan Niroda
 * @Date: 2021-06-13 15:32:21
 * @Last Modified by:   Dilshan Niroda
 * @Last Modified time: 2021-06-13 15:32:21
 */

const Product = require("../models/product.model")
const APIError = require("../erros/api.error")

const getAllProducts = (req, res, next) => {
	Product.find({}, { __v: 0 })
		.then(result => {
			res.json(result)
		})
		.catch(error => {
			next(APIError.internal("Error occured while saving data to database"))
		})
}

const getProductById = (req, res, next) => {
	const id = req.params.id
	if (!id.match(/^[0-9a-fA-F]{24}$/)) {
		return next(APIError.badRequest(`Given id is not a valid id : ${id}`))
	}
	Product.findById(id)
		.then(result => {
			if (result) {
				return res.json(result)
			}
			next(APIError.resourceNotFound("Product not found for given id"))
		})
		.catch(error => {
			next(APIError.internal("Error occured while fetching data from database"))
		})
}

const createAProduct = (req, res, next) => {
	// const product = req.body
	//request body validation logic is to here
	const product = new Product(req.body)
	product
		.save()
		.then(result => {
			return res.status(201).json(product)
		})
		.catch(error => {
			next(APIError.internal("Error occured while fetching data from database"))
		})
}

const updateAProduct = (req, res, next) => {
	const id = req.params.id
	if (!id.match(/^[0-9a-fA-F]{24}$/)) {
		return next(APIError.badRequest(`Given id is not a valid id : ${id}`))
	}
	const product = req.body
	const options = { new: true }
	Product.findByIdAndUpdate(id, product, options, (err, result) => {
		if (err) {
			return next(
				APIError.resourceNotFound(`Product not found for given id : ${id}`)
			)
		}

		if (result) {
			return res.status(200).json(result)
		}
	})
}

const deleteAProduct = (req, res, next) => {
	const id = req.params.id
	if (!id.match(/^[0-9a-fA-F]{24}$/)) {
		return next(APIError.badRequest(`Given id is not a valid id : ${id}`))
	}
	Product.findByIdAndDelete(id)
		.then(result => {
			if (result) {
				return res.status(204).send()
			}
			return next(
				APIError.resourceNotFound(`Product not found for given id : ${id}`)
			)
		})
		.catch(error => {
			next(APIError.internal("Error occured while fetching data from database"))
		})
}

const productController = {
	getAllProducts: getAllProducts,
	getProductById: getProductById,
	createAProduct: createAProduct,
	updateAProduct: updateAProduct,
	deleteAProduct: deleteAProduct
}

module.exports = productController
getProductById
