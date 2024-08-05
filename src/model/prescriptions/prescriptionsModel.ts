import { pool } from "../../config/db";

interface Prescriptions {
  idPatient: number;
  medicamentoId: number;
  dose: number;
  frecuence: string;
  duration: string;
}

export class PrescriptionsModel {
  static async save(prescription: Prescriptions): Promise<Prescriptions[]> {
    try {
      const [response]: any = await pool.query(
        "INSERT INTO prescriptions (idPatient, medicamentoId, dose, frecuence, duration) VALUES (?,?,?,?,?)",
        [
          prescription.idPatient,
          prescription.medicamentoId,
          prescription.dose,
          prescription.frecuence,
          prescription.duration,
        ]
      );
      const [prescriptionCreated] = await pool.query(
        "SELECT * FROM prescriptions WHERE id = ?",
        [response.insertId]
      );
      return prescriptionCreated as Prescriptions[];
    } catch (error) {
      console.log("Error in saving", error);
      throw new Error("Ocurrio un error en prescription.save");
    }
  };

  static async findPrescriptions(id: number): Promise<Object> {
    try {
        const [response]: any = await pool.query("SELECT p.dose, p.frecuence, p.duration, prod.name AS medicamentoName, prod.quantity AS quantity, pat.name AS patientName FROM   prescriptions p JOIN Products prod ON p.medicamentoId = prod.id JOIN patients pat ON p.idPatient = pat.id WHERE p.idPatient = ?", [id]);
        return response as Object;
    } catch (error) {
        console.error('Error in finding prescriptions', error);
        throw new Error('new error in prescription.findPrescriptions');
    }
  }
}
