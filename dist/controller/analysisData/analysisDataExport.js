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
exports.analysisDataExport = void 0;
const analysisDataModel_1 = require("../../model/analysisData/analysisDataModel");
const analysisDataExport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield analysisDataModel_1.AnalysisDataModel.exportData(parseInt(id));
    if (!data) {
        return res.status(404).json({
            message: "No data found"
        });
    }
    ;
});
exports.analysisDataExport = analysisDataExport;
