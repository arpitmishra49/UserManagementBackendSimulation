import express from "express";
//import userRouter from "./routes/user.Routes.js";
const app=express();
import router from "./routes/user.route.js";
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("User managemnet API is running");
});
app.use("/api/users",router);
export default app;
