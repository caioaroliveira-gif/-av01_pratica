import {type Request, type Response}  from "express"
import express from "express"
const app = express();
const port = 3000;

app.use(express.json())

app.get("/health", (req:Request, res: Response) => res.json({status: "ok"}))