const Product = require('../models')

//create a product

const createProduct = async (req, res) => {
    const {name, description, price, available} = req.body

    const newProduct = await Product.create({
        name, description, price, available
    })
    if(newProduct){
        res.json({
            msg: `product created successfully`,
        })
    }
}

//get all products
module.exports = {
    createProduct
}