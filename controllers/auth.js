
const { User } = require("../models/user.js")

const bcryptjs = require("bcryptjs");


const { jwtGenerator } = require("../helpers/jwtGenerator.js");

 const loginUser = async(req, res) => {


    const {email, password} = req.body

    try {
        //email verification
        const emailExist = await User.findOne({where: {email}});
        if(!emailExist){
           return res.status(400).json({msg: `Email ${email} doesn't exist`})
        }

        //password validation
        const passwordValidate = bcryptjs.compareSync(password, emailExist.password)
        if(!passwordValidate){
           return res.status(400).json({msg: `Wrong password provided`})
        }

        const token = await jwtGenerator(emailExist.id)
        if(emailExist){
            console.log(token)
            const {password, ...userRegistered} = emailExist.dataValues
            res.json({
                userRegistered,
                token
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: `Unable to login`
        })
    }
}

module.exports = {loginUser}