const { CarRating } = require("../api/ratingCars/ratingCars.js");
const { getUser } = require("./userController");
const { getCar } = require("./carsController");

// 1. Add Car Rating
const addCarRating = async (req, res) => {
  try {
    const user = await getUser(req.body.user_id);
    const car = await getCar(req.body.car_id);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    } else if (!car) {
      return res.status(404).send({ error: "Car not found" });
    } else {
      const carRatingData = new CarRating({
        car_id: req.body.car_id,
        user_id: req.body.user_id,
        rating: req.body.rating,
      });

      const carRating = await CarRating.create({
        car_id: carRatingData.car_id,
        user_id: carRatingData.user_id,
        rating: carRatingData.rating,
      });
      res
        .status(201)
        .json({
          rating_id: carRating.rating_id,
          car_id: carRating.car_id,
          user_id: carRating.user_id,
          rating: carRating.rating,
        });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 2. Get All Car Ratings
const getAllCarRatings = async (req, res) => {
  try {
    const carRatings = await CarRating.findAll({
      // especificar las columnas que quieres recuperar.
      attributes: ["car_id", "user_id", "rating"],
    }); // sequelize crea createdAt y updateAt por eso se selccionar para no devolverlas ya que son campos de auditoria
    res.status(200).json(carRatings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCarRating,
  getAllCarRatings,
};
