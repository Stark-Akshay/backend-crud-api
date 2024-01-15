const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const getProducts = asyncHandler(async (req,res)=> {
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

const getProduct = asyncHandler(async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findOne({_id:id})
        res.status(200).json(product);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

const createProduct = asyncHandler(async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    try{
        const {id} = req.params;
        const newID = {"_id":id};
        const product = await Product.findOneAndUpdate(newID,req.body);
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedProduct = await Product.findOne(newID);
        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }

        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}