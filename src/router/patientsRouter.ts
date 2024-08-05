import express, { Express } from "express";
import { insert } from "../controller/patientsController";

const patientsRouter = express.Router();
patientsRouter.post("/", insert);

export default patientsRouter;
