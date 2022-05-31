const express = require('express');
const productControllers = require('../controllers/ProductControllers');
// Create an express router
const router = express.Router();

// Lets refactor toute handles
router
.route("/")
.get(productControllers.getAllProducts)
.post(productControllers.createProduct)
router
.route("/new")
.get(productControllers.createProductForm);
router
.route("/:id")
.get(productControllers.getSingleProduct)
router
.route("/delete/:id")
.get(productControllers.deleteProduct);
router
.route("/edit/:id")
.get(productControllers.editProduct)
.post(productControllers.updateProduct);

module.exports = router;