import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

export const jwtGenerator = (uid) => {
    return new Promise ((resolve, reject)=>{
        const payload = {uid}

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY,{
            expiresIn: '1h'
        }, (err, token)=>{
            if(err){
                reject(`unable to generate token`)
            }else{
                resolve(token)
            }
        })
    })
}