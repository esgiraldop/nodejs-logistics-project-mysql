"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
let pool;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
try {
    exports.pool = pool = promise_1.default.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    });
    console.log("data base conected");
}
catch (err) {
    console.log(err);
}
