import { Router } from 'express';

const router = Router();

router.get('/:name', (req, res) => {
    const { name } = req.params;
    if (!name) {
        return res.status(404).send('이름이 없습니다');
    }
    res.send(`<h2> 안녕하세요, ${name}님! </h2>`);
});

export default router;