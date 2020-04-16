import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm'; 
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { ContractModule } from './contract/contract.module';
import { PaymentModule } from './payment/payment.module';
import { RecieptModule } from './reciept/reciept.module';
import { MotelRoomModule } from './motel-room/motel-room.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot("mongodb+srv://anhtu:0938615915@cluster0-ffgjh.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true} ),
    AccountModule,
    ContractModule,
    PaymentModule,
    RecieptModule,
    MotelRoomModule,
    AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
