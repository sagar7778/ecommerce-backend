import {
  DeleteUser,
  EditUser,
  ForgotPassword,
  GetUser,
  GetUserById,
  ResetPassword,
  UpdatePassword,
  login,
  signup,
} from "../controller/user.js";
import express from "express";
const router = express.Router();
router.post("/login", login);
router.post("/signup", signup);
router.get("/getuser", GetUser);
router.put("/edituser", EditUser);
router.delete("/deleteuser", DeleteUser);
router.get("/:id", GetUserById);
router.post("/forgotpassword", ForgotPassword);
router.post("/resetpassword", ResetPassword);
router.post("/updatepassword", UpdatePassword);

export default router;
