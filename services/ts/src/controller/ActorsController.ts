import {NextFunction, Request, Response} from "express";

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

export const handleCreateReq = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)

    switch (req.body.first_name) {
        case null:
        case undefined:
            res.status(400).json({"error": "First name is required"});
            break;

        case '':
            res.status(400).json({"error": "First name can't be empty"});
            break;
    }

    switch (req.body.last_name) {
        case null:
        case undefined:
            res.status(400).json({"error": "Last name is required"});
            break;

        case '':
            res.status(400).json({"error": "Last name can't be empty"});
            break;
    }

    next();
}

export const handleDeleteReq = (state: boolean = false) =>
    async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.params.id);
        if (!state) {
            if (req.params?.id && !isNaN(Number(req.params.id))) {
                next();
                return;
            }

            res.status(400).json({"error": "Actor id is required!"});
        } else {
            if (res.locals.data === 1) {
                res.status(200).json({
                    "success": "Actor whit id: " + req.params.id + " is deleted.",
                    "data": res.locals.data
                });
            } else {
                res.status(400).json({"error": "Actor with id: " + req.params.id + " does not exist!."});
            }

        }

    }