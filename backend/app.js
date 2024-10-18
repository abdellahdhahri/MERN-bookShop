const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes")
const cors = require("cors");
require("./connection/connection");
app.use(cors());

app.use(express.json());
app.use("/api/v1",bookRoute);
/*app.get("/services",(req,res)=>{
    res.send("services Page");
});
app.get("/about",(req,res)=>{
    res.send("about Page");
});*/
app.listen(1000,()=>{
 });