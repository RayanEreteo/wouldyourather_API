import type { Request, Response } from "express";
import { connectToDatabase } from "../modules/dbConn.ts";

export async function addDilemma(req: Request, res: Response): Promise<any> {
    const { red, blue } = req.body;
    if (!red || !blue) {
        return res.status(400).json({ success: false, message: "Please fill in both fields." });
    }

    try {
        const con = await connectToDatabase();
        await con?.execute(
            "INSERT INTO dilemma (red, blue, red_click, blue_click) VALUES (?, ?, ?, ?)",
            [red, blue, 0, 0]
        );

        return res.status(200).json({ success: true, message: "Dilemma added successfully." });
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ success: false, message: "Server Error." });
    }
}

export async function getDilemma(req: Request, res: Response): Promise<any> {
    try {
        const con = await connectToDatabase();

        const [rows] = await con?.query("SELECT * FROM dilemma ORDER BY RAND() LIMIT 1") as any;
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: "No dilemmas found." });
        }
        const dilemma = rows[0];

        return res.status(200).json({ success: true, returnedDilemma: dilemma });
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ success: false, message: "Server Error." });
    }
}

export async function setDilemmaClicks(req: Request, res: Response): Promise<any> {
    const { id, color } = req.body

    if (!id || !color) {
        return res.status(400).json({success: false, message: "Error : Bad Request"})
    }

    try {
        const con = await connectToDatabase()
        
        const query = `UPDATE dilemma SET ${color} = ${color} + 1 WHERE id = ?`

        await con?.execute(query, [id]);

        res.status(200).json({success: true})
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ success: false, message: "Server Error." });
    }
}