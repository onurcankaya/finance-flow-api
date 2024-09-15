import express, { Request, Response } from "express";
import pool from "../db";

const router = express.Router();

// create a transaction
router.post("/", async (req: Request, res: Response) => {
  try {
    const { amount, type, description, date } = req.body;

    const newTransaction = await pool.query(
      "INSERT INTO transactions (amount, type, description, date) VALUES ($1, $2, $3, $4) RETURNING *",
      [amount, type, description, date]
    );

    res.status(201).json(newTransaction.rows[0]);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// fetch all transactions
router.get("/", async (req: Request, res: Response) => {
  try {
    const allTransactions = await pool.query("SELECT * from transactions");

    res.status(200).json(allTransactions.rows);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
