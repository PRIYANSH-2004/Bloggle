import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
const uri = process.env.MONGO;

 async function connectDB() {
    try {
        console.log(uri)
        await mongoose.connect(uri, {
          autoSelectFamily: false,
        });

        console.log("✅ Database connected");
        
    } catch (error) {
        console.log("❌ Try again, DB not connected", error)
    }
}
// connectDB()
export default connectDB
