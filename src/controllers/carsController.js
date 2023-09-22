const { Car } = require("../api/cars/carsModel.js");

// functions

// 1. Add Car
const addCar = async (req, res) => {
  try {
    let car = new Car({
      make: req.body.make,
      model: req.body.model,
      price: req.body.price,
      fuel: req.body.fuel,
      year: req.body.year,
      kms: req.body.kms,
      door: req.body.door,
      shift: req.body.shift,
      color: req.body.color,
      is_professional: req.body.is_professional,
      province: req.body.province,
      country: "Spain", // Assuming all cars are in Spain
    });
    let carInserted = await Car.create({
      make: car.make,
      model: car.model,
      price: car.price,
      fuel: car.fuel,
      year: car.year,
      kms: car.kms,
      door: car.door,
      shift: car.shift,
      color: car.color,
      is_professional: car.is_professional,
      province: car.province,
      country: car.country,
    });
    car.car_id = carInserted.car_id;
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

async function getCar(id) {
  return await Car.findByPk(id);
}

// 2. Get All Cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({
      // especificar las columnas que quieres recuperar.
      attributes: [
        "make",
        "model",
        "price",
        "fuel",
        "year",
        "kms",
        "door",
        "shift",
        "color",
        "is_professional",
        "province",
        "country",
      ],
    }); // sequelize crea createdAt y updateAt por eso se selccionar para no devolverlas ya que son campos de audi
    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCar,
  getCar,
  getAllCars,
};
