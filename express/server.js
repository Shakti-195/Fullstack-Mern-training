const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Home page...")

})

app.listen(2000,()=>{
    console.log("Express Server is running at port http://localhost:2000");
});