const express = require("express");
const Student = require("../models/student")
const Router = express.Router();

Router.post("/",async(req,res)=>{
try{
    // creating new instance
    const student = new Student(req.body);
    // saving the result
    const result = await student.save();

     console.log(result); // Check terminal


    // showing result in response
    res.status(201).json(result);
}

catch(error){
    // error msg
    res.status(400).json({
        msg: error.message

    })

}


});

// Show all students
Router.get("/",async(req,res)=>{
    try{
        const students = await Student.find();
        res.status(201).json(students);
    }catch{
        // error messege

        res.status(400).json({
            msg: error.message
    })
    }



});
Router.get("/:id",async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({
                meg:"Student not found"
            })
        }
        res.json(student);
    }catch(error){
            // error messege
            res.status(500).json({
                msg:error.message
            })
        
    }



});





module.exports = Router;