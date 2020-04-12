import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { createPaymentDto } from './dto/create-payment-dto';
import { updatePaymentDto } from './dto/update-payment-dto';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';

@ApiTags('payment')
@ApiSecurity('api_key')
@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @Get()
    all() {
      return this.paymentService.all();
    }
    @Get(':id')
    getById(@Param('id') id) {
      return this.paymentService.findById(id);
    }
    @Post()
    create(@Body() data: createPaymentDto) {
      return this.paymentService.create(data);
    }
    @Patch(':id')
    update(@Param('id') id, @Body() data: updatePaymentDto) {
      return this.paymentService.update(id, data);
    }
    @Delete(':id')
    delete(@Param('id') id) {
      return this.paymentService.delete(id);
    }

}
