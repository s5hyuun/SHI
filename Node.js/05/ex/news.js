import express from 'express';
import path from 'path';

const __dirname = import.meta.dirname;

const app = express();
// app.use(expressLayouts); // 레이아웃 미들웨어
// app.set('layout', 'layout'); // 기본 레이아웃 파일
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/news', (req, res) => {
  const newsItems = [
    {
      title: 'Node.js 22 출시',
      date: '2025-06-01',
      content: '성능이 더욱 향상된 Node.js 22가 정식 출시되었습니다.'
    },
    {
      title: 'Express 5 정식 버전 공개',
      date: '2025-05-20',
      content: '10년만의 메이저 업그레이드로 많은 주목을 받고 있습니다.'
    },
  ];
  res.render('layout', {
    title: '뉴스 페이지',
    newsList: newsItems,
    page: 'news'
  });
});

app.listen(3000, () => {
  console.log(' 뉴스 페이지 서버 실행 중: http://localhost:3000/news');
});
