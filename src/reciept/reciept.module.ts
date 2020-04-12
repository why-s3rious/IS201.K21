import { Module } from '@nestjs/common';
import { RecieptController } from './reciept.controller';
import { RecieptService } from './reciept.service';
import { RECEIPT } from 'src/shared/constant.shema';
import { RecieptSchema } from './reciept.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RECEIPT, schema: RecieptSchema }]),
  ],
  controllers: [RecieptController],
  providers: [RecieptService],
})
export class RecieptModule {}
