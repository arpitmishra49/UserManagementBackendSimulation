let success=true;
//let mysecrettoken=12345;
export const checkAuth=(req,res,next)=>{
    //const token=req.headers.token;
    if(success){
        console.log("Auth checked");
    next();
    }
    else{
        console.log("Auth Failed!!");
        res.status(401).json({success:false ,message:"Unauthorized"});
    }
    
};


export const ValidateUserId=(req,res,next)=>{
    const {id} =req.params;
    if(!id || id.length<5){
        console.log("Validation Failed!!");
        return res.status(400).json({success:false ,message:"User ID is required"});
        
    }
    // id=Number(id);
    // if(typeof id!=='number'){
    //     console.log("Validation Failed!!");
    //     return res.status(400).json({success:false ,message:"User ID must be a number"});
    // }
    else{
        console.log("Validation passed");
        next();
    }
}



// export const ValidateUserNameandEmail=(req,res,next)=>{// it will not be there in the middlware cause it is not the middlewares job 
    
//     const {name}=req.body;
//     const {email}=req.body;
//     if(!name || !email){
//         return res.status(400).json({success:false ,message:"Name and email are required"});
//     }
//     else{
//         console.log("Validation passed");
//         next();
//     }
// }   

export const validateZod = (schema) => (req, res, next) => {
    let result = schema.safeParse(req.body);
    console.log("Body parsing using Zod");
    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.errors,
      });
    }
    req.body = result.data;
    next();
  };