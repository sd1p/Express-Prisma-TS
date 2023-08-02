import type{Request,Response,NextFunction} from "express"

export const routeNotFound = (req:Request, res:Response, next:NextFunction) => {
    const error = new Error(`Route Not Found -${req.originalUrl}`);
    res.status(404)
    next(error);
  };
  
  //handling error messages and status codes
export const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  };
  
  