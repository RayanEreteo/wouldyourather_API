import type { Request, Response } from "express";

export function addDilemma(req: Request, res: Response) {
    res.status(200).json({
        message: 'Dilemma added successfully',
    })
}