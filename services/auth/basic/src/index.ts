import express , { type Request, type Response } from 'express';
import * as fs from "node:fs";
import * as https from "node:https";
import * as path from "node:path"
import { cwd } from 'node:process'
import {basicAuthMiddleware} from "./auth.js";

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/auth', basicAuthMiddleware, (req: Request, res: Response) => {
    res.status(200).send({"msg": "Hello again"});
});

const keyAndCert = {
    key: fs.readFileSync(path.join(cwd(), 'key.pem')),
    cert: fs.readFileSync(path.join(cwd(), 'cert.pem')),
};

 https.createServer(keyAndCert, app).listen(PORT, () => {
     console.log(`Secure Server is running on https://localhost:${PORT}`);
})
