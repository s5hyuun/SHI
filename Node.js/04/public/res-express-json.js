import express from 'express';
import path from 'path';

const app = express();

app.get("/down1", (req, res) => {
    // Font/Node.js/public/example.txt
    // res.download('../다운로드/x.txt');
    // 현재 경로 확인하기
    console.log( process.cwd() );
    console.log( path.resolve() ); // 프로젝트 경로
    console.log( import.meta.dirname ); // 실행되는 파일의 경로

    // res.download( path.xresolve() + "04/public/example,txt");

    res.download( path.join(path.resolve(), '04', 'public', 'example.txt') );

    // res.send("1");
})
app.get('/', (req, res) => {
    const data = { "name": "nodejs", "age": 10 };
    res.type("image")
    res.send(data);
});

app.listen(3000);