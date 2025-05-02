import type { Request, Response } from "express";
import { connectToDatabase } from "../modules/dbConn.ts";

export async function addDilemma(req: Request, res: Response) {
    // const { red, blue } = req.body;
    // if (!red || !blue) {
    //     res.status(400).json({ error: "Invalid input." });
    // }

    connectToDatabase()
    res.send("test")
}