import { type Request, type Response, type NextFunction } from 'express';
import {db} from "./db.js";

export const basicAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers?.authorization ?? null;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.setHeader("WWW-Authenticate", 'Basic realm="secure login required');
        res.status(401).end("Auth required!");
    }
    const base64Cred = authHeader?.split(' ')[1] ?? null;

    if (!base64Cred)
        res.status(401).end("Credentials required!");

    const [username, password] : string[] = Buffer.from(base64Cred, 'base64')
        ?.toString('utf-8')
        ?.split(':') ?? ["", ""];

    const uPass = db[username];

    if (!uPass || uPass !== password) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        return res.status(401).send('Invalid credentials.');
    }

    next();
};