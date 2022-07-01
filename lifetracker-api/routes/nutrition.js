const express = require("express");
const Nutrition = require("../models/nutrition");
const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    //take user email and password and authenticate
      const nutrition = await Nutrition.createNutrition(req.body);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    //take user email and password and authenticate
    const nutritions = await Nutrition.listNutritionUser(1);
    return res.status(200).json({ nutritions });
  } catch (err) {
    next(err);
  }
});

router.get("/id/:nutritionId", async (req, res, next) => {
  try {
    //take user email and password and authenticate
    const nutritionId = Number(req.params.nutritionId);

    const nutrition = await Nutrition.fetchNutritionById(nutritionId);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

module.exports = router