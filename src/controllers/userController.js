const { User } = require("../api/users/userModel.js");
const bcrypt = require("bcrypt");

// functions

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

// 1. Create User
const createUser = async (req, res) => {
  try {
    const userData = new User({
      username: req.body.username,
      email: req.body.email,
      password: await hashPassword(req.body.password),
      // You can add more fields like name, date of birth, etc. here
    });

    const user = await User.create({
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });
    res
      .status(201)
      .json({
        user_id: user.user_id,
        username: user.username,
        email: user.email,
      }); // Pass should not be returned
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 2. Get User By Id
async function getUser(id) {
  return await User.findByPk(id);
}

// 3. Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await await User.findAll({
      // especificar las columnas que quieres recuperar.
      attributes: ["user_id", "username", "email"], // la pass hashead no debe ser devuelta
    }); // sequelize crea createdAt y updateAt por eso se selccionar para no devolverlas ya que son campos de auditoria
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUsers,
};
