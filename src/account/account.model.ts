import * as mongoose from 'mongoose';
import { Model, Document } from 'mongoose';
export const AccountSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export interface AccountModel extends Document {
  username: string;
  password: string;
}
