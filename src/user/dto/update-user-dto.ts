import { ApiProperty } from '@nestjs/swagger';

export class updateUserDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  info?: string;
  @ApiProperty()
  contact?: string;
  @ApiProperty()
  desc?: string;
  @ApiProperty()
  id_contract?: string;
}
