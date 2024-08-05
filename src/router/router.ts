import express, { Express } from "express";
import routes from "../view/Routes";

const router = express.Router();

router.use("/", routes);

export default router;
