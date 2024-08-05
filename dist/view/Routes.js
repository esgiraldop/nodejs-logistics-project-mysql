"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRouter_1 = __importDefault(require("../router/productsRouter"));
const patientsRouter_1 = __importDefault(require("../router/patientsRouter"));
const prescritionsRouter_1 = __importDefault(require("../router/prescritionsRouter"));
const routes = (0, express_1.default)();
routes.use('/products', productsRouter_1.default);
routes.use('/patients', patientsRouter_1.default);
routes.use('/prescriptions', prescritionsRouter_1.default);
exports.default = routes;
