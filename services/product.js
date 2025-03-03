import Product from "../models/product.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const addProduct = async (req, res) => {
  const { name, price, category, description, image } = req.body;
  try {
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }
    const result = await Product.create({
      name,
      price,
      category,
      description,
      image,
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description, image } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        category,
        description,
        image,
      },
      { new: true }
    );
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const product = await Product.find({ category });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySearch = async (req, res) => {
  const { search } = req.params;
  try {
    const product = await Product.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByPrice = async (req, res) => {
  const { price } = req.params;
  try {
    const product = await Product.find({ price });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByRating = async (req, res) => {
  const { rating } = req.params;
  try {
    const product = await Product.find({ rating });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByStock = async (req, res) => {
  const { stock } = req.params;
  try {
    const product = await Product.find({ stock });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByBrand = async (req, res) => {
  const { brand } = req.params;
  try {
    const product = await Product.find({ brand });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByColor = async (req, res) => {
  const { color } = req.params;
  try {
    const product = await Product.find({ color });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySize = async (req, res) => {
  const { size } = req.params;
  try {
    const product = await Product.find({ size });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByGender = async (req, res) => {
  const { gender } = req.params;
  try {
    const product = await Product.find({ gender });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByMaterial = async (req, res) => {
  const { material } = req.params;
  try {
    const product = await Product.find({ material });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByOccasion = async (req, res) => {
  const { occasion } = req.params;
  try {
    const product = await Product.find({ occasion });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySeason = async (req, res) => {
  const { season } = req.params;
  try {
    const product = await Product.find({ season });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByStyle = async (req, res) => {
  const { style } = req.params;
  try {
    const product = await Product.find({ style });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByFit = async (req, res) => {
  const { fit } = req.params;
  try {
    const product = await Product.find({ fit });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByFabric = async (req, res) => {
  const { fabric } = req.params;
  try {
    const product = await Product.find({ fabric });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByNeck = async (req, res) => {
  const { neck } = req.params;
  try {
    const product = await Product.find({ neck });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySleeve = async (req, res) => {
  const { sleeve } = req.params;
  try {
    const product = await Product.find({ sleeve });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByLength = async (req, res) => {
  const { length } = req.params;
  try {
    const product = await Product.find({ length });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByPattern = async (req, res) => {
  const { pattern } = req.params;
  try {
    const product = await Product.find({ pattern });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByDiscount = async (req, res) => {
  const { discount } = req.params;
  try {
    const product = await Product.find({ discount });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
