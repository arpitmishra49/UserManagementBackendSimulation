import app from "./app.js";
import chalk from "chalk";
app.listen(3000,(err,data)=>{
    (console.log(chalk.green("Server is running on port 3000")));
});
