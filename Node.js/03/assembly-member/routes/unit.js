import express from 'express';
import { getListByUnit } from '../db.js';
const router = express.Router();

router.get('/:num', async (req, res) => {
  const list = await getListByUnit(req.params.num)
  res.json(list);
});

export default router;