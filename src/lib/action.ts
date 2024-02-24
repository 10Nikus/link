"use server";

import { User } from "@/models/userModel";
import dbConnect from "./db";
import bcrypt from "bcrypt";
import { signIn } from "./auth";

export const register = async (prevState: string, formData: any) => {
  const { email, password, password2 } = Object.fromEntries(formData);
  if (password !== password2) {
    return { error: "Passwords do not match" };
  }
  try {
    dbConnect();
    const user = await User.findOne({ email });
    if (user) {
      return { error: "User already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({ email, password: hashedPassword });
    return { success: true };
  } catch (e: any) {
    return e.message;
  }
};

export const login = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
    const user = await User.findOne({ email });
    if (!user) {
      return { error: "User not found" };
    }
    if (user.password !== password) {
      return { error: "Password is incorrect" };
    }
    return { success: true };
  } catch (e: any) {
    return e.message;
  }
};
