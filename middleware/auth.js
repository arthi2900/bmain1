import jwt  from "jsonwebtoken";
export const auth=(req,res,next)=>{ 
try{
    const token=req.header("x-auth-token");
    console.log(token);
    jwt.verify(token,process.env.SECRET_KEY,function(err,decoded)
    {
        console.log(decoded);
        if(decoded == undefined){
            res.status(401).json({
                message:"unAuthorized",
            });
        }
        else{
            req._id=decoded.id;
            next();
        }
    });
  
}

catch(err){
res.status(401).send({error:err.message});
} 
}