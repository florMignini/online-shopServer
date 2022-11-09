


 const validateRole = (req, res, next) => {

const {rol, name} = req.user
    if(!req.user){
        return res.status(500).json({
            msg: `Unexpected error :S`
        })
    }

    console.log(rol, name)
    if(rol !== 'ADMIN_ROLE'){
        return res.status(500).json({
            msg: `User ${name} is not allow to perform this operation`
        })
    }

    next()
}

module.exports = validateRole