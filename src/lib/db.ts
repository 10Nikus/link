import mongoose from "mongoose";

export default async function dbConnect() {
  const mongoUrl = process.env.SECEND_MONGO_URL;
  if (!mongoUrl) {
    return Response.json({ error: "MONGO_URL is not defined" });
  }
  try {
    await mongoose.connect(mongoUrl);
  } catch (e: any) {
    return Response.json({ error: e.message });
  }
}
