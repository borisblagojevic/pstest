import {Request, Response, NextFunction} from "express";
import {getPageFilm} from "../model/Movies";


export const handlePageReq = async (req: Request, res: Response, next: NextFunction) => {

 await getPageFilm();

 res.status(200).json("hh");
}