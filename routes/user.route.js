import { createUser,getUsers ,updateUser,deleteUser} from "../controllers/usercontroller.js";
import express from "express";

const router =express.Router();

router.post("/",createUser);
router.get("/",getUsers);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;