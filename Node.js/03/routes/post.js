import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('게시글 목록을 보여줍니다.');
});

router.get('/:num', (req, res) => {
    const num = req.params.num;
    res.send(`${num}번 게시물 내용`);
});

export default router;