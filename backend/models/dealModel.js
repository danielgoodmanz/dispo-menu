import mongoose from 'mongoose';

//a schema is a guide for the model
const dealSchema = new mongoose.Schema(
  {
    address: { type: String },
    livingArea: { type: String },
    lot: { type: String },
    yearBuilt: { type: Number },
    escrow: { type: String },
    closing: { type: String },
    price: { type: String },
    description: { type: String },
    photo: { type: String },
  },
  { timestamps: true }
);

//the model is then created here and you give it a singular name & pass it the schema
//use ES6 style in both import & export statements always!
const Deal = mongoose.model('Deal', dealSchema);
export default Deal;
