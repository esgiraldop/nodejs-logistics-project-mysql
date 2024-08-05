import { pool } from "../config/db";

interface ProductsInterface {
  name: string;
  quantity: number;
  expirationDate: Date;
  price: number;
}

export class Medicaments {
  static async save(products: ProductsInterface): Promise<ProductsInterface[]> {
    try {
      const [response]: any = await pool.query(
        "INSERT INTO Products (name, quantity, expirationDate, price) VALUES (?, ?, ?, ?)",
        [
          products.name,
          products.quantity,
          products.expirationDate,
          products.price,
        ]
      );
      const [productCreated] = await pool.query(
        "SELECT * FROM Products WHERE id = ?",
        [response.insertId]
      );
      return productCreated as ProductsInterface[];
    } catch (err) {
      console.log("Error saving products:", err);
      throw new Error("Ocurrio un error");
    }
  }

  static async findAll(): Promise<ProductsInterface[]> {
    try {
      const [products]: any = await pool.query("SELECT * FROM Products");
      return products as ProductsInterface[];
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Error fetching products: function: findAll");
    }
  }

  static async findById(id: number): Promise<ProductsInterface[]> {
    try {
      const [product]: any = await pool.query(
        "SELECT * FROM Products WHERE id =?",
        [id]
      );
      return product as ProductsInterface[];
    } catch (error) {
      console.error("Error fetching product:", error);
      throw new Error("Error fetching product: function: findById");
    }
  }

  static async update(id: number, product: ProductsInterface): Promise<number> {
    try {
      const [resolve]: any = await pool.query(
        "UPDATE Products SET quantity =? WHERE id =?",
        [product.quantity, id]
      );
      return resolve.affectedRows;
    } catch (error) {
      throw new Error("Error updating has no been upated");
    }
  }

  static async filterProductsDate(): Promise<ProductsInterface> {
    try {
      const [resolve]: any = await pool.query(
        "DELETE FROM Products WHERE expirationDate < CURDATE()"
      );
      console.log(`Deleted ${resolve.affectedRows} expired products.`);
      return resolve as ProductsInterface;
    } catch (error) {
      console.log("Error deleting expired products", error);
      throw new Error("Error ocurred while removing expired products:");
    }
  }
}
