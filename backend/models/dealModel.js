import mongoose from 'mongoose';

//a schema is a guide for the model
const dealSchema = new mongoose.Schema(
  {
    address: { type: String, required: true },
    livingArea: { type: Number, required: true },
    lot: { type: Number, required: true },
    yearBuilt: { type: Number, required: true },
    escrow: { type: String, required: true },
    closing: { type: String, required: true },
    price: { type: String, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true }
);

//the model is then created here and you give it a singular name & pass it the schema
module.exports = mongoose.model('Deal', dealSchema);
