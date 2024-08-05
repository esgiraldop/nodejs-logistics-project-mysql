import { pool } from "../../config/db";

interface Patients {
  name: string;
  age: number;
  medical_history: string;
}

export class PatientsModel {
  static async save(patient: Patients): Promise<Patients[]> {
    try {
      const [response]: any = await pool.query(
        "INSERT INTO patients (name, age, medical_history) VALUES (?, ?, ?)",
        [patient.name, patient.age, patient.medical_history]
      );
      const [patientCreated] = await pool.query(
        "SELECT * FROM patients WHERE id = ?",
        [response.insertId]
      );
      return patientCreated as Patients[];
    } catch (error) {
      console.error("Error saving patients", error);
      throw new Error("Ocurrio un error in patient.save");
    }
  }

  // static async findAll(): Promise<Patients[]>
}
