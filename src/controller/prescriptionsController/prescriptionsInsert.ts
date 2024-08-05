import { Request, Response } from "express";
import { PrescriptionsModel } from "../../model/prescriptions/prescriptionsModel";

export const insert = async (req: Request, res: Response) => {
  const prescription = req.body;
  const newPrescription = await PrescriptionsModel.save(prescription);
  if (!newPrescription) {
    return res.status(404).json({
      message: "Prescription is not created",
    });
  }
  console.log(newPrescription, "is inserted");
  return res.status(201).json({
    prescription: newPrescription,
    message: "Prescription is created",
  });
};
