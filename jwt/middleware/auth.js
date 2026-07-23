const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    const token = req.header("Authorization")?.replace("Bearer ","");
    console.log("Recieved Token:",token);

    if(!token){
        return res.status(401).json({
            messege:"Access Denied"
        });
    }
    try{

        const verified = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = verified;

        next();
    } catch (error){
        console.log(error);
        
        return res.status(401).json({
            messege:"Invalid Token"
        });
    }
};

module.exports = auth;