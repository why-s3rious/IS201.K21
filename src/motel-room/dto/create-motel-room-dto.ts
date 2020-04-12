import { ApiProperty } from '@nestjs/swagger';

export class createMotelRoomDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  waterIndex: string;
  @ApiProperty()
  electricIndex: string;
}
