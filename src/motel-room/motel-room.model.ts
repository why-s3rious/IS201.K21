import * as mongoose from 'mongoose';
import { Model, Document } from 'mongoose';
export const MotelRoomSchema = new mongoose.Schema({
    name : String,
    price :  String,
    status :  String,
    waterIndex :  String,
    electricIndex: String,
});

export interface MotelRoomModel extends Document {
    name : string;
    price : string ;
    status : string ;
    waterIndex : string ; 
    electricIndex:string;
}
