import jwt from 'jsonwebtoken'


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