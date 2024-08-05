"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prescriptionsController_1 = require("../controller/prescriptionsController");
const prescriptionsRouter = express_1.default.Router();
prescriptionsRouter.post("/", prescriptionsController_1.insert);
prescriptionsRouter.get('/:id', prescriptionsController_1.findPrescriptions);
exports.default = prescriptionsRouter;
