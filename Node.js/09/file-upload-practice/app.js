import express from 'express';
import multer from 'multer';
import path from 'node:path';

const __dirname = import.meta.dirname;
const app = express();

// multer 저장소 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public', 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, file.originalname);
  }
});

// 파일 저장 방식(storage)을 적용한 multer 미들웨어 생성
const upload = multer({ storage });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/upload', (req, res) => {
  res.render('upload-form');
});

// POST /upload 경로에만 sigle 미들웨어 등록
app.post('/upload', upload.single('f'), (req, res) => {
  // res.send(`저장된 파일명: ${req.file.filename}`);
  res.render('upload-result', { filename: req.file.filename });
});

app.get('/multi1', (req, res) => {
  res.render('upload-multi1-form');
});

app.post('/multi1', upload.array('photos'), (req, res) => {
  const filenames = req.files.map(f => f.filename);
  res.render('upload-multi1-result', { filenames });
});

app.get('/multi2', (req, res) => {
  res.render('upload-multi2-form');
});

app.post('/multi2', upload.fields([
  { name: 'photos' },{ name: 'avatar', maxCount: 1 }
]), (req, res) => {
  const photos = (req.files['photos'] || []).map(f => f.filename);
  const avatar = req.files['avatar']?.[0]?.filename;
  res.render('upload-multi2-result', { photos, avatar });
});

app.get('/', (req, res) => {
  res.send(`
    <h2>파일 다운로드</h2>
    <ul>
      <li><a href="/view/sample.pdf">PDF 열기</a></li>
      <li><a href="/download/sample.pdf">PDF 다운로드</a></li>
    </ul>
  `);
});

// 브라우저로 직접 보기
app.get('/view/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'downloads', req.params.filename);
  res.sendFile(filePath);
});

// 다운로드로 받기
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'downloads', req.params.filename);
  res.download(filePath); // 다운로드 창 뜸
});

app.listen(3000, () => {
  console.log('http://localhost:3000/upload');
});
