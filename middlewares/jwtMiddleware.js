const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWTPASSWORD)
            req.userId = jwtResponse.userId
            next()
        }catch(err){
            res.status(401).json("Authorization Failed...Please login !!")
        }
    }else{
        res.status(404).json("Authorization failed...Token is missing !!")
    }
}

module.exports = jwtMiddleware