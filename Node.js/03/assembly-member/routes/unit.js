import express from 'express';
import { getListByUnit } from '../db.js';
const router = express.Router();



router.get('/', async (req, res) => {
  const list = await getListByUnit('제헌')
  res.json(list);
});

router.get('/:num', async (req, res) => {
  const list = await getListByUnit(req.params.num)
  res.json(list);
});

export default router;