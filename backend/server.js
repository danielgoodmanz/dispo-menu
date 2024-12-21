import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongooose';
import {
  getDeals,
  getDeal,
  addDeal,
  updateDeal,
  deleteDeal,
} from '@/controllers/dealController';

//middleware
app.use(express.json());

const app = express();

//routes
app.get('/', getDeals);
app.get('/:id', getDeal);
app.post('/add', addDeal);
app.put('/update/:id', updateDeal);
app.delete('/delete/:id', deleteDeal);

app.listen(3000, () => {
  console.log('live on 3k');
});
