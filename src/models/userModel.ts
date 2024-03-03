import { Schema, model, models } from "mongoose";

const newUserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  image: { type: String, default: "" },
  links: { type: Object, default: {} },
});

export const User = models.User2 || model("User2", newUserSchema);
