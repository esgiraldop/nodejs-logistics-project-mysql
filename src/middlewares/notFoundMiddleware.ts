import { Request, Response } from "express";

const notFoundMiddleware = (req: Request, res: Response): void => {
  res.status(404).json({
    message: "Not Found",
    status: 404,
  });
};

export default notFoundMiddleware;
