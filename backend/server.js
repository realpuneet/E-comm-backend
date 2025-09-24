const app = require("./src/app");
require("dotenv").config();
const connectDB = require("./src/config/db");


const port = process.env.PORT


connectDB();
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})