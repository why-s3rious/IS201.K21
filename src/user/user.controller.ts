import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { identity } from 'rxjs';
import { createUserDto } from './dto/create-user-dto';
import { updateUserDto } from './dto/update-user-dto';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';

@ApiTags('user')
@ApiSecurity('api_key')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  all() {
    return this.userService.all();
  }
  @Get(':id')
  getById(@Param('id') id) {
    return this.userService.findById(id);
  }
  @Post()
  create(@Body() data: createUserDto) {
    return this.userService.create(data);
  }
  @Patch(':id')
  update(@Param('id') id, @Body() data: updateUserDto) {
    return this.userService.update(id, data);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return this.userService.delete(id);
  }
}
