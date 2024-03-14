const express = require('express');
const router = express.Router();
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productcontrollers');

// Route to create a new product
router.post('/', createProduct);

// Route to get all products
router.get('/', getAllProducts);

// Route to get a single product by ID
router.get('/:id', getProductById);

// Route to update a product by ID
router.put('/:id', updateProduct);

// Route to delete a product by ID
router.delete('/products/:id', deleteProduct);

module.exports = router;
