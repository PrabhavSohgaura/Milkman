import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

//get all products from db
router.get("/", getAllProducts);

//get product by id
router.get("/:id", getProductById);

export default router;
