import { Injectable } from '@nestjs/common';
import { RECEIPT } from 'src/shared/constant.shema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecieptModel } from './reciept.model';

@Injectable()
export class RecieptService {
    constructor(
        @InjectModel(RECEIPT) private recieptModel : Model<RecieptModel>
    ){}

    async all(){
        return await this.recieptModel.find();
    }
   async findById(id){
        return await this.recieptModel.findById(id)
    }
   async create(data){
        return await (await this.recieptModel.create(data)).save() 
    }
   async update(id,data){
        let res = await this.recieptModel.findOne({_id :id}) 
        res = Object.assign(res,data)
        res.save();
    }
   async delete(id){
        return this.recieptModel.findByIdAndDelete(id);
    }


}
