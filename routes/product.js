
const { Router } = require("express");
const {createProduct} = require('../controllers/products');
const { validateSession } = require("../middlewares");
const productRouter = Router();

productRouter.get('/')
productRouter.post('/',
    validateSession,
    createProduct
)











module.exports = productRouter