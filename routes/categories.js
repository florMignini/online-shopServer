const { Router } = require("express");
const {createCategory, getCategories, updateCategory, deleteCategory, getCategory} = require('../controllers/category');
const { validateRole, validateSession } = require("../middlewares");

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  [validateSession, validateRole],
  createCategory,
);

categoriesRouter.get(
  "/",
  getCategories
);

categoriesRouter.get(
  "/:id",
  getCategory
);

categoriesRouter.put(
  "/:id",
  [validateSession, validateRole],
  updateCategory,
);

categoriesRouter.delete(
  "/:id",
  [validateSession, validateRole],
  deleteCategory,
);

module.exports = categoriesRouter