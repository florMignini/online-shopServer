import { User } from "../models/user.js";

import pkg from "bcryptjs";
const bcryptjs = pkg;

const createUser = async (req, res) => {
  const { name, email, password, rol } = req.body;
  try {
  var salt = await bcryptjs.genSalt(10);
  var hash = await bcryptjs.hash(password, salt);

  //user creation
  const newUser = await User.create({
    name,
    email,
    password: hash,
    rol
  });

  res.json({
    msg: `user successfully created`,
    newUser
  })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

const getUsers = async (req, res) => {
  try {

  const [totalUsers, users] = await Promise.all([await User.findAll({where : { status: true }}), await User.findAndCountAll({where : { status: true }})
]);

  res.json({ totalUsers, users });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

const updateUser = async (req, res) => {
try {
    const { id } = req.params;
  const { password, google, ...reminder } = req.body;

  const userUpdated = await User.findByPk(id);

  if (password) {
    const salt = bcryptjs.genSaltSync();
    userUpdated.password = bcryptjs.hashSync(password, salt);
  }

  if (reminder.rol) {
    userUpdated.rol = reminder.rol;
  }
  userUpdated.save()
  res.json({
    msg: "user succesfully updated",
    userUpdated,
  });
} catch (error) {
  console.log(error)
}
};

const deleteUser = async (req, res) => {
 try {
    const { id } = req.params;

  const userDeleted = await User.destroy(id);

  res.json({
    msg: `user succesfully deleted`,
  });
 } catch (error) {
  return res.status(500).json({error: error.message})
 }
};

export { createUser, getUsers, updateUser, deleteUser };
