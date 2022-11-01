
import {User} from "../models/user.js";

export const emailValidator = async (email = "") => {
  const emailExist = await User.findOne({ where: email });
  if (emailExist) {
    throw new Error(`email ${email} is already registered`);
  }
};

export const idValidator = async (id) => {
  const idExist = await User.findByPk(id)
  if (!idExist) {
    throw new Error(`id ${id} does not exist`);
  }
};

