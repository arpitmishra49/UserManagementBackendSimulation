import { success } from 'zod';
import {users} from '../data/users.js';
import { createPostService, createUserService, deleteUserService, deleteUsingEmailService, getAllUsersService, getPostWithUserService, getUserServiceActive, getUsersServiceisActive, updatePasswordUsingEmailService, updateUserService } from '../services/user.service.js';


export const getUsers= async (req,res)=>{
    const token =req.headers.token;
    console.log(token);
    const users= await getAllUsersService();
    if(getAllUsersService){
    res.status(200).json({success:true,data:users,header:token});
    }
    else{
        res.status(500).json({success:false,message:"Internal server error"});
    }
};

export const createUser =async (req,res) => {
    try{
        const {name,email,password,role}=req.body;
        // const newUser={
        //     id:Date.now().toString(),
        //     name,
        //     email
        // };
        // users.push(newUser);
        const newUser=await createUserService(name,email,password,role);
        res.status(201).json({success:true ,message:"User created successfully",data:newUser});
    }
    catch(error){
        res.status(500).json({success:false ,message:"Internal server error"}); 
    }
}
export const updateUser=async (req,res)=>{
    const {id}=req.params;
    const {data}=req.body;

    // const user=users.find((user)=>user.id===id);
    // if(!user){
    //     return res.status(404).json({success:false ,message:"User not found"});
    // }
    // //Update user details
    // if(name) user.name=name;
    // if(email) user.email=email;
    const updatedUser=await updateUserService(id,data);
    if(updatedUser){
        res.status(200).json({success:true ,message:"User updated successfully",data:updatedUser});
    }
    else{
        res.status(404).json({success:false ,message:"User not found"});
    }

    
};
// export const FullUpdate=(req,res)=>{
//     const {id}=req.params;
//     const {name,email}=req.body;
//     const user=users.find((user)=>user.id===id);
    
// }


export const deleteUser=(req,res)=>{
    const {id}=req.params;
    
    // const userIndex=users.findIndex((user)=>user.id===id);
    // if(userIndex===-1){
    //     return res.status(404).json({success:false ,message:"User not found"});
    // }
    // users.splice(userIndex,1);
    // res.status(200).json({success:true ,message:"User deleted successfully"});
    
    if(deleteUserService(id)){
        res.status(200).json({success:true ,message:"User deleted successfully"});
    }
    else{
        res.status(404).json({success:false,message:"User not found"});
    }
}

export const getUserById=(req,res)=>{//User extarcted by passing the id in the body not in the url because it is a get request and we are not supposed to pass the id in the url in the get request
    const {id}=req.body;
    const user=users.find((user)=>user.id===id);
    if(!user){
        return res.status(404).json({success:false ,message:"User not found"});
    }
    else{
        res.status(200).json({success:true ,data:user});
    }
}
export const isActive=async(req,res)=>{
    const user=await getUserServiceActive(req.params.id);
    if(user){
        return res.status(200).json({success:true ,data:user});
    }
    else{
        return res.status(404).json({success:false ,message:"User not found or not active"});
    }
}
export const getUsersisActive=async(req,res)=>{
    const users=await getUsersServiceisActive();
    if(users){
        return res.status(200).json({success:true ,data:users});
    }
    else{
        return res.status(404).json({success:false ,message:"No active users found"});
    }
}
export const updatePasswordUsingEmail=async(req,res)=>{
    const {email}=req.body;
    const {data}=req.body;
    const user = await updatePasswordUsingEmailService(email,data);
    if(user){
        return res.status(200).json({message:"Updated password successfully",data:user});
    }
    else{
        return res.status(404).json({message:"User not found",success:false});
    }
}
export const deleteUsingEmail = async (req, res) => {
    const {email}=req.body;
    const result=await deleteUsingEmailService(email);
    res.status(200).json({success:true ,message:"User deleted successfully"});

  };
  export const createPost = async (req,res)=>{
    const {title,content,user} = req.body;
  
    const post = await createPostService(title, content, user);
  
    res.json({
      success: true,
      data: post
    });
  }
  export const getPost = async (req,res)=>{
    const post= await getPostWithUserService();
    res.json({
        success:true,
        data:post
    });
  }    
  