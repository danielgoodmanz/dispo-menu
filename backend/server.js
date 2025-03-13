import express from 'express';
//make sure your .env file is in the root of your app.js file
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import {
  getDeals,
  getDeal,
  addDeal,
  updateDeal,
  updateSoldStatus,
  deleteDeal,
} from './controllers/dealController.js';

const app = express();
//allows for cross origin requests, backend to frontend
app.use(cors({ origin: 'https://dispo-menu.us' }));
// app.use(cors());
//middleware
app.use(express.json());

//db connection
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // only listen to the port after DB connects
    app.listen(process.env.PORT || 3000, () => {
      console.log('live');
    });
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
};

db();

//middleware
app.use(express.json());

//routes
app.get('/', getDeals);
app.get('/deal/:id', getDeal);
app.post('/add', addDeal);
app.put('/update/:id', updateDeal);
app.put('/marksold/:id', updateSoldStatus);
app.delete('/delete/:id', deleteDeal);
