import * as mongoose from 'mongoose';
import { Model, Document } from 'mongoose';
export const PaymentSchema = new mongoose.Schema({
  price_water: Number,
  price_electric: Number,
  price_else: Number,
});

export interface PaymentModel extends Document {
  price_water: number;
  price_electric: number;
  price_else: number;
}
