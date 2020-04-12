import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CONTRACT } from 'src/shared/constant.shema';
import { ContractSchema } from './contract.model';

@Module({
  imports:[MongooseModule.forFeature([{name:CONTRACT,schema:ContractSchema}])],
  controllers: [ContractController],
  providers: [ContractService]
})
export class ContractModule {}
