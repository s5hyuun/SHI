import express from 'express';

const router = express.Router();

// GET /product → 상품 목록 응답
router.get('/', (req, res) => {
    res.send('상품 목록입니다.');
});

// GET /product/:id → 특정 상품 상세 정보
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`상품 상세 페이지 – ${id}번 상품`);
});
export default router;