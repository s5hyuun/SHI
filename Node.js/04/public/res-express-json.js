import express from 'express';
import path from 'path';

const app = express();

app.get("/down1", (req, res) => {
    // Font/Node.js/public/example.txt
    // res.download('../다운로드/x.txt');
    // 현재 경로 확인하기
    console.log( process.cwd() );
    console.log( path.resolve() ); // node를 실행한 위치 
    console.log( import.meta.dirname ); // 실행되는 파일의 경로

    // res.download( path.resolve() + "04/public/example,txt");

    res.download( path.join(path.resolve(), '04', 'public', 'example.txt') );

    // 1
    app.get("/donw1", (req, res) => {
        res.sownload (path.join(path.resolve(), '04', 'public',  'example.txt'));
    });

    // 2
    app.get("/donw2", (req, res) => {
        res.sownload (path.join(path.resolve(), '04', 'public',  'example.txt'));
    });

    // 3


    // res.send("1");
})
app.get('/', (req, res) => {
    const data = { "name": "nodejs", "age": 10 };
    res.type("image")
    res.send(data);
});

app.listen(3000);