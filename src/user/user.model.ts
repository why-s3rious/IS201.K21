import * as mongoose from 'mongoose';
import { Model, Document } from 'mongoose';
export const UserSchema = new mongoose.Schema({
  name: String,
  info: String,
  contact : String,
  desc : String ,
  id_contract:String ,
});

export interface UserModel extends Document {
  name: string;
  info: string;
  contact: string;
  desc: string;
  id_contract: string;
}
