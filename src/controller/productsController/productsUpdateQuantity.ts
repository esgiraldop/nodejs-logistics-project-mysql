import { Medicaments } from "../../model/productsModel";
import { Request, Response } from "express";

export const updateQuantity = async (req: Request, res: Response) => {
    try {
      const productQuantity = await Medicaments.update(
        parseInt(req.params.id),
        req.body
      );
      if (!productQuantity) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      console.log("Update successfully");
      return res.json({
        message: "Product quantity updated successfully",
      });
    } catch (error) {
      console.log("error updating quantity", error);
      throw new Error("error updating quantity");
    }
  };