const express = require("express");
const router = express.Router();
const ratingCarsController = require("../../controllers/ratingCarsController");

router.post("/addRating", ratingCarsController.addCarRating);
router.get("/allRatings", ratingCarsController.getAllCarRatings);

module.exports = router;
