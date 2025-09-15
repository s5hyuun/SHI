import express from 'express';
import path from 'path';

const app = express();


app.get("/image", (req, res) => {
    res.sendFile( path.join(path.resolve(), "04/public/node.png"));
});

app.get("/download", (req, res) => {
    res.download( path.join(path.resolve(), "04/public/node.png"));
});

app.listen(3000);