import { z } from "zod";

const userSchema = z.object({
    name : z.string(),
    email : z.string()
});

//z.object() -> object schema
//Keys -> expected fields
//Values -> validation rules

export const createUserSchema = z.object({
    name: z.string().min(2,"Name is too short"),
    email: z.email("Invalid email format")
});

export const updateUserSchema = z.object({
    name: z.string().min(2).optional(),
    email: z.email().optional()
});