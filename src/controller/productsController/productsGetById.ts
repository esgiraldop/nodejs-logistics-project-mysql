import { Medicaments } from "../../model/productsModel";
import { Request, Response } from "express";

export const getById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const product = await Medicaments.findById(parseInt(id));
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      return res.json({
        product,
        message: "Product fetched successfully",
      });
    } catch (error) {
      console.error("Error fetching product, error in getById", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };