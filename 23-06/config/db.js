import mongoose from "mongoose";

const uri = "mongodb+srv://krishna_db_user:krishna123@cluster0.jnwjus7.mongodb.net/?appName=Cluster0"

const connectDB = async() => {
  try{
    await mongoose.connect(uri)
    console.log("MongoDB Connected Successfully.");
  }catch(err){
    console.error("MongoDB Connection Error :", err.message);
    process.exit(1);
  }
}

export default connectDB


