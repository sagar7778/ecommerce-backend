import {
  addCart,
  deleteCart,
  getCart,
  getCartById,
  updateCart,
  deleteProductFromCart,
  clearCart,
  getCartByUser,
  updateProductQuantity,
  addProductToCart,
  removeProductFromCart,
} from "../services/cart.js";
import express from "express";
const router = express.Router();
router.post("/addcart", addCart);
router.get("/getcart", getCart);
router.get("/getcartbyid/:id", getCartById);
router.put("/updatecart/:id", updateCart);
router.post("/addproducttocart", addProductToCart);
router.post("/removeproductfromcart", removeProductFromCart);
router.delete("/deleteproductfromcart", deleteProductFromCart);
router.delete("/clearcart", clearCart);
router.get("/getcartbyuser/:id", getCartByUser);
router.post("/updateproductquantity", updateProductQuantity);
router.delete("/deletecart", deleteCart);
export default router;
