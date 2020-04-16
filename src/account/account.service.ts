import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ACCOUNT } from 'src/shared/constant.shema';
import { Model } from 'mongoose';
import {AccountModel} from './account.model';
import { QueryOption } from 'src/shared/config-option-query';
import { Pagination } from 'src/shared/service';
@Injectable()
export class AccountService {
    constructor(
        @InjectModel(ACCOUNT) private accountModel:Model<AccountModel> 
    ){}
   async all(options: QueryOption): Promise<AccountModel[]|any>{
        return await Pagination(this.accountModel,options)
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
    async findByUserName(username):Promise<any> {
        try{
        return await this.accountModel.findOne({username:username})
        }
        catch(er){
            return Error(er)
        }
    }
}
