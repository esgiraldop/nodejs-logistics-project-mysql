import express from "express";
import dotenv from "dotenv";
import errorHAndler from "./middlewares/errorHandler";
import notFoundMiddleware from "./middlewares/notFoundMiddleware";
import router from "./router/router";

dotenv.config();
const PORT = process.env.PORT || 3009;

const app = express();

app.use(express.json());
app.use("/", router);
app.use(notFoundMiddleware);
app.use(errorHAndler);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
