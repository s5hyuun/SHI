import express from 'express';
import { getListByName } from '../db.js';
const router = express.Router();

router.get('/:name', async (req, res) => {
  const list = await getListByName(req.params.name)
  res.json(list);
});

export default router;