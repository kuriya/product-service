/*
 * @Author: Dilshan Niroda
 * @Date: 2021-06-13 15:32:58
 * @Last Modified by:   Dilshan Niroda
 * @Last Modified time: 2021-06-13 15:32:58
 */
const express = require("express")
const router = express.Router()
const productController = require("../controllers/product.controller")

/**
 * Get all products
 */
router.get("/", productController.getAllProducts)

/**
 * Get product by id
 */
router.get("/:id", productController.getProductById)

/**
 * Creating a new product
 */
router.post("/", productController.createAProduct)

/**
 * Update a product
 */
router.patch("/:id", productController.updateAProduct)

/**
 * Delete a product
 */
router.delete("/:id", productController.deleteAProduct)

module.exports = router
