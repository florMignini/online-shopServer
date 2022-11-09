const { Router } = require("express");
const {createCategory} = require('../controllers/category');
const { validateRole, validateSession } = require("../middlewares");

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  [validateRole, validateSession],
  createCategory,
);

module.exports = categoriesRouter