import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { createRecieptDto } from './dto/create-reciept-dto';
import { updateRecieptDto } from './dto/update-reciept-dto';
import { RecieptService } from './reciept.service';

@Controller('reciept')
export class RecieptController {
    constructor(private recieptService: RecieptService) {}

    @Get()
    all() {
      return this.recieptService.all();
    }
    @Get(':id')
    getById(@Param('id') id) {
      return this.recieptService.findById(id);
    }
    @Post()
    create(@Body() data: createRecieptDto) {
      return this.recieptService.create(data);
    }
    @Patch(':id')
    update(@Param('id') id, @Body() data: updateRecieptDto) {
      return this.recieptService.update(id, data);
    }
    @Delete(':id')
    delete(@Param('id') id) {
      return this.recieptService.delete(id);
    }

}
