import express from "express";
import cors from "cors"; // Importar o CORS
import { deviceAirRouter } from "./routes/qualityAir.routes.js";

const app = express();
const port = 3000;

app.use(cors()); // Habilitar CORS
app.use(express.json());
app.use(deviceAirRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
