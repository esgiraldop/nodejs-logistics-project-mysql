import { Medicaments } from "../../model/productsModel";
import { Request, Response } from "express";

export const deleteProducts = async (req: Request, res: Response) => {
    const product = await Medicaments.filterProductsDate();
    if (!product) {
      return res.status(404).json({
        message: "No products to delete",
      });
    }
    res.json({
      message: "Products deleted successfully",
      deletedProducts: product,
    });
  };