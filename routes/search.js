const {Router} = require('express')
const search = require('../controllers/search')

const searchRouter = Router()

searchRouter.get('./:collection/:item', search)
module.exports = searchRouter

