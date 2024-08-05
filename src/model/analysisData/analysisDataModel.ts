import { pool } from "../../config/db";


interface AnalysisData {
    idPatient: number;
    medicamentoId: number;
    dose: number;
    frecuence: string;
    duration: string;
};

export class AnalysisDataModel {
    static async exportData(id: number): Promise<Object> {
        try {
            const [response]: any = await pool.query("SELECT p.dose, p.frecuence, p.duration, prod.name AS medicamentoName, prod.quantity AS quantity, pat.name AS patientName FROM   prescriptions p JOIN Products prod ON p.medicamentoId = prod.id JOIN patients pat ON p.idPatient = pat.id WHERE p.idPatient = ?", [id]);
            return response as Object;
        } catch (error) {
            console.error('Error in finding prescriptions', error);
            throw new Error('new error in prescription.findPrescriptions');      
        }
    };
};