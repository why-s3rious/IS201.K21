import { Injectable } from '@nestjs/common';
import { PAYMENT } from 'src/shared/constant.shema';
import { PaymentModel } from './payment.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel(PAYMENT) private paymentModel : Model<PaymentModel>
    ){}

    async all(){
        return await this.paymentModel.find();
    }
   async findById(id){
        return await this.paymentModel.findById(id)
    }
   async create(data){
        return await (await this.paymentModel.create(data)).save() 
    }
   async update(id,data){
        let res = await this.paymentModel.findOne({_id :id}) 
        res = Object.assign(res,data)
        res.save();
    }
   async delete(id){
        return this.paymentModel.findByIdAndDelete(id);
    }

}
