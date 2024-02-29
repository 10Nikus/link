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
      return { error: "Email is already used" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({ email, password: hashedPassword });
    return { success: true };
  } catch (e: any) {
    return e.message;
  }
};

export const login = async (prevState: string, formData: any) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    // await signIn("credentials", { email, password });
    const user = await User.findOne({ email });
    if (!user) {
      return { error: "Account does not exist" };
    }
    if (user.password !== password) {
      return { error: "Password is incorrect" };
    }
    return { success: true };
  } catch (e: any) {
    return { error: "Account does not exist" };
  }
};

export const editProfile = async (prevState: string, formData: any) => {
  const { firstName, lastName, email } = Object.fromEntries(formData);
  console.log(firstName, lastName, email);
};
