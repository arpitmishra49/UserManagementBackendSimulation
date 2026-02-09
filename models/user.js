import mongoose from "mongoose";
import { email, minLength } from "zod";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            minLength:6
        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user"
        },
        isActive:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        strict:true
    }
);
schema.pre("save",async function(next){
    console.log("pre save hook called");
    this.password=await bcrypt.hash(this.password,10);
});        

const User=mongoose.model("User",schema);//--->not case sensitive and also single or plural only if there is only user collection and not users 
export default User;