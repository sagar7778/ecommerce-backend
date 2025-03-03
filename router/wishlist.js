import {
  deleteWishlistController,
  getWishlistController,
  getWishlistByProductIdController,
  getWishlistByUserIdController,
  addWishlistController,
  editWishlistController,
  deleteWishlistByProductIdController,
  deleteWishlistByUserIdController,
  deleteWishlistByUserIdAndProductIdController,
  getWishlistByIdController,
} from "../controller/wishlist.js";
import express from "express";
const router = express.Router();
router.post("/addwishlist", addWishlistController);
router.get("/getwishlist", getWishlistController);
router.get("/getwishlist/:id", getWishlistByIdController);
router.get("/getwishlistbyuserid/:id", getWishlistByUserIdController);
router.get("/getwishlistbyproductid/:id", getWishlistByProductIdController);
router.put("/editwishlist", editWishlistController);
router.delete("/deletewishlist", deleteWishlistController);
router.delete(
  "/deletewishlistbyproductid",
  deleteWishlistByProductIdController
);
router.delete("/deletewishlistbyuserid", deleteWishlistByUserIdController);
router.delete(
  "/deletewishlistbyuseridandproductid",
  deleteWishlistByUserIdAndProductIdController
);
export default router;
