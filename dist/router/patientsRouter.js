"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsController_1 = require("../controller/patientsController");
const patientsRouter = express_1.default.Router();
patientsRouter.post("/", patientsController_1.insert);
exports.default = patientsRouter;
