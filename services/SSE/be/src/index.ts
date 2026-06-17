import express, {type Request, type Response } from 'express';
import {get, set, type TableData} from './dummyMemory.js';
import EventEmitter from 'events';

const events = new EventEmitter();
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/events', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');

    const sendE = (jsonData: any) => {
        res.write(`data: ${JSON.stringify(jsonData)}\n`);
    };

    events.on('table-changed', sendE);

    sendE(get('table1')) //init

    req.on('close', () => {
        res.end();
    });

});

app.post('/tables', (req: Request, res: Response) => {
    let table: TableData | null;
    if(req.body && req.body.tableName && req.body.value){
        table = get(req.body.tableName);

        if(table && table.value !== req.body.value){
            const template: TableData = {value: req.body.value, oldValue: table.value, timeStamp: new Date()};

            set(req.body.tableName, template);

            events.emit('table-changed', template);

            res.status(201).send(JSON.stringify(template));
        }
        // TODO no table data in memory
    } else
        res.status(400).send('No table name or value provided!');

})

app.get('/log', (req: Request, res: Response) => {
    res.send(JSON.stringify({hi: "1"}));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});