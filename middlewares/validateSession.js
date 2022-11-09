const jwt = require('jsonwebtoken')
const {User} = require('../models/user.js')

const validateSession = async(req, res, next) => {


    const token = req.header('auth-token')
    if(!token){
        res.status(401).json({
            msg: `No token provided`
        })
    }
    try {
       const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

       const authenticatedUser = await User.findByPk(uid) 
       const {password, ...data} = authenticatedUser.dataValues

       
       req.user = data
       req.uid = uid
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: `Provide a valid token please`
        })
    }
}

module.exports = validateSession