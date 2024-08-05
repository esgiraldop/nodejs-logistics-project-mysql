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
exports.getById = void 0;
const productsModel_1 = require("../../model/productsModel");
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield productsModel_1.Medicaments.findById(parseInt(id));
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.json({
            product,
            message: "Product fetched successfully",
        });
    }
    catch (error) {
        console.error("Error fetching product, error in getById", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});
exports.getById = getById;
