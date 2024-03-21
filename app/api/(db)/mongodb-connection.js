import mongoose from "mongoose";

const mongodbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/nextjs?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
    );
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection failed", error);
  }
};

mongodbConnection();
