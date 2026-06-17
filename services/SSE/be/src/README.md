# SSE prototype

## SSE URI
/events

### POST TABLE UPDATE
/tables

#### Body
{
"tableName": "table1",
"value": "22.2"
}


```SSE
ata: {"value":"20","oldValue":"10","timeStamp":"2026-06-17T21:27:53.400Z"}
data: {"value":"22","oldValue":"20","timeStamp":"2026-06-17T21:28:49.805Z"}
data: {"value":"22.2","oldValue":"22","timeStamp":"2026-06-17T21:28:59.054Z"}
```