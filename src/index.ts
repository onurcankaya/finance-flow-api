import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Finance Flow API");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
