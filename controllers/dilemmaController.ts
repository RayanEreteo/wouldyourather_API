import type { Request, Response } from "express";

export function addDilemma(req: Request, res: Response) {
    const { red, blue } = req.body;
    if (!red || !blue) {
        res.status(400).json({ error: "Invalid input." });
    }

    res.send("test")
}