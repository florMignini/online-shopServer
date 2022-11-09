const Category = require('../models')

/***
 * only for admin user
 * /category
 */
const createCategory = async(req, res)=>{
    const categoryName = req.name.toUpperCase()

    const categoryExist = await Category.findOne({ where: { name: categoryName } });

    if(categoryExist){
        return res.status(400).json({msg: `category ${categoryExist} already exist`})
    }

    const newCategory = await Category.create({
        categoryName,
    })

    if(newCategory){
        res.json({
    msg: `category successfully created`
  })
    }

}

module.exports = {
    createCategory
}