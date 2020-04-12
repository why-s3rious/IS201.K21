import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/shared/constant.shema';
import { Model } from 'mongoose';
import {UserModel} from './user.model';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(USER) private userModel:Model<UserModel> 
    ){}
   async all(){
        return await this.userModel.find();
    }
   async findById(id){
        return await this.userModel.findById(id)
    }
   async create(data){
        return await (await this.userModel.create(data)).save() 
    }
   async update(id,data){
        let res = await this.userModel.findOne({_id :id}) 
        res = Object.assign(res,data)
        res.save();
    }
   async delete(id){
        return this.userModel.findByIdAndDelete(id);
    }
}
