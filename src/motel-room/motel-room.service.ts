import { Injectable } from '@nestjs/common';
import { MOTEL_ROOM } from 'src/shared/constant.shema';
import { MotelRoomModel } from './motel-room.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MotelRoomService {
  constructor(
    @InjectModel(MOTEL_ROOM) private motelRoomModel: Model<MotelRoomModel>,
  ) {}

  async all() {
    return await this.motelRoomModel.find();
  }
  async findById(id) {
    return await this.motelRoomModel.findById(id);
  }
  async create(data) {
    return await (await this.motelRoomModel.create(data)).save();
  }
  async update(id, data) {
    let res = await this.motelRoomModel.findOne({ _id: id });
    res = Object.assign(res, data);
    res.save();
  }
  async delete(id) {
    return this.motelRoomModel.findByIdAndDelete(id);
  }
}
