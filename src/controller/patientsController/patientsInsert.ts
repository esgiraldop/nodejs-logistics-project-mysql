import { Request, Response } from "express";
import { PatientsModel } from "../../model/patients/patientsModel";

export const insert = async (req: Request, res: Response) => {
  const patient = req.body;
  const newPatient = await PatientsModel.save(patient);
  if (!newPatient) {
    return res.status(404).json({
      message: "Patient is not created",
    });
  }
  console.log(newPatient, "is insert");
  return res.status(201).json({
    patient: newPatient,
    message: "Patient is created",
  });
};
