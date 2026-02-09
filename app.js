import express from "express";
//import userRouter from "./routes/user.Routes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app=express();
dotenv.config();
connectDB();
import router from "./routes/user.route.js";
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("User managemnet API is running");
});
app.use("/api/users",router);
export default app;
