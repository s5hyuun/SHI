import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('게시글 목록을 보여줍니다.');
});

router.get('/1', (req, res) => {
    res.send('홈페이지입니다.');
});

export default router;