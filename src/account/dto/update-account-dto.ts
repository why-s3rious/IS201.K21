import { ApiProperty } from "@nestjs/swagger";

export class updateAccountDto {
    @ApiProperty()
    password ?:string ;
}