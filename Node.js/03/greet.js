import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => {
    res.status(404).send(`페이지 없음`);
});

router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h2> 안녕하세요, ${name}님! </h2>`);
});

export default router;