/* import Role from "../models/role.js";
import User from "../models/user.js";

export const roleValidator = async (rol = "") => {
  const roleExist = await Role.findOne({ rol });
  if (!roleExist) {
    throw new Error(`rol ${rol} does not exist`);
  }
};

export const emailValidator = async (email = "") => {
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    throw new Error(`email ${email} is already registered`);
  }
};

export const idValidator = async (id) => {
  const idExist = await User.findById(id);
  if (!idExist) {
    throw new Error(`id ${id} does not exist`);
  }
};
 */
