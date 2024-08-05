import express, { Express } from "express";
import productsRouter from "../router/productsRouter";
import patientsRouter from "../router/patientsRouter";
import prescriptionsRouter from "../router/prescritionsRouter";


const routes = express();

routes.use('/products', productsRouter);
routes.use('/patients', patientsRouter);
routes.use('/prescriptions', prescriptionsRouter);


export default routes;