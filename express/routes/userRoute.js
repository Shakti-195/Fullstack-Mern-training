const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("User Page...")
})

// List specific product with id 
router.get("/:id",()=>{

})

module.exports = router;