import type { Request, Response } from "express";

export const UserId = (req: Request, res: Response) => {
  try {
    const user = req.auth;
    res.status(200).json({
      message: "UserId successfully recived.",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in getting userID",
    });
  }
};
