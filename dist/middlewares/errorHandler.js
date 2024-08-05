"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHAndler = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        message: "Internal Server Error",
        status: 500,
    });
};
exports.default = errorHAndler;
