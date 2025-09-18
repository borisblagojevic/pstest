import {Request, Response, NextFunction} from "express";


export const handlePageReq = async (req: Request, res: Response, next: NextFunction) => {

 (req.query.cursor !== undefined && req.query.cursor !== '' && !isNaN(Number(req.query.cursor)))
     ? res.locals.cursor = req.query.cursor
     : res.locals.cursor = '0';

 (req.query.limit !== undefined && req.query.limit !== '' && !isNaN(Number(req.query.limit)))
     ? res.locals.limit = req.query.limit
     : res.locals.limit = '10';

   next();
}

export const handlePageRes = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        data: res.locals.data,
        meta: {
            limit: Number(res.locals.limit),
            old_cursor: Number(res.locals.cursor),
            new_cursor: res.locals.data[res.locals.data.length - 1].film_id,
            count: res.locals.data.length
        }
    });
}

export const handleReqGetMovieById = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.params.film_id && isNaN(Number(req.params.film_id))){
        res.status(400).send({error: "No movie with id: " + req.params.film_id});
    }

    next();
}