import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ACCOUNT } from 'src/shared/constant.shema';
import { AccountSchema } from './account.model';

@Module({
  imports :[MongooseModule.forFeature([{name:ACCOUNT,schema:AccountSchema}])],
  providers: [AccountService],
  controllers: [AccountController]
})
export class AccountModule {}
