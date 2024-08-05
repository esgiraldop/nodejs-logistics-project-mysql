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
exports.insert = void 0;
const patientsModel_1 = require("../../model/patients/patientsModel");
const insert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = req.body;
    const newPatient = yield patientsModel_1.PatientsModel.save(patient);
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
});
exports.insert = insert;
