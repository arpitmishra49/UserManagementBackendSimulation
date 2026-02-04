import {users} from '../data/users.js';


export const getUsers=(req,res)=>{
    res.status(200).json({success:true,count:users.length,data:users});
};

export const createUser = (req,res) => {
    try{
        const {name,email}=req.body;

        //Validation
        if(!name || !email){
            return res.status(400).json({success:false ,message:"Name and email are required"});

        }
        const newUser={
            id:Date.now().toString(),
            name,
            email
        };
        users.push(newUser);
        res.status(201).json({success:true ,message:"User created successfully",data:newUser});
    }
    catch(error){
        res.status(500).json({success:false ,message:"Internal server error"}); 
    }
}
export const updateUser=(req,res)=>{
    const {id}=req.params;
    const {name,email}=req.body;

    const user=users.find((user)=>user.id===id);
    if(!user){
        return res.status(404).json({success:false ,message:"User not found"});
    }
    //Update user details
    if(name) user.name=name;
    if(email) user.email=email;

    res.status(200).json({success:true ,message:"User updated successfully",data:user});
};

export const deleteUser=(req,res)=>{
    const {id}=req.params;
    
    const userIndex=users.findIndex((user)=>user.id===id);
    if(userIndex===-1){
        return res.status(404).json({success:false ,message:"User not found"});
    }
    users.splice(userIndex,1);
    res.status(200).json({success:true ,message:"User deleted successfully"});
}
