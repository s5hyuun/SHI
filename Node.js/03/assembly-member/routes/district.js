import express from 'express';
import { getListByDistrict } from '../db.js';
const router = express.Router();

router.get('/:district', async (req, res) => {
  const list = await getListByDistrict(req.params.district)
  res.json(list);
});

export default router;