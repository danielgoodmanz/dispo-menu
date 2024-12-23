import express from 'express';
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';
import {
  getDeals,
  getDeal,
  addDeal,
  updateDeal,
  deleteDeal,
} from './controllers/dealController.js';

const app = express();

//middleware
app.use(express.json());

//routes
app.get('/', getDeals);
app.get('/:id', getDeal);
app.post('/add', addDeal);
app.put('/update/:id', updateDeal);
app.delete('/delete/:id', deleteDeal);

app.listen(process.env.PORT, () => {
  console.log('live');
});
