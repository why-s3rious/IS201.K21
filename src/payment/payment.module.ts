import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PAYMENT } from 'src/shared/constant.shema';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './payment.model';

@Module({
  imports :[MongooseModule.forFeature([{ name: PAYMENT, schema: PaymentSchema }]),
],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
