import Cart from "../models/cart.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const addCart = async (req, res) => {
  try {
    const { user, products } = req.body;
    const existingCart = await Cart.findOne({ user });
    if (existingCart) {
      return res.status(400).json({ message: "Cart already exists" });
    }
    const newCart = new Cart({ user, products });
    await newCart.save();
    res.status(200).json({ message: "Cart created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find()
      .populate("products.product")
      .populate("user");
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findById(id)
      .populate("products.product")
      .populate("user");
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { products } = req.body;
    const cart = await Cart.findByIdAndUpdate(id, { products });
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const addProductToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body;
    const cart = await Cart.findById(id);
    const existingProduct = cart.products.find(
      (product) => product.product.toString() === productId
    );
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }
    await cart.save();
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const removeProductFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId } = req.body;
    const cart = await Cart.findById(id);
    const productIndex = cart.products.findIndex(
      (product) => product.product.toString() === productId
    );
    if (productIndex !== -1) {
      cart.products.splice(productIndex, 1);
    }
    await cart.save();
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const clearCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndUpdate(id, { products: [] });
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getCartByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne({ user: id })
      .populate("products.product")
      .populate("user");
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProductFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId } = req.body;
    const cart = await Cart.findById(id);
    const productIndex = cart.products.findIndex(
      (product) => product.product.toString() === productId
    );
    if (productIndex !== -1) {
      cart.products.splice(productIndex, 1);
    }
    await cart.save();
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body;
    const cart = await Cart.findById(id);
    const productIndex = cart.products.findIndex(
      (product) => product.product.toString() === productId
    );
    if (productIndex !== -1) {
      cart.products[productIndex].quantity = quantity;
    }
    await cart.save();
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
