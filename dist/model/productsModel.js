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
exports.Medicaments = void 0;
const db_1 = require("../config/db");
class Medicaments {
    static save(products) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [response] = yield db_1.pool.query("INSERT INTO Products (name, quantity, expirationDate, price) VALUES (?, ?, ?, ?)", [
                    products.name,
                    products.quantity,
                    products.expirationDate,
                    products.price,
                ]);
                const [productCreated] = yield db_1.pool.query("SELECT * FROM Products WHERE id = ?", [response.insertId]);
                return productCreated;
            }
            catch (err) {
                console.log("Error saving products:", err);
                throw new Error("Ocurrio un error");
            }
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [products] = yield db_1.pool.query("SELECT * FROM Products");
                return products;
            }
            catch (error) {
                console.error("Error fetching products:", error);
                throw new Error("Error fetching products: function: findAll");
            }
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [product] = yield db_1.pool.query("SELECT * FROM Products WHERE id =?", [id]);
                return product;
            }
            catch (error) {
                console.error("Error fetching product:", error);
                throw new Error("Error fetching product: function: findById");
            }
        });
    }
    static update(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [resolve] = yield db_1.pool.query("UPDATE Products SET quantity =? WHERE id =?", [product.quantity, id]);
                return resolve.affectedRows;
            }
            catch (error) {
                throw new Error("Error updating has no been upated");
            }
        });
    }
    static filterProductsDate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [resolve] = yield db_1.pool.query("DELETE FROM Products WHERE expirationDate < CURDATE()");
                console.log(`Deleted ${resolve.affectedRows} expired products.`);
                return resolve;
            }
            catch (error) {
                console.log("Error deleting expired products", error);
                throw new Error("Error ocurred while removing expired products:");
            }
        });
    }
}
exports.Medicaments = Medicaments;
