"use server";

import { User } from "@/models/userModel";
import dbConnect from "./db";

export const register = async (formData: any) => {
  const { email, password, password2 } = Object.fromEntries(formData);
  if (password !== password2) {
    return "Passwords do not match";
  }
  try {
    dbConnect();
    await User.create({ email, password });
  } catch (e: any) {
    return e.message;
  }
};

export const login = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);
};
