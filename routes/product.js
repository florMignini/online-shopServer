
const { Router } = require("express");
const {createProduct, getProducts, getProduct, updateProduct, deleteProduct} = require('../controllers/products');
const { validateSession, validator } = require("../middlewares");
const productRouter = Router();
const {check} = require('express-validator')

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/',
[
    validateSession,
    check('name', 'name is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('price', 'price must be provided').not().isEmpty().isNumeric(),
    check('available').isBoolean(),
    validator
],
    createProduct
)
productRouter.put('/:id', [
    validateSession,
    check('price').isNumeric(),
    check('available').isBoolean(),
    validator
],
    updateProduct
)

productRouter.delete('/:id',[
    validateSession,
    validator
],
deleteProduct
)








module.exports = productRouter