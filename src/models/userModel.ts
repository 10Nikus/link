import { Schema, model, models } from "mongoose";

const newUserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  image: { type: String, default: "" },
  links: { type: Array, default: [] },
});

export const User = models.User3 || model("User3", newUserSchema);
