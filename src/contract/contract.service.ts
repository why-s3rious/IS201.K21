import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CONTRACT } from 'src/shared/constant.shema';
import { Model } from 'mongoose';
import { ContractModel } from './contract.model';
import { Pagination } from 'src/shared/service';
import { QueryOption } from 'src/shared/config-option-query';

@Injectable()
export class ContractService {
    constructor(
        @InjectModel(CONTRACT) private contractModel : Model<ContractModel>
    ){}

    async all(options:QueryOption){
        return await Pagination(this.contractModel,options);
    }
   async findById(id){
        return await this.contractModel.findById(id)
    }
   async create(data){
        return await (await this.contractModel.create(data)).save() 
    }
   async update(id,data){
        let res = await this.contractModel.findOne({_id :id}) 
        res = Object.assign(res,data)
        res.save();
    }
   async delete(id){
        return this.contractModel.findByIdAndDelete(id);
    }


}
