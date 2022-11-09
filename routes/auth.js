const Router = require('express')

const { loginUser } = require("../controllers/auth.js");
const {validateSession, validateRole} = require('../middlewares/validateRole.js');

 const authRouter = Router();

authRouter.post('/login',
loginUser)

module.exports = authRouter