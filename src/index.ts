import express from "express";
import cors from "cors";

import transactionRoutes from "./routes/transactions";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/transactions", transactionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
