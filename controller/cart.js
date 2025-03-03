import {
  getCart,
  addCart,
  deleteCart,
  getCartById,
  updateCart,
  addProductToCart,
  removeProductFromCart,
  clearCart,
  getCartByUser,
  deleteProductFromCart,
  updateProductQuantity,
} from "../services/cart.js";

export const addCartController = async (req, res) => {
  try {
    await addCart(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getCartController = async (req, res) => {
  try {
    await getCart(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getCartByIdController = async (req, res) => {
  try {
    await getCartById(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateCartController = async (req, res) => {
  try {
    await updateCart(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const addProductToCartController = async (req, res) => {
  try {
    await addProductToCart(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const removeProductFromCartController = async (req, res) => {
  try {
    await removeProductFromCart(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const clearCartController = async (req, res) => {
  try {
    await clearCart(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getCartByUserController = async (req, res) => {
  try {
    await getCartByUser(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteProductFromCartController = async (req, res) => {
  try {
    await deleteProductFromCart(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const updateProductQuantityController = async (req, res) => {
  try {
    await updateProductQuantity(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
