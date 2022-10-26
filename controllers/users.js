import pkg from "bcryptjs";
const bcryptjs = pkg;

const createUser = async (req, res) => {
  /*  const { name, email, password, rol } = req.body;

  const newUser = new User({ name, email, password, rol });

  const salt = bcryptjs.genSaltSync(10);
  newUser.password = bcryptjs.hashSync(password, salt);

  await newUser.save();

  res.json({
    msg: "user created",
    newUser,
  }); */
};

const getUsers = async (req, res) => {
  /* const query = { status: true };

  const [totalUsers, users] = await Promise.all([User.find(query)]);

  res.json({ users }); */
};

const updateUser = async (req, res) => {
  /* const { id } = req.params;
  const { password, google, ...reminder } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync();
    reminder.password = bcryptjs.hashSync(password, salt);
  }
  if (reminder.rol) {
    User.rol = reminder.rol;
  }
  const userUpdated = await User.findByIdAndUpdate(id, reminder);

  res.json({
    msg: "user succesfully updtaed",
    userUpdated,
  }); */
};

const deleteUser = async (req, res) => {
  /*  const { id } = req.params;
  //not delete but change the status user
  const userDeleted = await User.findByIdAndUpdate(id, { status: false });

  res.json({
    msg: `user succesfully deleted`,
    userDeleted,
  }); */
};

export { createUser, getUsers, updateUser, deleteUser };
