import { Request, Response } from "express";
import { PrescriptionsModel } from "../../model/prescriptions/prescriptionsModel";

export const findPrescriptions = async (req: Request, res: Response) => {
  const id = req.params.id;
  const prescriptions = await PrescriptionsModel.findPrescriptions(
    parseInt(id)
  );
  if (!prescriptions) {
    return res.status(404).json({
      message: "Prescriptions not found",
    });
  }
  console.log(prescriptions);
  return res.json({
    prescriptions,
    message: "Prescriptions fetched successfully",
  });
};
