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
exports.findPrescriptions = void 0;
const prescriptionsModel_1 = require("../../model/prescriptions/prescriptionsModel");
const findPrescriptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const prescriptions = yield prescriptionsModel_1.PrescriptionsModel.findPrescriptions(parseInt(id));
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
});
exports.findPrescriptions = findPrescriptions;
