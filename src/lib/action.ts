"use server";

import { User } from "@/models/userModel";
import dbConnect from "./db";
import bcrypt from "bcrypt";
import { auth, signIn, signOut } from "./auth";

export const register = async (prevState: string, formData: any) => {
  const { email, password, password2 } = Object.fromEntries(formData);
  if (password !== password2) {
    return { error: { text: "Passwords do not match", type: "password" } };
  }
  if (password.length < 8) {
    return {
      error: {
        text: "Password must be at least 8 characters",
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
  const session = await auth();
  const id = session?.user?.id;
  try {
    dbConnect();
    await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
    });
  } catch (e: any) {
    return e.message;
  }
};

export const handleLogout = async () => {
  await signOut();
};

export const getUserData = async ({ id }: { id: string }) => {
  try {
    dbConnect();
    const user = await User.findById(id);
    return user;
  } catch (e: any) {
    return e.message;
  }
};

export const editLinks = async (prevState: string, formData: any) => {
  const data = Object.fromEntries(formData);
  console.log(data);
};

export const deleteLink = async (prevState: string, formData: any) => {
  const { type } = Object.fromEntries(formData);
  const session = await auth();
  const { links } = await getUserData({ id: session?.user?.id });
  const newLinks = links.filter(
    (link: { type: string; link: string }) => link.type !== type
  );
  try {
    dbConnect();
    await User.findByIdAndUpdate(session?.user?.id, {
      links: newLinks,
    });
    return { success: true };
  } catch (e: any) {
    return e.message;
  }
};

export const addLink = async (prevState: string, formData: any) => {
  const data = Object.fromEntries(formData);
  const session = await auth();
  const { links } = await getUserData({ id: session?.user?.id });
  const linkAlreadyExist =
    links.filter(
      (link: { type: string; link: string }) => link.type === data.type
    ).length > 0;
  if (linkAlreadyExist) {
    return { error: true };
  }
  const newLinks = [...links, data];

  try {
    dbConnect();
    await User.findByIdAndUpdate(session?.user?.id, {
      links: newLinks,
    });

    return { success: true };
  } catch (e: any) {
    return e.message;
  }
};
