import { Medicaments } from "../../model/productsModel";
import { Request, Response } from "express";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const products = await Medicaments.findAll();
  console.log(products);
  return res.json({
    products,
    message: "All products fetched successfully",
  });
};