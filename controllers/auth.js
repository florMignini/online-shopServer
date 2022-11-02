
import { User } from "../models/user.js"

import pkg from "bcryptjs";
const bcryptjs = pkg;

import { jwtGenerator } from "../helpers/jwtGenerator.js";

export const loginUser = async(req, res) => {


    const {email, password} = req.body

    try {
        //email verification
        const emailExist = await User.findOne({where: {email}});
        if(!emailExist){
           return res.status(400).json({msg: `Email ${email} doesn't exist`})
        }

        //password validation
        const passwordValidate = bcryptjs.compareSync(password, loginUser.password)
        if(!passwordValidate){
           return res.status(400).json({msg: `Wrong password provided`})
        }

        const token = jwtGenerator(emailExist.id)

        res.json({
            loginUser,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: `Unable to login`
        })
    }
}