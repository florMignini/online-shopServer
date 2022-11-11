const Product = require('../models/product.js')

/***
 * registered users only
 * POST
 * /products
 */

const createProduct = async (req, res) => {
    try {
            const userId = req.user.id
    const {name, description, price, available} = req.body

    const newProduct = await Product.create({
        name, description, price, available, userId
    })
    if(newProduct){
        res.json({
            msg: `product created successfully`,
        })
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: error.message
        })
    }

}


/***
 * public
 * GET
 * /products
 */

const getProducts = async(req, res) =>{
    try {
        const getAllProducts = await Product.findAndCountAll()
        if(getAllProducts){
            res.json({getAllProducts})
        }
    } catch (error) {
      return res.status(500).json({
            msg: error.message
        })
    }
}

/***
 * public
 * GET one product
 * /products/:id
 */

const getProduct = async(req, res) =>{
    try {
        const {id} = req.params

        const getSingleProduct = await Product.findByPk(id)
        if(getSingleProduct){
            res.json({getSingleProduct})
        }
    } catch (error) {
      return res.status(500).json({
            msg: error.message
        })
    }
}

/**
 * registered users only
 * PUT
 * /products/:id 
 */

const updateProduct = async(req, res)=>{
    try {
        const {id} = req.params
        const data = req.body
      const productToUpdate = await Product.findByPk(id)

      if(data.name){
        productToUpdate.name = data.name
      }

      if(data.description){
        productToUpdate.description = data.description
      }

      if(data.price){
        productToUpdate.price = data.price
      }

      if(data.available){
        productToUpdate.available = data.available
      }

      productToUpdate.save()

      res.json({
    msg: "product succesfully updated",
    productToUpdate,
  });
    } catch (error) {
       return res.status(500).json({
            msg: error.message
        })
   }
}


/**
 * registered users only
 * DELETE
 * /products/:id
 */
const deleteProduct = async(req, res)=>{
    try {
        const {id} = req.params

            const findProductToDelete = await Product.findByPk(id)
                if(!findProductToDelete){
                    return res.status(400).json({
                        msg:`Product does not exist`
                    })
                }
                const productToDelete = await Product.destroy({where:{
            id
        }})
        res.json({
            msg: `Product successfully deleted`,
            productToDelete
        })
    } catch (error) {
       return res.status(500).json({
            msg: error.message
        }) 
    }
}





module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}