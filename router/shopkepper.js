import {
  DeleteShopkeeper,
  EditShopkeeper,
  ForgotPassword,
  GetShopkeeper,
  GetShopkeeperById,
  ResetPassword,
  UpdatePassword,
  login,
  signup,
} from "../controller/shopkepper.js";
import express from "express";
const router = express.Router();
router.post("/login", login);
router.post("/signup", signup);
router.get("/getshopkeeper", GetShopkeeper);
router.put("/editshopkeeper", EditShopkeeper);
router.delete("/deleteshopkeeper", DeleteShopkeeper);
router.get("/:id", GetShopkeeperById);
router.post("/forgotpassword", ForgotPassword);
router.post("/resetpassword", ResetPassword);
router.post("/updatepassword", UpdatePassword);

export default router;
