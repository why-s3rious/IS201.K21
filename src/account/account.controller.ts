import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';

@ApiTags('account')
@ApiSecurity('api_key')
@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  all() {
    return this.accountService.all();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.accountService.findById(id);
  }

  @Post()
  create(@Body() data) {
    return this.accountService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() data) {
    return this.accountService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.accountService.delete(id);
  }
}
