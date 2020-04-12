import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ContractService } from './contract.service';
import { createContractDto } from './dto/create-contract-dto';
import { updateContractDto } from './dto/update-contract-dto';

@Controller('contract')
export class ContractController {
  constructor(private contractService: ContractService) {}

  @Get()
  all() {
    return this.contractService.all();
  }
  @Get(':id')
  getById(@Param('id') id) {
    return this.contractService.findById(id);
  }
  @Post()
  create(@Body() data: createContractDto) {
    return this.contractService.create(data);
  }
  @Patch(':id')
  update(@Param('id') id, @Body() data: updateContractDto) {
    return this.contractService.update(id, data);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return this.contractService.delete(id);
  }
}
