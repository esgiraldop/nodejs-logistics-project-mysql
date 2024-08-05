import { Request, Response, NextFunction } from "express";

const errorHAndler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(err.message);
  res.status(500).json({
    message: "Internal Server Error",
    status: 500,
  });
};

export default errorHAndler;
