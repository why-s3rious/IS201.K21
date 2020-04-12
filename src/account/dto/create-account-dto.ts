import { ApiProperty } from '@nestjs/swagger';

export class creatAccountDto {
    @ApiProperty()
    username :string ;
    @ApiProperty()
    password :string ;
}