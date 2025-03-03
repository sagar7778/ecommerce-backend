import express from "express";
import {
  createProductController,
  deleteProductController,
  editProductController,
  getProductController,
  getProductByIdController,
  getProductByCategoryController,
  getProductByFitController,
  getProductByMaterialController,
  getProductBySearchController,
  getProductByBrandController,
  getProductByColorController,
  getProductByGenderController,
  getProductByLengthController,
  getProductBySeasonController,
  getProductBySizeController,
  getProductBySleeveController,
} from "../controller/product.js";
const router = express.Router();

router.post("/add", createProductController);
router.delete("/delete/:id", deleteProductController);
router.put("/edit/:id", editProductController);
router.get("/get", getProductController);
router.get("/get/:id", getProductByIdController);

// Product filtering routes
router.get("/category/:category", getProductByCategoryController);
router.get("/fit/:fit", getProductByFitController);
router.get("/material/:material", getProductByMaterialController);
router.get("/search", getProductBySearchController);
router.get("/brand/:brand", getProductByBrandController);
router.get("/color/:color", getProductByColorController);
router.get("/gender/:gender", getProductByGenderController);
router.get("/length/:length", getProductByLengthController);
router.get("/season/:season", getProductBySeasonController);
router.get("/size/:size", getProductBySizeController);
router.get("/sleeve/:sleeve", getProductBySleeveController);

export default router;
