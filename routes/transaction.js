import { Router } from "express";
import { transactionController } from "../controller/transasction.js";

export const transactionRouter = Router();

transactionRouter.get('/', transactionController.get)
transactionRouter.get('/:id', transactionController.getById)
transactionRouter.post('/', transactionController.post)