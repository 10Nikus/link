"use server";

import { User } from "@/models/userModel";
import dbConnect from "./db";
import bcrypt from "bcrypt";
import { signIn, signOut } from "./auth";

export const register = async (prevState: string, formData: any) => {
  const { email, password, password2 } = Object.fromEntries(formData);
  if (password !== password2) {
    return { error: { text: "Passwords do not match", type: "password" } };
  }
  if (password.length < 6) {
    return {
      error: {
        text: "Password must be at least 6 characters",
        type: "password",
      },
    };
  }

  try {
    dbConnect();
    const user = await User.findOne({ email });
    if (user) {
      return { error: { text: "Email is already used", type: "email" } };
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
    await signIn("credentials", { email, password });
    return { success: true };
  } catch (err: any) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const editProfile = async (prevState: string, formData: any) => {
  const { firstName, lastName, email } = Object.fromEntries(formData);
  console.log(firstName, lastName, email);
};

export const handleLogout = async () => {
  await signOut();
};
