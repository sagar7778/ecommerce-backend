import {
  addWishlist,
  deleteWishlist,
  deleteWishlistByProductId,
  deleteWishlistByUserId,
  deleteWishlistByUserIdAndProductId,
  editWishlist,
  getWishlist,
  getWishlistByProductId,
  getWishlistByUserId,
  getWishlistById,
} from "../services/wishlist.js";

export const addWishlistController = async (req, res) => {
  try {
    await addWishlist(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getWishlistController = async (req, res) => {
  try {
    await getWishlist(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getWishlistByIdController = async (req, res) => {
  try {
    await getWishlistById(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getWishlistByUserIdController = async (req, res) => {
  try {
    await getWishlistByUserId(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getWishlistByProductIdController = async (req, res) => {
  try {
    await getWishlistByProductId(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteWishlistController = async (req, res) => {
  try {
    await deleteWishlist(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteWishlistByUserIdController = async (req, res) => {
  try {
    await deleteWishlistByUserId(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteWishlistByProductIdController = async (req, res) => {
  try {
    await deleteWishlistByProductId(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteWishlistByUserIdAndProductIdController = async (
  req,
  res
) => {
  try {
    await deleteWishlistByUserIdAndProductId(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const editWishlistController = async (req, res) => {
  try {
    await editWishlist(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
