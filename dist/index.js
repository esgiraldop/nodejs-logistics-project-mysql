"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const notFoundMiddleware_1 = __importDefault(require("./middlewares/notFoundMiddleware"));
const router_1 = __importDefault(require("./router/router"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3009;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", router_1.default);
app.use(notFoundMiddleware_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
