import { users } from "../data/users.js"
import post from "../models/post.js";
import User from "../models/user.js";

export const getAllUsersService= async ()=>{
    const users1 = await User.find();
    console.log("Users fetched ");
    return users1;

}
export const createUserService= async (name,email,password,role)=>{
//     try{const newUser={
//         id:Date.now().toString(),
//         name,
//         email
//     };
//     users.push(newUser);
//     return newUser;


// }catch(error){
//     console.log("Error adding user:",error);
    
// }
const newUser=await User.create({name,email,password,role});
newUser.password="";
console.log("User created successfully",newUser);
return newUser;
}

export const deleteUserService=async (id)=>{
    const user=await User.findByIdAndDelete(id);
    if(!user){
        console.log("user not found");
        return false;
    }
   
    console.log("User not found");
    return true;
    
}

export const updateUserService=async (id,data)=>{
    const updateData=await User.findByIdAndUpdate(
        id,
        {$set:data},
        {
            new:true,
            runValidators:true
        }
    )
    return updateData;
}    
export const getUserServiceActive=async (id)=>{
    const user=await User.findById(id).limit(2);
    if(user){
        if(user.isActive){
            console.log("User is active");
            return user;
        }
        else{
            console.log("User is not active");
            return false;
        }
    }
    else{
        console.log("User not found");
        return false;
    }
}
export const updatePasswordUsingEmailService=async(email,data)=>{
    const updateData = await User.findOneAndUpdate(
        {email:email},
        {$set:data},
        {
            new:true,
            runValidators:true
        }
    )
    return updateData
}
export const deleteUsingEmailService=async(email)=>{
    const user=await User.findOneAndDelete({email:email});
    return user;
}    

export const getUsersServiceisActive= async ()=>{
    console.log("isActive in Service");
    const users1 = await User.find({isActive:true}).limit(5).skip(1);
    return users1;
    
}
export const createPostService = async(title,content,user)=>{
    const PostData = await post.create({
      title:title,
      content:content,
      user:user
    })
    return PostData;
  }
  
export const getPostWithUserService = async()=>{
    const PostData = await post.find().populate("user","name email")
    return PostData;
  }

// export const updatePasswordById=async (userId, newPassword)=>{
//     const user=await user.findById(userId);
//     this.password=newPassword;
//     await
// }
