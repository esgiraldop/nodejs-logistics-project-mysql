"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundMiddleware = (req, res) => {
    res.status(404).json({
        message: "Not Found",
        status: 404,
    });
};
exports.default = notFoundMiddleware;
