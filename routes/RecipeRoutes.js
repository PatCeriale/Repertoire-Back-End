const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const db = require("../models");

//GET all recipes
router.get("/recipelist", (req, res) => {
  db.Recipe.find({})
    .then((dbRecipe) => {
      console.dir(dbRecipe);
      res.json(dbRecipe);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET one recipes by id
router.get("/recipe/:id", (req, res) => {
  db.Recipe.find({})
    .then((dbRecipe) => {
      console.dir(dbRecipe);
      res.json(dbRecipe);
    })
    .catch((err) => {
      res.json(err);
    });
});

//CREATE a recipe
router.post("/addnewrecipe", (req, res) => {
  db.Recipe.create(req.body)
    .then((dbRecipe) => {
      res.json(dbRecipe);
    })
    .catch((err) => {
      res.json(err);
    });
});

//UPDATE a recipe
router.put("/recipe/:id", (req, res) => {
  db.Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then((dbRecipe) => {
      res.json(dbRecipe);
    })
    .catch((err) => {
      res.json(err);
    });
});

//DELETE a recipe
router.delete("/recipe/:id", (req, res) => {
  db.Recipe.deleteOne({ _id: req.params.id })
    .then((dbRecipe) => {
      res.json(dbRecipe);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
