import express, { Express } from "express";
import { findPrescriptions, insert } from "../controller/prescriptionsController";

const prescriptionsRouter = express.Router();

prescriptionsRouter.post("/", insert);
prescriptionsRouter.get('/:id', findPrescriptions);

export default prescriptionsRouter;
