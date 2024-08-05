"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionsModel = void 0;
const db_1 = require("../../config/db");
class PrescriptionsModel {
    static save(prescription) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [response] = yield db_1.pool.query("INSERT INTO prescriptions (idPatient, medicamentoId, dose, frecuence, duration) VALUES (?,?,?,?,?)", [
                    prescription.idPatient,
                    prescription.medicamentoId,
                    prescription.dose,
                    prescription.frecuence,
                    prescription.duration,
                ]);
                const [prescriptionCreated] = yield db_1.pool.query("SELECT * FROM prescriptions WHERE id = ?", [response.insertId]);
                return prescriptionCreated;
            }
            catch (error) {
                console.log("Error in saving", error);
                throw new Error("Ocurrio un error en prescription.save");
            }
        });
    }
    ;
    static findPrescriptions(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [response] = yield db_1.pool.query("SELECT p.dose, p.frecuence, p.duration, prod.name AS medicamentoName, prod.quantity AS quantity, pat.name AS patientName FROM   prescriptions p JOIN Products prod ON p.medicamentoId = prod.id JOIN patients pat ON p.idPatient = pat.id WHERE p.idPatient = ?", [id]);
                return response;
            }
            catch (error) {
                console.error('Error in finding prescriptions', error);
                throw new Error('new error in prescription.findPrescriptions');
            }
        });
    }
}
exports.PrescriptionsModel = PrescriptionsModel;