import { Router } from "express";
import { transactionRouter } from "./transaction.js";

export const appRouter = Router();

appRouter.use('/transactions', transactionRouter)