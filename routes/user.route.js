import { createUser,getUsers ,updateUser,deleteUser, getUserById, isActive, updatePasswordUsingEmail, deleteUsingEmail, getUsersisActive, getPost, createPost} from "../controllers/usercontroller.js";
import express from "express";
import { checkAuth, ValidateUserId, validateZod} from "../middlewares/auth.js";
import { validateCreateUserDTO } from "../dtos/user.dto.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.zor.js";
import { getUsersServiceisActive } from "../services/user.service.js";

const router =express.Router();

// router.get("/",checkAuth,getUsers);
// router.get("/getById",getUserById);
// router.post("/",validateZod(createUserSchema),createUser);
// router.put("/:id",validateZod(updateUserSchema), updateUser);
// router.delete("/:id",ValidateUserId,deleteUser);



router.get("/",getUsers);
router.post("/",createUser);
router.get("/isActive/:id",isActive);
router.get("/ActiveUsers",getUsersisActive);
router.get("/getPost",getPost);
router.post("/post",createPost);
router.patch("/updateUsingEmail",updatePasswordUsingEmail);
router.patch("/:id", updateUser);
router.delete("/deleteUsingEmail",deleteUsingEmail);
router.delete("/:id",deleteUser);


export default router;