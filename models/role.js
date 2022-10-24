import { Schema, model } from "mongoose";

const RoleSchema = Schema({
  rol: {
    type: String,
    required: [true, "role must be provided"],
  },
});

export default model("Role", RoleSchema);
