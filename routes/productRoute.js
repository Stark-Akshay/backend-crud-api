
const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const {
    getProducts, 
    getProduct, 
    createProduct,
    updateProduct,
    deleteProduct,

} = require('../controllers/productController');

//get all the products
router.get('/',getProducts);

//get one product
router.get('/:id', getProduct);

//create
router.post('/', createProduct);

//update
router.put('/:id', updateProduct);

//delete
router.delete('/:id', deleteProduct);

module.exports = router