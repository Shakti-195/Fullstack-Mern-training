const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const auth = require("./middleware/auth");

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("JWT Server is Running...");
});

app.get("/profile",auth,(req,res)=>{
    res.status(200).json({
        messege:"Welcome to your profile",
        user:req.user
    })
})

const user = {
        id:1,
        username:"admin",
        password:bcrypt.hashSync("12345",10),
        role:"Admin"
    };

app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    // check username
    if(username !== user.username){
        return res.status(401).json({
            messege:"Invalid Username"
        });
    }

    // check password

    const validPassword = bcrypt.compareSync(password,user.password);

    if(!validPassword){
        return res.status(401).json({
            messege:"Invalid Password"
        });
    }

    // Generate JWT
    const token = jwt.sign(
        {
            id:user.id,
            username:user.username,
            role:user.role
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"1h"
        }
    );
    
    
    // const token = jwt.sign(user,process.env.JWT_SECRET_KEY);
    console.log("Generated Token:",token);
    res.status(200).json({
        messege:"Login Successfully",
        token:token
    });
})



const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {
    console.log(`server is running on port http://localhost:${PORT}`);
});