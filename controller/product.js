import {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProductByCategory,
  getProductByFit,
  getProductByMaterial,
  getProductBySearch,
  getProductByBrand,
  getProductByColor,
  getProductByGender,
  getProductByLength,
  getProductBySeason,
  getProductBySize,
  getProductBySleeve,
  getProductById,
} from "../services/product.js";
export const createProductController = async (req, res) => {
  try {
    await createProduct(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductController = async (req, res) => {
  try {
    await getProduct(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByIdController = async (req, res) => {
  try {
    await getProductById(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByCategoryController = async (req, res) => {
  try {
    await getProductByCategory(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByFitController = async (req, res) => {
  try {
    await getProductByFit(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByMaterialController = async (req, res) => {
  try {
    await getProductByMaterial(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySearchController = async (req, res) => {
  try {
    await getProductBySearch(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByBrandController = async (req, res) => {
  try {
    await getProductByBrand(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByColorController = async (req, res) => {
  try {
    await getProductByColor(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByGenderController = async (req, res) => {
  try {
    await getProductByGender(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductByLengthController = async (req, res) => {
  try {
    await getProductByLength(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySeasonController = async (req, res) => {
  try {
    await getProductBySeason(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySizeController = async (req, res) => {
  try {
    await getProductBySize(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getProductBySleeveController = async (req, res) => {
  try {
    await getProductBySleeve(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteProductController = async (req, res) => {
  try {
    await deleteProduct(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const editProductController = async (req, res) => {
  try {
    await editProduct(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
