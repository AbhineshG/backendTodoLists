import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todoes from "./routes/todoesRoutes.js";
 const app=express();
dotenv.config();

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true, useUnifiedTopology: true 
})
.then(()=> console.log("Mongobd is Connected",process.env.MONGO_URI))
.catch((err)=> console.log(err))
app.use(express.json());
app.use("/api",todoes)
if(process.env.NODE_ENV == "production"){
    app.use(express.static("todolists/build"));
}
 

app.listen(5000,()=> console.log("Server Is Running On Port No : 5000"))
const mongodb = "mongodb://localhost:27017/TODO_Application"