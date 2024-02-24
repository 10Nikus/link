import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./db";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";

const login = async (credentials:any) => {
  try {
    dbConnect();
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Password is incorrect");
    }
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Error logging in");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
});
