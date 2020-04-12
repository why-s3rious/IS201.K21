import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import {USER} from 'src/shared/constant.shema';

@Module({
  imports:[MongooseModule.forFeature([{name:USER,schema:UserSchema}])], 
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
