const express = require("express");
const router = express.Router();
const RecipeRoutes = require("./RecipeRoutes");

router.use(RecipeRoutes);

module.exports = router;
