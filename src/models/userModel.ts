import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = models.User || model("User", userSchema);
