import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})
import connectDB from "./db/index.js";
 connectDB()
 .then(()=>{
   console.log("Database connection successful");
   app.on("error", (err)=>{
    console.log("Error:", err)
    throw err
 })
   app.listen(process.env.PORT || 8000, ()=>{
     console.log(`Server is running on port ${process.env.PORT || 8000}`);
   })
 }).catch((err)=>{
    console.log("MONGO Db connection failed!!!", err)
 })
 





// import  mongoose from "mongoose";
// import { DB_NAME } from "./constants";
/* //first way to connect Database
import express from "express";
const app = express();
 ;(async()=>{
    try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error", (err)=>{
        console.log("Error:", err)
        throw err
     })
     app.listen(process.env.PORT, ()=>{ 
        console.log(`Server is running on port ${process.env.PORT}`)
     })
     console.log("Connected to MongoDB")       
    }catch(err){
        console.error("Error:", err)
        throw err
    }
 })()
    */