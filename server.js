const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // This is used for parsing URL-encoded data
app.use(cors());

// Routers
const carRouter = require("./src/api/cars/carsRouter");
const carRatingRoutes = require("./src/api/ratingCars/ratingCarsRoutes");
const userRouter = require("./src/api/users/userRoutes");

// Routes
app.use(bodyParser.json());
app.use("/api/cars", carRouter);
app.use("/api/car-ratings", carRatingRoutes);
app.use("/api/users", userRouter);

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
