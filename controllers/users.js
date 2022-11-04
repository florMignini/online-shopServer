import { User } from "../models/user.js";

import pkg from "bcryptjs";
const bcryptjs = pkg;

const getUsers = async (req, res) => {
  try {

  const totalUsers = await User.findAndCountAll();

if(totalUsers){

  res.json({ totalUsers});
}
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};


//create user
const createUser = async (req, res) => {
  const { name, email, password, rol } = req.body;

  try {
    const emailExist = await User.findOne({where: {email}})
  if(emailExist){
    return res.status(400).json({
      msg: `Email ${email} is already registered`
    })
  }
  
  var salt = await bcryptjs.genSalt(10);
  var hash = await bcryptjs.hash(password, salt);


  const newUser = await User.create({
    name,
    email,
    password: hash,
    rol
  });

  if(newUser){
    const {password, ...user} = newUser.dataValues
    res.json({
    msg: `user successfully created`,
    user

  })
  }
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
  const authenticatedUser = req.user
  const { id } = req.params;
 try {

  if(!authenticatedUser){
    return res.status(401).json({
      msg: `user does not exist`
    })
  }
  const userDeleted = await User.destroy({where:{
    id
  }});

  res.json({
    msg: `user succesfully deleted`,
    authenticatedUser
  });
 } catch (error) {
  return res.status(500).json({error: error.message})
 }
};

export { createUser, getUsers, updateUser, deleteUser };
