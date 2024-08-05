import mysql2, { Pool } from "mysql2/promise";
let pool: Pool;
import dotenv from 'dotenv'

dotenv.config()

try {
  pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  });

  console.log("data base conected");
} catch (err) {
  console.log(err);
}

export { pool };
