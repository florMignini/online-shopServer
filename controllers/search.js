const { User, Product, Category} = require('../models')
const { Op } = require("sequelize");


const allowedCollections = [
    'category', 
    'user',
    'product'
]

const searchUsers = async(item, res) => {

    if(!isNaN(item)){
        const userByID = await User.findByPk(item) 
       return res.json({
        result: userByID ? [userByID] : []
    })
    }

    const regex = new RegExp(item, 'i')
    const userByNameOrEmail = await User.findAndCountAll({
  where: {
    [Op.or]: [
      { name: regex },
      { email: regex }
    ]
  }
});
    res.json({
        result: userByNameOrEmail
    })
}




const search = async( req, res )=>{

    const {collection, item} = req.params

    if(!allowedCollections.includes(collection)){
      return  res.status(400).json({
        msg: `${collection} is not allowed search`
    })
    }


    switch (collection) {
        case 'user':
            searchUsers(item, res)
            break;
        case 'category':
            
        break;
        case 'product':
            
        break;
        default:
            res.status(500).json({
                msg: `Server error`
            })
            break;
    }
    
}

module.exports = search