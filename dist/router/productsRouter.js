"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = require("../controller/productsController");
const productsRouter = express_1.default.Router();
productsRouter.get("/", productsController_1.getAll);
productsRouter.get("/:id", productsController_1.getById);
productsRouter.post("/", productsController_1.insert);
productsRouter.put("/:id", productsController_1.updateQuantity);
productsRouter.delete("/", productsController_1.deleteProducts);
exports.default = productsRouter;
