import mongoose from "mongoose";

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL); 
    console.log("connected to database")
  } catch (error) {
    console.log("error in connecting to database");
    
  }
  
}