import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema(
  {
    address: String,
    livingArea: String,
    lot: String,
    yearBuilt: String,
    escrow: String,
    closing: String,
    price: String,
    photo: String,
  },
  { timestamps: true }
);
