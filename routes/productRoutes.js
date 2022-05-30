const express = require('express');
const productControllers = require('../controllers/ProductControllers');
// require('dotenv').config();
// const mongoose = require('mongoose');
// Create an express router
const router = express.Router();

// Lets refactor toute handles
router
.route("/")
.get(productControllers.getAllProducts)
.post(productControllers.createProduct);
router
.route("/new")
.get(productControllers.createProductForm);
router
.route("/:id")
.get(productControllers.getSingleProduct)
.post(productControllers.updateProduct)
router
.route("/:id/delete")
.get(productControllers.deleteProduct);
router
.route("/:id/edit")
.get(productControllers.editProduct);

module.exports = router;