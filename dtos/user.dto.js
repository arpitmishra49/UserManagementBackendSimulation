
export const validateCreateUserDTO=(req,res,next)=>{
    console.log("USING DTO TO CHECK DATA VALIDATION");
    const {name,email}=req.body;

    if(!name || !email){
        return res.status(400).json({success:false,message:"Name and email are required"});
    }
    
        next();

}

