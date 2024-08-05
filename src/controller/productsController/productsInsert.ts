import { Medicaments } from "../../model/productsModel";
import { Request, Response } from "express";

export const insert = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await Medicaments.save(product);
    console.log(newProduct, "in insert");
    return res.status(201).json({
      product: newProduct,
      message: "Product created successfully",
    });
  };