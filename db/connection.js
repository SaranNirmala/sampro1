import mongoose from "mongoose";
import env from "dotenv";

env.config();

const local="mongodb://localhost:27017/Sample"

export const connectToDb= async() =>{
  const db =mongoose.connect(local);
  if(db){
    console.log("Connecting to Database")
  } else{
    console.log("No Database");
  }
}