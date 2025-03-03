import Wishlist from "../models/wishlist.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const addWishlist = async (req, res) => {
  const { products, user } = req.body;
  try {
    const existingWishlist = await Wishlist.findOne({ products, user });
    if (existingWishlist) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }
    const result = await Wishlist.create({ products, user });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find()
      .populate("products.product")
      .populate("user");
    res.status(200).json({ wishlist });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteWishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const wishlist = await Wishlist.findByIdAndDelete(id);
    res.status(200).json({ message: "Product removed from wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getWishlistById = async (req, res) => {
  const { id } = req.params;
  try {
    const wishlist = await Wishlist.findById(id);
    res.status(200).json({ wishlist });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const editWishlist = async (req, res) => {
  const { id } = req.params;
  const { productId, userId } = req.body;
  try {
    const wishlist = await Wishlist.findByIdAndUpdate(
      id,
      {
        productId,
        userId,
      },
      { new: true }
    );
    res.status(200).json({ wishlist });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getWishlistByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const wishlist = await Wishlist.find({ userId });
    res.status(200).json({ wishlist });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getWishlistByProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    const wishlist = await Wishlist.find({ productId });
    res.status(200).json({ wishlist });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteWishlistByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const wishlist = await Wishlist.deleteMany({ userId });
    res.status(200).json({ message: "Wishlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteWishlistByProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    const wishlist = await Wishlist.deleteMany({ productId });
    res.status(200).json({ message: "Wishlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteWishlistByUserIdAndProductId = async (req, res) => {
  const { userId, productId } = req.params;
  try {
    const wishlist = await Wishlist.deleteOne({ userId, productId });
    res.status(200).json({ message: "Wishlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
