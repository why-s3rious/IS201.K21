import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { MotelRoomService } from './motel-room.service';
import { createMotelRoomDto } from './dto/create-motel-room-dto';
import { updateMotelRoomDto } from './dto/update-motel-room-dto';

@Controller('motel-room')
export class MotelRoomController {
    constructor(private motelRoomService: MotelRoomService) {}

    @Get()
    all() {
      return this.motelRoomService.all();
    }
    @Get(':id')
    getById(@Param('id') id) {
      return this.motelRoomService.findById(id);
    }
    @Post()
    create(@Body() data: createMotelRoomDto) {
      return this.motelRoomService.create(data);
    }
    @Patch(':id')
    update(@Param('id') id, @Body() data: updateMotelRoomDto) {
      return this.motelRoomService.update(id, data);
    }
    @Delete(':id')
    delete(@Param('id') id) {
      return this.motelRoomService.delete(id);
    }

}
