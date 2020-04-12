import { ApiProperty } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  info: string;
  @ApiProperty()
  contact: string;
  @ApiProperty()
  desc: string;
  @ApiProperty()
  id_contract: string;
}
