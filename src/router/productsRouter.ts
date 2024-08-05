import express, { Express } from "express";
import {
  getAll,
  deleteProducts,
  insert,
  getById,
  updateQuantity,
} from "../controller/productsController";

const productsRouter = express.Router();

productsRouter.get("/", getAll);
productsRouter.get("/:id", getById);
productsRouter.post("/", insert);
productsRouter.put("/:id", updateQuantity);
productsRouter.delete("/", deleteProducts);

export default productsRouter;
