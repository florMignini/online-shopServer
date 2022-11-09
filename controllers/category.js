const Category = require('../models/category.js')

/***
 * only for admin user
 * POST
 * /categories
 */
const createCategory = async(req, res)=>{

   try {

        const categoryName = req.body.name
        const categoryNameToUpper = categoryName.toUpperCase()
           const categoryExist = await Category.findOne({ where: { name: categoryNameToUpper } });

         if(categoryExist){
              return res.status(400).json({msg: `category ${categoryExist.dataValues.name} already exist`})
          }
      
          const newCategory = await Category.create({
              name: categoryNameToUpper,
          })

          if(newCategory){
              res.json({
          msg: `category successfully created`
        })
          }

  

   } catch (error) {
    console.log(error)
    return res.status(500).json({error: error.message})
   }


}

/***
 * public
 * GET
 * /categories
 */
const getCategories = async(req, res) =>{
    try {
        const totalCategories = await Category.findAndCountAll()
        if(totalCategories){
            res.status(200).json({
                totalCategories
            })
        } 
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: error.message})
    }
}


/***
 * public
 * GET
 * /categories/:id
 */
const getCategory = async(req, res) =>{
    try {
        const {id} = req.params
        const findCategory = await Category.findByPk(id)
        if(findCategory){
            res.status(200).json({
                findCategory
            })
        } 
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: error.message})
    }
}

/***
 * only for admin user
 * PUT
 * /categories/:id
 */

    const updateCategory = async(req, res)=>{
        const {id} = req.params
       const {name} = req.body
       try {

        const updatedCategory = await Category.findByPk(id)

        if(name){
            updatedCategory.name = name.toUpperCase()
        }
        updatedCategory.save()
        res.json({
            msg: "category succesfully updated"
        });



       } catch (error) {
         console.log(error)
        return res.status(500).json({error: error.message})
       }
    }



/***
 * only for admin user
 * DELETE
 * /categories/:id
 */


    const deleteCategory = async(req, res) =>{
       try {
         const {id} = req.params;
        const findCategory = await Category.findOne({where:{
            id
        }})

        if(findCategory){
            const deletedCategory = await Category.destroy({where: {id}})

           return res.status(200).json({
            msg: `Category successfully deleted`,
            deletedCategory
           })
        }
        res.json({
            msg: ` the category does not exist`
        })
       } catch (error) {
        return res.status(500).json({error: error.message})
       }


    }






module.exports = {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
}