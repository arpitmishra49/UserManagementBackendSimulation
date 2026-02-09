import app from "./app.js";
import chalk from "chalk";
const PORT =process.env.PORT || 3000;
app.listen(PORT,(err,data)=>{
    chalk.blue(console.log("Server is running "));
});
