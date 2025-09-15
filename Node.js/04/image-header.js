import express from 'express';
import path from 'path';

const app = express();


app.get("/image", (req, res) => {
    res.sendFile( path.join(path.resolve(), "04/public/node.png"));
    
// app.get('/image', (req, res) => {
//     const filePath = path.join(import.meta.dirname, '../public', 'node.png');
// })  // import.meta.dirname; >> 현재 코드가 실행되고 있는 위치
    
});

app.get("/download", (req, res) => {
    res.download( path.join(path.resolve(), "04/public/node.png"));
});

app.listen(3000);