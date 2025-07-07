import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

let connectDb = async () => {
  try {
    if (mongoose.ConnectionStates === 1) {
      return console.log("You are already connected!");
    } else {
      await mongoose.connect(MONGODB_URI);
      console.log("connected");
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

export default connectDb;
