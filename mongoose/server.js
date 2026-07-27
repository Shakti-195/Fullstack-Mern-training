const express = require("express")
const mongoose = require("mongoose");

// mogoose connection
const app= express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/studentRecord")
.then(()=>console.log ("MongoDB connected"))
.catch(err => console.log(err));



// routes
const  studentRoutes = require("./schema/routes/studentRoute");

app.use("/students",studentRoutes)

// server.listen
app.listen(4000,()=>{
    console.log("Server is working fine");
})