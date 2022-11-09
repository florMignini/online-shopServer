


 const validateRole = (req, res, next) => {

const {rol, name} = req.user
    if(!req.user){
        return res.status(500).json({
            msg: `Unexpected error :S`
        })
    }

    if(rol !== 'ADMIN_ROLE'){
        return res.status(500).json({
            msg: `Only ADMIN user are allow to perform this operation`
        })
    }

    next()
}

module.exports = validateRole