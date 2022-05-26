const express = require('express');
const productControllers = require('../controllers/ProductControllers');
// require('dotenv').config();
// const mongoose = require('mongoose');
// Create an express router
const router = express.Router();
router.set('view engine','jsx');
router.engine('jsx',require('express-react-views').createEngine());

// Lets refactor toute handles
router
.route("/")
.get('index',{products: productControllers.getAllProducts})
.post(productControllers.createProduct);
// router.
// .route("/new")
// .get('createForm',{})
router
.route("/:id")
.get(productControllers.getSingleProduct)
.patch(productControllers.updateProduct)
.delete(productControllers.deleteProduct);

module.exports = router;