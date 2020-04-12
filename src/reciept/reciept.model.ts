import * as mongoose from 'mongoose';
import { Model, Document } from 'mongoose';
export const RecieptSchema = new mongoose.Schema({
  price_room: Number,
  price_constant: Number,
  price_water: Number,
  price_electric: Number,
});

export interface RecieptModel extends Document {
  price_water: number;
  price_electric: number;
  price_room: number;
  price_constant: number;
}
