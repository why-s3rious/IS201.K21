import { Module } from '@nestjs/common';
import { MotelRoomController } from './motel-room.controller';
import { MotelRoomService } from './motel-room.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MOTEL_ROOM } from 'src/shared/constant.shema';
import { MotelRoomSchema } from './motel-room.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MOTEL_ROOM, schema: MotelRoomSchema }]),
  ],
  controllers: [MotelRoomController],
  providers: [MotelRoomService],
})
export class MotelRoomModule {}
