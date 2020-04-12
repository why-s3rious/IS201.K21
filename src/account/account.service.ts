import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ACCOUNT } from 'src/shared/constant.shema';
import { Model } from 'mongoose';
import {AccountModel} from './account.model';
@Injectable()
export class AccountService {
    constructor(
        @InjectModel(ACCOUNT) private accountModel:Model<AccountModel> 
    ){}

   async all(){
        return await this.accountModel.find();
    }
   async findById(id){
        return await this.accountModel.findById(id)
    }
   async create(data){
        return await (await this.accountModel.create(data)).save() 
    }
   async update(id,data){
        let res = await this.accountModel.findById(id)
        res = Object.assign(res,data) 
        return  await res.save()
    }
   async delete(id){
        return await this.accountModel.findByIdAndDelete(id)
    }
}
