import express from "express";
import cors from "cors";
import { appRouter } from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/budget', appRouter);
app.listen(2200, () => { console.log("start port 2200") });