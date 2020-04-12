import * as mongoose from 'mongoose';
import { Model, Document } from 'mongoose';
export const ContractSchema = new mongoose.Schema({
  bieu_phi_tuy_bien: String,
  bieu_phi_gia_phong: String,
  status: String,
  id_reciept: String,
  id_motel_room: String,
});

export interface ContractModel extends Document {
  bieu_phi_tuy_bien: string;
  bieu_phi_gia_phong: string;
  status: string;
  id_reciept: string;
  id_motel_room: string;
}
