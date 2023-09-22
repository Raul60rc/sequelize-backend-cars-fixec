// const express = require("express");
// const router = express.Router();

// const carController = require("../controllers/carController");

// // Routes for Cars
// router.post("/cars/addCar", carController.addCar);
// router.get("/cars/allCars", carController.getAllCars);
// router.get("/cars/:id", carController.getCarById);
// router.put("/cars/:id", carController.updateCar);
// router.delete("/cars/:id", carController.deleteCar);

// app.use("/api/cars", router);

// module.exports = router;

const express = require("express");
const router = express.Router();

// Import carController and other controllers if needed
const carController = require("../../controllers/carsController");

// Define routes for cars
router.post("/addCar", carController.addCar);
router.get("/allCars", carController.getAllCars);
// Add other car-related routes here

module.exports = router;
